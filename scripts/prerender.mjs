// Renders the home page into dist/index.html after `vite build` and the SSR
// build of src/entry-server.jsx. main.jsx hydrates this markup on the client.
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
