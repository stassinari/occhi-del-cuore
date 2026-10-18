import { readdir, readFile, access } from 'node:fs/promises';
import { resolve, join, relative } from 'node:path';

const root = resolve('build');

async function findHtml(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? findHtml(path) : entry.name.endsWith('.html') ? [path] : [];
  }));
  return nested.flat();
}

const pages = await findHtml(root);
if (!pages.length) throw new Error('No prerendered pages found. Run npm run build first.');

const failures = [];
let references = 0;
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  if (/<(?:script|form)\b/i.test(html)) failures.push(`${relative(root, page)}: script or form in static output`);
  const documentUrl = new URL(relative(root, page), 'https://static.invalid/');
  const metadata = [...html.matchAll(/<meta\s+[^>]*>/g)].map(([tag]) =>
    Object.fromEntries([...tag.matchAll(/([\w:]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])));
  const meta = (key) => {
    const matches = metadata.filter(tag => tag.property === key || tag.name === key);
    if (matches.length !== 1 || !matches[0].content) {
      failures.push(`${relative(root, page)}: missing or duplicate ${key}`);
    }
    return matches[0]?.content;
  };
  const title = meta('og:title');
  const description = meta('og:description');
  if (title !== html.match(/<title>(.*?)<\/title>/)?.[1] || description !== meta('description')) {
    failures.push(`${relative(root, page)}: inconsistent sharing title or description`);
  }
  const siteUrl = 'https://fabio-occhidelcuore.it';
  const pagePath = documentUrl.pathname.replace(/index\.html$/, '');
  if (meta('og:url') !== `${siteUrl}${pagePath}`) {
    failures.push(`${relative(root, page)}: incorrect sharing URL`);
  }
  const image = meta('og:image');
  if (image !== `${siteUrl}/images/social-preview.jpg` || meta('og:image:type') !== 'image/jpeg'
    || meta('og:image:width') !== '1200' || meta('og:image:height') !== '630'
    || meta('twitter:card') !== 'summary_large_image' || meta('twitter:image') !== image
    || meta('twitter:title') !== title || meta('twitter:description') !== description
    || meta('twitter:image:alt') !== meta('og:image:alt')) {
    failures.push(`${relative(root, page)}: inconsistent sharing image or card metadata`);
  }
  try {
    const imagePath = new URL(image).pathname;
    const bytes = await readFile(join(root, imagePath));
    if (bytes[0] !== 0xff || bytes[1] !== 0xd8) throw new Error('Not a JPEG');
  } catch {
    failures.push(`${relative(root, page)}: missing or invalid sharing image`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = new URL(match[1], documentUrl);
    if (url.origin !== documentUrl.origin) {
      failures.push(`${relative(root, page)}: external reference ${match[1]}`);
      continue;
    }
    const path = join(root, decodeURIComponent(url.pathname), url.pathname.endsWith('/') ? 'index.html' : '');
    try {
      await access(path);
      if (url.hash) {
        const destination = await readFile(path, 'utf8');
        if (!destination.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`)) {
          failures.push(`${relative(root, page)}: missing anchor ${match[1]}`);
        }
      }
    } catch {
      failures.push(`${relative(root, page)}: missing file ${match[1]}`);
    }
    references++;
  }
}
if (failures.length) throw new Error(failures.join('\n'));
console.log(`Verified ${pages.length} static pages, sharing metadata, and ${references} local references. No scripts, forms, or external references.`);
