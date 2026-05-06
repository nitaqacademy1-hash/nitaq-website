/**
 * Production pre-rendering script using Puppeteer.
 *
 * 1. Starts a local static server on the /dist folder
 * 2. Launches headless Chrome via Puppeteer
 * 3. Visits each route and waits for React to render
 * 4. Captures the fully rendered HTML (with all visible content)
 * 5. Writes it back to dist/<route>/index.html
 *
 * This replaces the old meta-only prerender (prerender-meta.mjs).
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'fs';
import { dirname, join, extname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

// ── All routes to pre-render ──
const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/enquiry',
  '/courses',
  '/articles',
  '/test-preparations',
  '/language-trainings',
  '/professional-certifications',
  '/corporate-trainings',
  '/finance-courses',
  '/sat-preparation-sharjah',
  '/sat-preparation-dubai',
  '/ielts-course',
  '/ielts-coaching-dubai',
  '/gre-preparation',
  '/gmat-preparation',
  '/toefl-course',
  '/pte-course',
  '/acca-course',
  '/cma-course',
  '/cpa-course',
  '/uae-vat',
  '/uae-corporate-tax',
  '/ai-course',
  '/power-bi-excel',
  '/chrm',
  '/hrm-courses',
  '/sales-negotiations',
  '/marketing-training',
  '/cpcd-courses',
  '/data-management',
  '/soft-skills-training',
  '/spoken-english',
  '/spoken-arabic',
  '/french',
  '/german',
  '/spanish',
  '/academic-excellence',
  '/foundation-jee-neet',
  '/ai-robotics-kids',
  '/article/sat-coaching-sharjah',
  '/article/sat-score-1300-guide',
  '/article/sat-vs-ielts-guide',
  '/article/common-sat-mistakes',
  '/article/ielts-dubai-guide',
  '/article/improve-ielts-band-score',
  '/article/professional-courses-sharjah-growth',
  '/article/acca-coaching-uae-benefits',
  '/article/ai-courses-sharjah-essential',
  '/article/best-training-institute-sharjah',
  '/article/choose-right-course-uae',
  '/terms-and-conditions',
  '/privacy-policy',
  '/ig/2026-03-29',
];

// ── MIME types ──
const MIME = {
  '.html': 'text/html', '.js': 'application/javascript',
  '.css': 'text/css', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ico': 'image/x-icon',
};

// ── Simple static file server with SPA fallback ──
function startServer(port) {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      const urlPath = req.url.split('?')[0]; // strip query
      let filePath = join(distDir, urlPath);

      // If it's a directory, look for index.html inside
      if (existsSync(filePath) && statSync(filePath).isDirectory()) {
        filePath = join(filePath, 'index.html');
      }

      // SPA fallback: if file doesn't exist, serve root index.html
      if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
        filePath = join(distDir, 'index.html');
      }

      const ext = extname(filePath);
      const contentType = MIME[ext] || 'application/octet-stream';

      try {
        const content = readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(port, () => {
      console.log(`📡 Static server at http://localhost:${port}`);
      resolve(server);
    });
  });
}

// ── Main prerender ──
async function prerender() {
  console.log('==========================================');
  console.log('   🚀 PUPPETEER PRE-RENDERING ENGINE');
  console.log('==========================================\n');

  if (!existsSync(join(distDir, 'index.html'))) {
    console.error('❌ dist/index.html not found. Run `vite build` first.');
    process.exit(1);
  }

  const PORT = 4173;
  const server = await startServer(PORT);
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu'],
    });

    let success = 0;
    let fail = 0;

    for (const route of ROUTES) {
      try {
        const page = await browser.newPage();

        // Block heavy resources we don't need for HTML capture
        await page.setRequestInterception(true);
        page.on('request', (req) => {
          const type = req.resourceType();
          if (['image', 'font', 'media'].includes(type)) {
            req.abort();
          } else {
            req.continue();
          }
        });

        const url = `http://localhost:${PORT}${route}`;
        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

        // Wait for React to mount content inside #root
        await page.waitForSelector('#root > *', { timeout: 10000 });

        // Brief extra wait for lazy content / animations
        await new Promise((r) => setTimeout(r, 800));

        // Grab the fully rendered HTML
        let html = await page.content();

        // Remove any Puppeteer-injected scripts or artifacts
        // Also remove the live-reload / HMR scripts that don't belong in production
        html = html.replace(/<script[^>]*puppeteer[^>]*>[\s\S]*?<\/script>/gi, '');

        // Write to the correct output path
        const routePath = route === '/' ? '' : route.replace(/^\//, '');
        let outFile;

        if (routePath === '') {
          outFile = join(distDir, 'index.html');
        } else {
          const outDir = join(distDir, routePath);
          if (!existsSync(outDir)) {
            mkdirSync(outDir, { recursive: true });
          }
          outFile = join(outDir, 'index.html');
        }

        writeFileSync(outFile, html, 'utf-8');

        // Quick verification: check if #root has real content
        const rootMatch = html.match(/<div id="root"[^>]*>([\s\S]*?)<\/div>\s*<\/body>/);
        const contentLength = rootMatch ? rootMatch[1].trim().length : 0;

        if (contentLength > 100) {
          success++;
          console.log(`✅ ${route}  (${(html.length / 1024).toFixed(0)}KB)`);
        } else {
          success++;
          console.log(`⚠️  ${route}  (sparse: ${contentLength} chars)`);
        }

        await page.close();
      } catch (err) {
        fail++;
        console.error(`❌ ${route} — ${err.message}`);
      }
    }

    console.log('\n==========================================');
    console.log(`🎉 Done: ${success} success, ${fail} failed out of ${ROUTES.length}`);
    console.log('==========================================');

  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

// ── Sitemap generation ──
function generateSitemap() {
  console.log('\n🗺️  Generating sitemap.xml...');
  const today = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const route of ROUTES) {
    let priority = '0.8';
    if (route === '/') priority = '1.0';
    else if (/course|preparation|ielts|gre|gmat|sat-/.test(route)) priority = '0.9';
    else if (/article|ig\//.test(route)) priority = '0.7';
    else if (/privacy|terms/.test(route)) priority = '0.3';

    xml += `  <url>\n    <loc>https://www.nitaqacademy.com${route === '/' ? '/' : route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
  }

  xml += '</urlset>';
  writeFileSync(join(distDir, 'sitemap.xml'), xml, 'utf-8');
  console.log('✅ sitemap.xml written');
}

// ── Run ──
await prerender();
generateSitemap();
