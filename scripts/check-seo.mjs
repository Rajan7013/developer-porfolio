import { writeFileSync, mkdirSync } from 'node:fs';
const base = process.env.AUDIT_BASE_URL || 'http://localhost:3101';
const routes = ['/', '/about', '/services', '/certificate', '/stack', '/technologies', '/projects', '/contact'];
const results = [];
const titles = new Set();
for (const path of routes) {
  const response = await fetch(base + path);
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const h1 = (html.match(/<h1[ >]/g) || []).length;
  const expected = 'https://rajan-portfolio-iota.vercel.app' + (path === '/' ? '' : path === '/technologies' ? '/stack' : path);
  if (response.status !== 200 || !title || titles.has(title) || !description || canonical !== expected || h1 !== 1) throw Error('Metadata check failed: ' + path);
  titles.add(title);
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) JSON.parse(match[1]);
  results.push({ path, status: response.status, title, canonical, h1 });
}
const manifest = await (await fetch(base + '/manifest.webmanifest')).json();
for (const path of ['/robots.txt', '/sitemap.xml', '/og-image.png', ...manifest.icons.map(icon => icon.src)]) {
  const response = await fetch(base + path);
  if (!response.ok) throw Error('Missing SEO/PWA asset: ' + path);
}
const admin = await (await fetch(base + '/admin/dashboard')).text();
if (!admin.includes('noindex')) throw Error('Admin should not be indexed');
mkdirSync('artifacts/lighthouse', { recursive: true });
writeFileSync('artifacts/lighthouse/metadata-check.json', JSON.stringify(results, null, 2));
console.log('PASS: unique titles, descriptions, canonicals, one H1 per public route, JSON-LD, sitemap/robots, social image, manifest icons, and admin noindex.');

