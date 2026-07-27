/**
 * Browser-less SSR Pre-rendering Script.
 * 
 * This script:
 * 1. Builds the SSR bundle (src/entry-server.jsx)
 * 2. Uses the render() function from that bundle to generate HTML for each route
 * 3. Injects the HTML into the dist/index.html template
 * 4. Generates a sitemap.xml
 * 
 * NO PUPPETEER / NO CHROME REQUIRED. Works on Vercel.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { build } from 'vite'
import { getSeoRoute } from '../src/seo-routes.js'
import { LANGUAGES, langFromPath, stripLangPrefix, localizePath } from '../src/i18n/config.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')

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
  '/professional-marketing-course',
  '/courses/professional-digital-marketing-course-sharjah-uae',
  '/software-engineering-diploma-sharjah',
  '/cybersecurity-course-sharjah',
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
  '/article/top-skills-uae-2026',
  '/article/best-ai-courses-dubai',
  '/article/why-not-getting-hired-uae',
  '/article/best-professional-certifications-uae',
  '/article/digital-marketing-salary-increase-uae',
  '/article/ai-skills-every-student-needs',
  '/article/improve-english-better-jobs',
  '/article/digital-marketing-seo-guide-uae',
  '/article/best-digital-marketing-course-uae',
  '/article/professional-digital-marketing-course-overview',
  '/article/how-to-choose-best-digital-marketing-institute-sharjah-dubai-uae',
  '/terms-and-conditions',


  '/privacy-policy',
  '/ig/2026-03-29',
  '/webinar/ai',
  '/webinar/ai/thank-you',
  '/webinar/counselors',
  '/webinar/counselors/thank-you'
]

// Every English route also ships an Arabic twin at /ar/... so crawlers get a
// real document per locale instead of the SPA fallback.
const LOCALIZED_ROUTES = [
  ...ROUTES,
  ...ROUTES.map((route) => localizePath(route, 'ar')),
]

async function prerender() {
  console.log('==========================================')
  console.log('🚀 SSR PRE-RENDERING ENGINE (BROWSER-LESS)')
  console.log('==========================================\n')

  // 1. Check if client build exists
  if (!existsSync(resolve(root, 'dist/index.html'))) {
    console.error('❌ dist/index.html not found. Run `vite build` first.')
    process.exit(1)
  }

  // 2. Build the server entry
  process.env.NODE_ENV = 'production'
  console.log('🔨 Building server entry...')
  await build({
    build: {
      ssr: true,
      outDir: 'dist-ssr',
      rollupOptions: {
        input: 'src/entry-server.jsx',
        output: {
          format: 'esm',
        },
      },
    },
    ssr: {
      noExternal: ['react-router-dom', 'react-helmet-async']
    }
  })

  // 3. Load the render function
  const serverPath = resolve(root, 'dist-ssr/entry-server.js')
  const serverUrl = pathToFileURL(serverPath).href
  const { render } = await import(serverUrl)

  // 4. Read template
  const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

  // 5. Render routes
  console.log('\n📄 Generating static pages...')
  let success = 0
  let fail = 0

  for (const url of LOCALIZED_ROUTES) {
    try {
      // 1. Safe layout bundle fallback parsing
      let html = '';
      try {
        const { render } = await import(serverUrl);
        const rendered = await render(url); // async: static prerender awaits lazy chunks
        html = rendered.html || '';
        if (!html) {
          throw new Error('empty render output');
        }
      } catch (ssrErr) {
        console.warn(`⚠️ React HTML shell skipped for route [${url}]: ${ssrErr.message}`);
      }

      // 2. Pure JavaScript Metadata Generation (Bypasses React Crashes entirely)
      const siteUrl = 'https://www.nitaqacademy.com';

      // SEO copy is keyed by the language-neutral path, so /ar/about reuses
      // /about's entry until an Arabic override exists.
      const lang = langFromPath(url);
      const basePath = stripLangPrefix(url);
      const localeMeta = LANGUAGES[lang];

      const routeData = getSeoRoute(basePath, lang) || {
        title: "NITAQ ACADEMY Sharjah | IELTS, ACCA, AI & Language Courses",
        description: "Top-rated training academy in Sharjah offering IELTS, TOEFL, ACCA, CMA, AI & language courses.",
      };

      const fullUrl = `${siteUrl}${url}`;
      const ogImageUrl = routeData.ogImage ? (routeData.ogImage.startsWith('http') ? routeData.ogImage : `${siteUrl}${routeData.ogImage}`) : `${siteUrl}/images/logo1.webp`;

      const alternateLinks = Object.values(LANGUAGES)
        .map((l) => `<link rel="alternate" hreflang="${l.code}" href="${siteUrl}${localizePath(basePath, l.code)}" />`)
        .join('\n        ');
      const alternateLocales = Object.values(LANGUAGES)
        .filter((l) => l.code !== lang)
        .map((l) => `<meta property="og:locale:alternate" content="${l.ogLocale}" />`)
        .join('\n        ');

      // Build the pristine HTML header block manually
      const generatedHead = `
        <title>${routeData.title}</title>
        <meta name="description" content="${routeData.description}" />
        <link rel="canonical" href="${fullUrl}" />
        ${alternateLinks}
        <link rel="alternate" hreflang="x-default" href="${siteUrl}${localizePath(basePath, 'en')}" />
        <meta property="og:url" content="${fullUrl}" />
        <meta property="og:title" content="${routeData.ogTitle || routeData.title}" />
        <meta property="og:description" content="${routeData.ogDescription || routeData.description}" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="${localeMeta.ogLocale}" />
        ${alternateLocales}
        <meta property="og:image" content="${ogImageUrl}" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${routeData.ogTitle || routeData.title}" />
        <meta name="twitter:description" content="${routeData.ogDescription || routeData.description}" />
        <meta name="twitter:image" content="${ogImageUrl}" />
      `.trim();

      // React 19 renders <title>/<meta>/<link> in place and only hoists them
      // to <head> on the client, so renderToString leaves them inside #root.
      // The head built above is authoritative, so drop the inline duplicates —
      // otherwise every page ships two canonicals and two sets of hreflang.
      // Resource hints (preload/preconnect/prefetch) are not duplicated by the
      // head builder, so those are lifted into <head> rather than discarded.
      let hoistedHints = '';
      const leadingMeta = html.match(
        /^(?:\s*<(?:title|meta|link)\b[^>]*(?:\/>|>(?:[\s\S]*?<\/title>)?))+/i
      );
      if (leadingMeta) {
        for (const tag of leadingMeta[0].match(/<link\b[^>]*>/gi) || []) {
          if (/rel=["'](?:preload|preconnect|prefetch|dns-prefetch)["']/i.test(tag)) {
            hoistedHints += `\n        ${tag}`;
          }
        }
        html = html.slice(leadingMeta[0].length);
      }

      // 3. Inject strings safely into target templates
      let output = template
        .replace(/<!--\s*JSON-LD managed by SEO\.jsx\s*-->|<!--\s*ssr-head\s*-->/i, generatedHead + hoistedHints)
        // The template ships a fixed lang="en"; each locale needs its own.
        .replace(/<html[^>]*>/i, `<html lang="${localeMeta.code}" dir="${localeMeta.dir}">`)
        .replace(/<div\s+id=["']root["'][^>]*>([\s\S]*?)<\/div>/i, `<div id="root">${html}</div>`);

      const filePath = resolve(root, 'dist', url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`)
      const dir = dirname(filePath)

      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }

      writeFileSync(filePath, output)
      success++
      console.log(`✅ Fixed & Generated: ${url}`)
    } catch (e) {
      fail++
      console.error(`❌ ${url} — ${e.message}`)
    }
  }

  // 6. Generate Sitemap
  console.log('\n🗺️  Generating sitemap.xml...')
  const today = new Date().toISOString().split('T')[0]
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`

  // One <url> per locale, each listing every locale as an alternate — that
  // reciprocal linking is what Google requires to treat them as one page.
  for (const route of LOCALIZED_ROUTES) {
    // Skip low-value pages from sitemap
    const basePath = stripLangPrefix(route)
    if (basePath.includes('thank-you') || basePath.startsWith('/ig/') || basePath === '/enquiry') {
      continue;
    }

    let priority = '0.8'
    if (basePath === '/') priority = '1.0'
    else if (/course|prep|ielts|gre|gmat/.test(basePath)) priority = '0.9'

    const alternates = Object.values(LANGUAGES)
      .map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="https://www.nitaqacademy.com${localizePath(basePath, l.code)}" />`)
      .join('\n')

    sitemap += `  <url>\n    <loc>https://www.nitaqacademy.com${route}</loc>\n${alternates}\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`
  }
  sitemap += '</urlset>'
  writeFileSync(resolve(root, 'dist/sitemap.xml'), sitemap)
  console.log('✅ sitemap.xml written')

  console.log('\n==========================================')
  console.log(`🎉 Done: ${success} success, ${fail} failed`)
  console.log('==========================================')
}

prerender()
