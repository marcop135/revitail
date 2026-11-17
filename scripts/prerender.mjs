// Renders the home page into dist/index.html after `vite build` and the SSR
// build of src/entry-server.jsx. main.jsx hydrates this markup on the client.
// Then stamps each page's last commit date into its JSON-LD dateModified, its
// Markdown twin's frontmatter and its sitemap <lastmod>.
import { execFileSync } from 'node:child_process';
import { readFile, rm, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const ssrDir = resolve(root, 'dist-ssr');
const indexPath = resolve(root, 'dist/index.html');
const MOUNT = '<div id="app"></div>';

const { render } = await import(
  pathToFileURL(resolve(ssrDir, 'entry-server.js')).href
);
const html = await readFile(indexPath, 'utf8');
if (!html.includes(MOUNT)) {
  throw new Error(`prerender: ${MOUNT} not found in dist/index.html`);
}
const markup = await render();
// The CSP is script-src 'self'; any inline script React emits would be blocked.
if (/<script(?![^>]*\ssrc=)/.test(markup)) {
  throw new Error('prerender: markup contains an inline script');
}
await writeFile(
  indexPath,
  html.replace(MOUNT, `<div id="app">${markup}</div>`)
);
await rm(ssrDir, { recursive: true, force: true });
console.log(`prerender: wrote ${markup.length} chars into dist/index.html`);

const SITE = 'https://vitereact.marcopontili.com';
// Source files whose last commit dates each page. Keep in step with public/sitemap.xml.
const PAGES = [
  {
    loc: `${SITE}/`,
    html: 'index.html',
    md: 'index.md',
    sources: [
      'index.html',
      'public/index.md',
      'src/components',
      'src/constants.js',
    ],
  },
  {
    loc: `${SITE}/privacy.html`,
    html: 'privacy.html',
    md: 'privacy.md',
    sources: ['public/privacy.html', 'public/privacy.md'],
  },
];

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
}

/**
 * Replace exactly one match of `pattern` in a dist file, so a renamed field
 * fails the build instead of shipping a stale date.
 */
async function stamp(file, pattern, replacement) {
  const path = resolve(root, 'dist', file);
  const text = await readFile(path, 'utf8');
  const matches =
    text.match(new RegExp(pattern.source, `${pattern.flags}g`)) ?? [];
  if (matches.length !== 1) {
    throw new Error(
      `prerender: expected one ${pattern} in dist/${file}, found ${matches.length}`
    );
  }
  await writeFile(path, text.replace(pattern, replacement));
}

let history = false;
try {
  history = git(['rev-parse', '--is-shallow-repository']) === 'false';
} catch {
  history = false;
}

if (!history) {
  console.warn(
    'prerender: no full git history (shallow clone or no repo), keeping the typed dates'
  );
} else {
  for (const page of PAGES) {
    const date = git(['log', '-1', '--format=%cI', '--', ...page.sources]);
    if (!date) throw new Error(`prerender: no commit touches ${page.sources}`);
    await stamp(
      page.html,
      /"dateModified": "[^"]*"/,
      `"dateModified": "${date}"`
    );
    await stamp(page.md, /^dateModified: .*$/m, `dateModified: ${date}`);
    const loc = page.loc.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
    await stamp(
      'sitemap.xml',
      new RegExp(`(<loc>${loc}</loc>\\s*<lastmod>)[^<]*(</lastmod>)`),
      (_, open, close) => `${open}${date}${close}`
    );
    console.log(`prerender: dated ${page.loc} ${date}`);
  }
}
