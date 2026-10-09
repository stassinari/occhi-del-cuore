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
console.log(`Verified ${pages.length} static pages and ${references} local references. No scripts, forms, or external references.`);
