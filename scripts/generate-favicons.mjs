import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const source = new URL('../public/favicon.svg', import.meta.url);
const svg = await readFile(source);
const markup = svg
  .toString()
  .replace(/^<svg[^>]+>\s*/, '')
  .replace(/\s*<\/svg>\s*$/, '');
for (const [name, theme] of [
  ['readme.svg', 'light'],
  ['readme-dark.svg', 'dark'],
]) {
  const file = new URL(`../.github/brand/${name}`, import.meta.url);
  const badge =
    theme === 'dark'
      ? markup.replace('(prefers-color-scheme: dark)', 'all')
      : markup.replace(/<style>[\s\S]*?<\/style>\s*/, '');
  const image = await readFile(file, 'utf8');
  await writeFile(
    file,
    image.replace(
      /  <g transform="translate\(88 72\)">[\s\S]*?  <text class="kicker"/,
      `  <g transform="translate(88 72)">\n${badge}\n  </g>\n  <text class="kicker"`
    )
  );
}
const outputs = [
  ['favicon-96x96.png', 96],
  ['apple-touch-icon.png', 180],
  ['web-app-manifest-192x192.png', 192],
  ['web-app-manifest-512x512.png', 512],
];

for (const [name, size] of outputs) {
  const png = await sharp(svg, { density: 768 })
    .resize(size, size)
    .png()
    .toBuffer();
  await writeFile(new URL(`../public/${name}`, import.meta.url), png);
}

const sizes = [16, 32, 48];
const images = await Promise.all(
  sizes.map((size) =>
    sharp(svg, { density: 768 }).resize(size, size).png().toBuffer()
  )
);
const header = Buffer.alloc(6 + sizes.length * 16);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
for (const [index, size] of sizes.entries()) {
  const entry = 6 + index * 16;
  header[entry] = size;
  header[entry + 1] = size;
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(images[index].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += images[index].length;
}
await writeFile(
  new URL('../public/favicon.ico', import.meta.url),
  Buffer.concat([header, ...images])
);
