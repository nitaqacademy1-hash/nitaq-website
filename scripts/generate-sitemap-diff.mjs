import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const before = readFileSync(join(root, 'docs', 'SEO_LIVE_SITEMAP_STATUS_2026-10-03.csv'), 'utf8')
  .split(/\r?\n/).slice(1).filter(Boolean).map(row => row.split(',')[0]);
const after = [...readFileSync(join(root, 'dist', 'sitemap.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map(match => match[1]);
const current = new Set(after);
const previous = new Set(before);
const quote = value => `"${String(value).replace(/"/g, '""')}"`;
const rows = [...new Set([...before, ...after])].sort().map(url => {
  const was = previous.has(url), now = current.has(url);
  let reason = 'Retained canonical public route';
  if (!was && now) reason = 'New canonical public route; review before deployment';
  else if (was && !now && url.includes('/ar/')) reason = 'Arabic body is not translated; noindex until reviewed';
  else if (was && !now && url.endsWith('/sat/results')) reason = 'Student-specific result flow; noindex and exclude';
  else if (was && !now) reason = 'UNREVIEWED EXCLUSION — investigate before release';
  return [url, was ? 'yes' : 'no', now ? 'yes' : 'no', was && !now ? 'removed' : !was && now ? 'added' : 'retained', reason];
});
const csv = [['url', 'live_sitemap_2026_10_03', 'local_sitemap_2026_10_04', 'change', 'reason'], ...rows]
  .map(row => row.map(quote).join(',')).join('\n') + '\n';
writeFileSync(join(root, 'docs', 'SEO_SITEMAP_DIFF.csv'), csv);
const unresolved = rows.filter(row => row[4].startsWith('UNREVIEWED'));
console.log(`Sitemap diff: ${before.length} live, ${after.length} local, ${rows.filter(row => row[3] === 'removed').length} removed, ${unresolved.length} unexplained`);
if (unresolved.length) process.exitCode = 1;
