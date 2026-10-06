import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const dist = join(root, 'dist');
const site = 'https://www.nitaqacademy.com';
const errors = [];
const warnings = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const walk = directory => readdirSync(directory).flatMap(name => {
  const file = join(directory, name);
  return statSync(file).isDirectory() ? walk(file) : [file];
});
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'gi'))].map(match => match[0]);
const attribute = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`, 'i'))?.[1] || '';
const named = (html, tag, key, value) => tags(html, tag).filter(item => attribute(item, key) === value);
const textOf = (html, tag) => html.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'))?.[1]?.replace(/<[^>]+>/g, ' ').trim() || '';

assert(existsSync(join(dist, 'sitemap.xml')), 'Missing sitemap.xml');
assert(existsSync(join(dist, '404.html')), 'Missing custom 404.html');
assert(!JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')).rewrites.some(rule => rule.destination === '/index.html'), 'Catch-all index.html rewrite can return HTTP 200 for unknown URLs');
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }

const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const included = new Set(locs);
assert(locs.length === included.size, 'Duplicate sitemap URL');
const paths = new Map();
const internalLinks = new Map();
for (const file of walk(dist).filter(file => file === join(dist, 'index.html') || file.endsWith('/index.html'))) {
  const path = file === join(dist, 'index.html') ? '/' : `/${relative(dist, file).replace(/\/index\.html$/, '')}`;
  if (path.startsWith('/temp-landing')) continue;
  const html = readFileSync(file, 'utf8');
  const head = html.split(/<\/head>/i)[0];
  const title = textOf(head, 'title');
  const description = named(head, 'meta', 'name', 'description');
  const robots = named(head, 'meta', 'name', 'robots');
  const canonicals = named(head, 'link', 'rel', 'canonical');
  const alternates = named(head, 'link', 'rel', 'alternate');
  const shareImages = named(head, 'meta', 'property', 'og:image');
  const noindex = robots.some(tag => /noindex/i.test(attribute(tag, 'content')));
  const inSitemap = included.has(`${site}${path}`);
  const lang = html.match(/<html\b[^>]*lang="([^"]+)"/i)?.[1] || '';
  const schema = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  paths.set(path, { title, description: attribute(description[0] || '', 'content'), noindex, inSitemap });
  internalLinks.set(path, tags(html, 'a').map(tag => attribute(tag, 'href')).filter(Boolean));
  assert(title, `${path}: missing title`);
  assert(description.length === 1 && attribute(description[0], 'content'), `${path}: missing or duplicate description`);
  assert(robots.length === 1, `${path}: missing or duplicate robots tag`);
  assert(canonicals.length === 1 && attribute(canonicals[0], 'href') === `${site}${path}`, `${path}: conflicting or non-self canonical`);
  assert(shareImages.length === 1 && attribute(shareImages[0], 'content').startsWith(`${site}/`), `${path}: missing/non-absolute social image`);
  assert(lang === (path === '/ar' || path.startsWith('/ar/') ? 'ar' : 'en'), `${path}: incorrect document language`);
  assert(!inSitemap || (!noindex && textOf(html, 'h1')), `${path}: sitemap URL is noindex or missing H1`);
  assert(inSitemap || noindex, `${path}: indexable page missing from sitemap`);
  assert(!/This page does not exist/i.test(html), `${path}: nonexistent page was prerendered as success`);
  for (const item of schema) { try { JSON.parse(item[1]); } catch { errors.push(`${path}: invalid JSON-LD`); } }
  if (path === '/' || path === '/ar') {
    const pairs = new Map(alternates.map(tag => [attribute(tag, 'hreflang'), attribute(tag, 'href')]));
    assert(pairs.get('en') === `${site}/` && pairs.get('ar') === `${site}/ar` && pairs.get('x-default') === `${site}/`, `${path}: homepage hreflang is not reciprocal`);
  } else assert(!alternates.some(tag => attribute(tag, 'hreflang') === 'ar'), `${path}: unreviewed Arabic hreflang target`);
  if (path.startsWith('/article/') && inSitemap) assert(named(head, 'meta', 'property', 'og:type').some(tag => attribute(tag, 'content') === 'article'), `${path}: article social type missing`);
  if (inSitemap && !/\<main\b|\<article\b/i.test(html)) warnings.push(`${path}: no visible main/article element in initial HTML`);
}

const primary = ['/', '/ar', '/sat-preparation-sharjah', '/academic-excellence', '/language-trainings', '/contact'];
const redirects = new Set(JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8')).redirects.map(rule => rule.source));
for (const [source, links] of internalLinks) if (paths.get(source)?.inSitemap) for (const href of links) {
  if (!href.startsWith('/') && !href.startsWith(site)) continue;
  const pathname = href.replace(site, '').split(/[?#]/)[0].replace(/\/$/, '') || '/';
  if (!paths.has(pathname) && !redirects.has(pathname) && !existsSync(join(dist, pathname.replace(/^\//, '')))) {
    errors.push(`${source}: broken internal link ${href}`);
  }
}
for (const path of primary) assert(paths.get(path)?.inSitemap && !paths.get(path)?.noindex, `${path}: primary page unexpectedly noindex/missing`);
for (const path of paths.keys()) if (/^\/ar\/admin(?:\/|$)/.test(path)) errors.push(`${path}: nonexistent Arabic admin route prerendered`);
for (const url of locs) {
  assert(url.startsWith(`${site}/`) && paths.get(url.slice(site.length))?.inSitemap, `${url}: sitemap URL has no generated successful page`);
}
const titles = new Map(), descriptions = new Map();
for (const [path, row] of paths) if (row.inSitemap) {
  titles.set(row.title, [...(titles.get(row.title) || []), path]);
  descriptions.set(row.description, [...(descriptions.get(row.description) || []), path]);
}
for (const [value, list] of titles) if (value && list.length > 1) errors.push(`Duplicate indexable title: ${list.join(', ')}`);
for (const [value, list] of descriptions) if (value && list.length > 1) errors.push(`Duplicate indexable description: ${list.join(', ')}`);
console.log(`SEO check: ${paths.size} generated routes, ${locs.length} sitemap URLs, ${warnings.length} warnings, ${errors.length} errors`);
warnings.forEach(message => console.warn(`WARN ${message}`));
errors.forEach(message => console.error(`ERROR ${message}`));
if (errors.length) process.exitCode = 1;
