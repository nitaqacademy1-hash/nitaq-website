import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs';
import { join, relative } from 'path';

const root = new URL('../', import.meta.url).pathname;
const dist = join(root, 'dist');
const markdown = join(root, 'docs', 'SEO_ROUTE_INVENTORY.md');
const csv = join(root, 'docs', 'SEO_ROUTE_INVENTORY.csv');
const site = 'https://www.nitaqacademy.com';
const liveGetPath = join(root, 'docs', 'SEO_LIVE_GET_2026-10-04.csv');
const parseCsv = source => {
  const rows = []; let row = []; let field = ''; let quoted = false;
  for (let i = 0; i < source.length; i++) {
    const char = source[i];
    if (char === '"' && quoted && source[i + 1] === '"') { field += '"'; i++; }
    else if (char === '"') quoted = !quoted;
    else if (char === ',' && !quoted) { row.push(field); field = ''; }
    else if ((char === '\n' || char === '\r') && !quoted) {
      if (char === '\r' && source[i + 1] === '\n') i++;
      row.push(field); if (row.some(Boolean)) rows.push(row); row = []; field = '';
    } else field += char;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  const [headers, ...values] = rows;
  return values.map(cells => Object.fromEntries(headers.map((header, index) => [header, cells[index] || ''])));
};
const liveGet = new Map(parseCsv(readFileSync(liveGetPath, 'utf8')).map(row => [row.url, row]));
const sitemap = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
const sitemapUrls = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]));
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#(?:x27|39);/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const strip = value => decode(value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
const match = (html, pattern) => strip(html.match(pattern)?.[1] || '');
const attr = (html, tag, key, value, target) => {
  for (const found of html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'gi'))) {
    const properties = Object.fromEntries([...found[0].matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, name, contents]) => [name.toLowerCase(), contents]));
    if (properties[key] === value) return decode(properties[target] || '');
  }
  return '';
};
const walk = directory => readdirSync(directory).flatMap(name => { const file = join(directory, name); return statSync(file).isDirectory() ? walk(file) : [file]; });
const typeOf = path => path === '/' || path === '/ar' ? 'Homepage' : path.startsWith('/article/') ? 'Article' : /(^|\/)admin|results|quiz|math-report|verify|thank-you/.test(path) ? 'Private / utility' : path.includes('sat-preparation') ? 'SAT programme' : path === '/language-trainings' || /spoken-|french|german|spanish|ielts|toefl|pte/.test(path) ? 'Language / exam course' : path === '/academic-excellence' || path.includes('tuition') ? 'Subject tuition' : /contact|about|articles|courses|test-preparations/.test(path) ? 'Information / directory' : 'Other course / campaign';
const schemaTypes = html => {
  const types = new Set();
  for (const [, contents] of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const visit = value => {
        if (!value || typeof value !== 'object') return;
        if (value['@type']) (Array.isArray(value['@type']) ? value['@type'] : [value['@type']]).forEach(type => types.add(type));
        if (Array.isArray(value)) value.forEach(visit);
        else Object.values(value).forEach(visit);
      };
      visit(JSON.parse(contents));
    } catch { types.add('INVALID_JSON_LD'); }
  }
  return [...types].join(' ');
};
const intentOf = (path, type) => {
  if (path === '/' || path === '/ar') return 'Academy overview: SAT, subject tuition, languages in Sharjah';
  if (type === 'SAT programme') return 'Digital SAT preparation enquiry';
  if (type === 'Subject tuition') return 'Subject tuition enquiry';
  if (type === 'Language / exam course') return 'Language learning or named exam preparation';
  if (type === 'Article') return 'Informational search';
  if (path === '/contact') return 'Contact and location';
  if (type === 'Private / utility') return 'Task completion; not organic acquisition';
  return 'Named course or academy information';
};
const records = walk(dist).filter(file => (file === join(dist, 'index.html') || file.endsWith('/index.html')) && !file.includes('/temp-landing/')).map(file => {
  const html = readFileSync(file, 'utf8');
  const relativeFile = relative(dist, file);
  const path = relativeFile === 'index.html' ? '/' : `/${relativeFile.replace(/\/index\.html$/, '')}`;
  const canonical = attr(html, 'link', 'rel', 'canonical', 'href');
  const links = [...new Set([...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map(([, href]) => decode(href)).filter(href => href.startsWith('/') || href.startsWith(site)).map(href => href.replace(site, '').split(/[?#]/)[0]).filter(href => href && !href.startsWith('/images/') && !href.startsWith('/nitaq/')))];
  const robots = attr(html, 'meta', 'name', 'robots', 'content') || 'unspecified';
  const type = typeOf(path);
  const live = liveGet.get(`${site}${path}`);
  const hreflang = [...html.matchAll(/<link\b[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/gi)].map(([, language, href]) => `${language}:${decode(href)}`).join(' ');
  return {
    url: path, routeClass: type === 'Private / utility' ? 'generated utility' : 'generated public', type, status: '200 local prerender', localStatus: 'generated HTML; deployed HTTP unverified', liveGetStatus: live?.get_status || 'not checked', liveFinalUrl: live?.final_url || '', previewGetStatus: 'not checked', indexability: robots,
    canonical, title: match(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    description: attr(html, 'meta', 'name', 'description', 'content'),
    h1: match(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/i),
    language: html.match(/<html\b[^>]*lang="([^"]+)"/i)?.[1] || '', hreflang, schema: schemaTypes(html),
    intent: intentOf(path, type), internalLinks: links, incomingLinks: 0, sitemap: sitemapUrls.has(`${site}${path}`) ? 'yes' : 'no', keyContentIssues: '',
  };
}).sort((a, b) => a.url.localeCompare(b.url));
const byPath = new Map(records.map(row => [row.url, row]));
for (const row of records) for (const target of row.internalLinks) {
  const normalized = target.length > 1 ? target.replace(/\/$/, '') : target;
  if (byPath.has(normalized) && normalized !== row.url) byPath.get(normalized).incomingLinks++;
}
const titleCounts = new Map(), descriptionCounts = new Map();
for (const row of records.filter(row => row.sitemap === 'yes')) {
  titleCounts.set(row.title, (titleCounts.get(row.title) || 0) + 1);
  descriptionCounts.set(row.description, (descriptionCounts.get(row.description) || 0) + 1);
}
for (const row of records) {
  const issues = [];
  if (!row.title) issues.push('missing title');
  if (!row.description) issues.push('missing description');
  if (!row.h1 && row.sitemap === 'yes') issues.push('missing H1');
  if (row.sitemap === 'yes' && titleCounts.get(row.title) > 1) issues.push('duplicate indexable title');
  if (row.sitemap === 'yes' && descriptionCounts.get(row.description) > 1) issues.push('duplicate indexable description');
  if (row.sitemap === 'yes' && row.incomingLinks === 0 && row.url !== '/') issues.push('no incoming local link');
  if (row.url.startsWith('/ar/') && row.h1 && !/[\u0600-\u06ff]/.test(row.h1)) issues.push('English body under Arabic URL; translation pending');
  if (row.url.includes('webinar/')) issues.push('campaign date and current availability need review');
  row.keyContentIssues = issues.join('; ');
}
const routeConfig = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
const auxiliary = [
  ...routeConfig.redirects.map(rule => ({ url: rule.source, routeClass: 'redirect alias', type: 'Redirect alias', localStatus: `configured ${rule.permanent ? 'permanent' : 'temporary'} redirect to ${rule.destination}`, canonical: `${site}${rule.destination}`, indexability: 'redirect; not indexable' })),
  ...routeConfig.rewrites.filter(rule => rule.source.includes(':')).map(rule => ({ url: rule.source, routeClass: 'dynamic route pattern', type: 'Dynamic route', localStatus: `configured rewrite to ${rule.destination}`, indexability: 'utility; verify access control' })),
  ...['/ar/admin', '/ar/admin/login', '/does-not-exist-nitaq-audit'].map(url => ({ url, routeClass: 'nonexistent sample', type: 'Nonexistent path', localStatus: 'no generated HTML; expect HTTP 404', liveGetStatus: url === '/does-not-exist-nitaq-audit' ? '404' : '200', indexability: 'should not index', keyContentIssues: url.startsWith('/ar/admin') ? 'production false-200; preview 404 required' : 'production 404 observed' })),
].filter(row => !byPath.has(row.url));
for (const row of auxiliary) records.push({
  status: 'not prerendered', liveGetStatus: 'not checked', liveFinalUrl: '', previewGetStatus: 'not checked', title: '', description: '', h1: '', language: '', hreflang: '', schema: '', intent: 'Route handling', internalLinks: [], incomingLinks: 0, sitemap: 'no', keyContentIssues: '',
  ...row,
});
records.sort((a, b) => a.url.localeCompare(b.url));
const quoted = value => `"${String(value ?? '').replace(/"/g, '""')}"`;
const headers = ['url', 'routeClass', 'type', 'status', 'localStatus', 'liveGetStatus', 'liveFinalUrl', 'previewGetStatus', 'indexability', 'canonical', 'title', 'description', 'h1', 'language', 'hreflang', 'schema', 'intent', 'internalLinks', 'incomingLinks', 'sitemap', 'keyContentIssues'];
writeFileSync(csv, headers.join(',') + '\n' + records.map(row => headers.map(key => quoted(key === 'internalLinks' ? row[key].join(' ') : row[key])).join(',')).join('\n') + '\n');
const escaped = value => String(value || '—').replace(/\|/g, '\\|').replace(/\n/g, ' ');
const columns = ['URL', 'Type', 'Local status', 'Indexability', 'Canonical', 'Title', 'Description', 'H1', 'Primary intent', 'Internal links', 'Sitemap'];
const content = '# SEO route inventory\n\nGenerated from the local production prerender. “200 local prerender” means an HTML file exists; it does not prove the deployed HTTP status. The CSV is the full audit: it separates local, production GET and deployment-preview evidence and includes language, hreflang, schema, incoming links and content flags. Production GET data is a point-in-time crawl, not proof of indexing. This compact table shows internal-link counts and representative destinations.\n\n| ' + columns.join(' | ') + ' |\n|'+columns.map(() => '---').join('|')+'|\n' + records.map(row => '| '+[row.url,row.type,row.status,row.indexability,row.canonical,row.title,row.description,row.h1,row.intent,`${row.internalLinks.length} (${row.internalLinks.slice(0, 5).join(', ')})`,row.sitemap].map(escaped).join(' | ')+' |').join('\n') + '\n\nDynamic certificate verification paths and the static enrolment form are noted separately in the audit because they are not individual prerendered URLs.\n';
writeFileSync(markdown, content);
console.log(`Wrote ${records.length - auxiliary.length} generated routes and ${auxiliary.length} alias/dynamic/nonexistent records to ${markdown} and ${csv}`);
