// Checks the built site in dist/: title and description lengths, JSON-LD that
// parses and whose @id references resolve across the site, and internal links
// that point at files that exist. Run after `npm run build`; exits 1 on failure.
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const dist = resolve(root, 'dist');
const ORIGIN = 'https://vitereact.marcopontili.com';
const TITLE = [30, 65];
const DESCRIPTION = [70, 160];
// Build reports that are not part of the site.
const SKIP = new Set(['stats.html']);

const failures = [];
const fail = (file, message) => failures.push(`${file}: ${message}`);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const decode = (text) =>
  text
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n) =>
      String.fromCodePoint(parseInt(n, 16))
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

function checkLength(file, label, value, [min, max]) {
  if (value === null) return fail(file, `no ${label}`);
  const length = [...decode(value).trim()].length;
  if (length < min || length > max) {
    fail(
      file,
      `${label} is ${length} chars, expected ${min} to ${max}: "${value}"`
    );
  }
}

/** Collect @id definitions and bare {"@id"} references from a JSON-LD value. */
function collectIds(value, defined, referenced) {
  if (Array.isArray(value)) {
    for (const item of value) collectIds(item, defined, referenced);
    return;
  }
  if (!value || typeof value !== 'object') return;
  const keys = Object.keys(value);
  if (typeof value['@id'] === 'string') {
    if (keys.length === 1) referenced.push(value['@id']);
    else defined.add(value['@id']);
  }
  for (const key of keys)
    if (key !== '@id') collectIds(value[key], defined, referenced);
}

/** Map a root-relative or same-origin URL to the dist file it needs. */
function targetFile(url) {
  const path = decodeURIComponent(url.replace(ORIGIN, '').split(/[?#]/)[0]);
  if (path === '' || path.endsWith('/')) return join(dist, path, 'index.html');
  return join(dist, path);
}

if (!existsSync(dist)) {
  console.error('check-site: dist/ is missing, run npm run build first');
  process.exit(1);
}

const files = walk(dist);
const htmlFiles = files.filter(
  (path) => path.endsWith('.html') && !SKIP.has(relative(dist, path))
);
const textFiles = files.filter((path) => /\.(html|md|txt|xml)$/.test(path));
const defined = new Set();
const references = [];

for (const path of htmlFiles) {
  const file = relative(root, path);
  const html = readFileSync(path, 'utf8');

  const titles = [...html.matchAll(/<title>([^<]*)<\/title>/g)];
  if (titles.length > 1) fail(file, `${titles.length} <title> elements`);
  checkLength(file, 'title', titles[0]?.[1] ?? null, TITLE);
  const description =
    /<meta\s+name="description"\s+content="([^"]*)"/.exec(html)?.[1] ?? null;
  checkLength(file, 'description', description, DESCRIPTION);

  for (const [, json] of html.matchAll(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
  )) {
    try {
      const referenced = [];
      collectIds(JSON.parse(json), defined, referenced);
      references.push(...referenced.map((id) => [file, id]));
    } catch (error) {
      fail(file, `JSON-LD does not parse: ${error.message}`);
    }
  }

  for (const [, url] of html.matchAll(/\s(?:href|src)="(\/(?!\/)[^"]*)"/g)) {
    if (!existsSync(targetFile(url))) fail(file, `broken link ${url}`);
  }
}

const escaped = ORIGIN.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
for (const path of textFiles) {
  const file = relative(root, path);
  const text = readFileSync(path, 'utf8');
  for (const [url] of text.matchAll(
    new RegExp(`${escaped}/[^\\s"'<>)]*`, 'g')
  )) {
    if (!existsSync(targetFile(url))) fail(file, `broken link ${url}`);
  }
}

for (const [file, id] of references) {
  if (!defined.has(id)) fail(file, `JSON-LD @id ${id} resolves to no node`);
}

if (failures.length) {
  console.error(`check-site: ${failures.length} problem(s)`);
  for (const failure of failures) console.error(`  ${failure}`);
  process.exit(1);
}
console.log(
  `check-site: ${htmlFiles.length} pages, ${defined.size} JSON-LD nodes, links and lengths pass`
);
