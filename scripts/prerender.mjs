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
import { PUBLISHED_ARABIC_ROUTES } from '../src/i18n/published.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const escapeAttribute = value => String(value ?? '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const renderedTitle = html => html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]
const renderedMeta = (html, attribute, name) => html.match(new RegExp(`<meta\\s+${attribute}="${name}"\\s+content="([^"]*)"`, 'i'))?.[1]

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
  '/maths-tuition-sharjah',
  '/science-tuition-sharjah',
  '/physics-tuition-sharjah',
  '/chemistry-tuition-sharjah',
  '/biology-tuition-sharjah',
  '/business-studies-tuition-sharjah',
  '/accountancy-tuition-sharjah',
  '/economics-tuition-sharjah',
  '/english-tuition-sharjah',
  '/social-science-tuition-sharjah',
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
  '/article/why-hiring-digital-marketing-agency-transform-business',
  '/article/complete-guide-best-tuition-classes-dubai-sharjah-uae',
  '/article/academic-excellence-tuition-dubai-sharjah-uae',
  '/article/best-tuition-classes-sharjah-dubai-guide',
  '/article/comprehensive-subject-tuition-guide-sharjah-dubai-uae',
  '/article/digital-sat-preparation-guide-sharjah-dubai-uae',
  '/article/best-tuition-classes-near-me-sharjah',
  '/article/free-digital-sat-diagnostic-assessment-guide',
  '/article/how-to-register-for-sat-exam-uae-guide',
  '/terms-and-conditions',




  '/privacy-policy',
  '/ig/2026-03-29',
  '/webinar/ai',
  '/webinar/ai/thank-you',
  '/webinar/counselors',
  '/webinar/counselors/thank-you',
  '/sat/diagnostic',
  '/sat/diagnostic/quiz',
  '/sat/diagnostic/results',
  '/sat/diagnostic/math-report',
  '/sat/results',
  '/admin',
  '/admin/login',
  '/admin/dashboard',
  '/admin/students',
  '/admin/questions',
  '/admin/certificates',
  '/admin/sat/students',
  '/admin/sat/questions',
  '/verify-certificate',
  '/verify'
]

// Only publish Arabic routes whose complete page content has been reviewed.
// Other Arabic URLs still resolve for users, but SEO.jsx marks them noindex.

// Routes that exist ONLY in English and must NOT have an Arabic version prerendered:
// 1. Admin portal routes (exist only under /admin/*)
// 2. Interactive SAT test runner / student result routes (exist only under /sat/diagnostic/* and /sat/results)
const NON_LOCALIZED_ROUTES = [
  '/admin',
  '/admin/login',
  '/admin/dashboard',
  '/admin/students',
  '/admin/questions',
  '/admin/certificates',
  '/admin/sat/students',
  '/admin/sat/questions',
  '/sat/diagnostic/quiz',
  '/sat/diagnostic/results',
  '/sat/diagnostic/math-report',
  '/sat/results',
]

const LOCALIZED_ROUTES = [
  ...ROUTES,
  // Serve the correct noindex head even for unreviewed Arabic routes. They
  // remain accessible, but only the translated homepage enters the sitemap.
  ...ROUTES
    .filter((route) => !NON_LOCALIZED_ROUTES.some((nonLoc) => route === nonLoc || route.startsWith(nonLoc + '/')))
    .map((route) => localizePath(route, 'ar')),
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
        title: "Nitaq Academy | Education and Training in Sharjah",
        description: "Explore education and training programmes at Nitaq Academy in Al Majaz 3, Sharjah.",
      };
      const shouldNoIndex = basePath.startsWith('/admin')
        || basePath.startsWith('/verify')
        || basePath === '/enquiry'
        || basePath.startsWith('/ig/')
        || basePath === '/sat/results'
        || basePath.startsWith('/sat/diagnostic/results')
        || basePath.startsWith('/sat/diagnostic/quiz')
        || basePath.startsWith('/sat/diagnostic/math-report')
        || basePath.endsWith('/thank-you')
        || (lang === 'ar' && !PUBLISHED_ARABIC_ROUTES.includes(basePath));

      const fullUrl = `${siteUrl}${url}`;
      // The rendered component is authoritative: some pages supply their own
      // title/description via <SEO />, and the route table alone misses them.
      const title = renderedTitle(html) || escapeAttribute(routeData.title)
      const description = renderedMeta(html, 'name', 'description') || escapeAttribute(routeData.description)
      const ogTitle = renderedMeta(html, 'property', 'og:title') || escapeAttribute(routeData.ogTitle || routeData.title)
      const ogDescription = renderedMeta(html, 'property', 'og:description') || escapeAttribute(routeData.ogDescription || routeData.description)
      const ogImageUrl = renderedMeta(html, 'property', 'og:image') || escapeAttribute(routeData.ogImage ? (routeData.ogImage.startsWith('http') ? routeData.ogImage : `${siteUrl}${routeData.ogImage}`) : `${siteUrl}/images/logo1.webp`)

      const isArabicAvailable = PUBLISHED_ARABIC_ROUTES.includes(basePath) && !shouldNoIndex;
      const alternateLinks = isArabicAvailable ? Object.values(LANGUAGES)
        .map((l) => `<link data-rh="true" rel="alternate" hreflang="${l.code}" href="${siteUrl}${localizePath(basePath, l.code)}" />`)
        .join('\n        ') : '';
      const xDefaultLink = isArabicAvailable
        ? `<link data-rh="true" rel="alternate" hreflang="x-default" href="${siteUrl}${localizePath(basePath, 'en')}" />`
        : '';

      // Build the pristine HTML header block manually
      const generatedHead = `
        <title data-rh="true">${title}</title>
        <meta data-rh="true" name="description" content="${description}" />
        <meta data-rh="true" name="robots" content="${shouldNoIndex ? 'noindex, follow' : 'index, follow'}" />
        <link data-rh="true" rel="canonical" href="${fullUrl}" />
        ${alternateLinks}
        ${xDefaultLink}
        <meta data-rh="true" property="og:url" content="${fullUrl}" />
        <meta data-rh="true" property="og:title" content="${ogTitle}" />
        <meta data-rh="true" property="og:description" content="${ogDescription}" />
        <meta data-rh="true" property="og:type" content="${basePath.startsWith('/article/') ? 'article' : 'website'}" />
        <meta data-rh="true" property="og:locale" content="${localeMeta.ogLocale}" />
        <meta data-rh="true" property="og:image" content="${ogImageUrl}" />
        <meta data-rh="true" name="twitter:card" content="summary_large_image" />
        <meta data-rh="true" name="twitter:title" content="${ogTitle}" />
        <meta data-rh="true" name="twitter:description" content="${ogDescription}" />
        <meta data-rh="true" name="twitter:image" content="${ogImageUrl}" />
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

      // React 19 leaves Helmet's JSON-LD script in the streamed body. Move it
      // into the head and mark it as Helmet-managed so hydration adopts it
      // instead of creating a second schema graph.
      let structuredData = '';
      html = html.replace(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i, (_match, json) => {
        structuredData = `<script data-rh="true" type="application/ld+json">${json}</script>`;
        return '';
      });

      // 3. Inject strings safely into target templates
      let output = template
        .replace(/<!--\s*JSON-LD managed by SEO\.jsx\s*-->|<!--\s*ssr-head\s*-->/i, generatedHead + structuredData + hoistedHints)
        // The template ships a fixed lang="en"; each locale needs its own.
        .replace(/<html[^>]*>/i, `<html lang="${localeMeta.code}" dir="${localeMeta.dir}">`)
        .replace(/<div\s+id=["']root["'][^>]*>([\s\S]*?)<\/div>/i, `<div id="root">${html}</div>`);

      const filePath = resolve(root, 'dist', url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`)
      const dir = dirname(filePath)

      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }

      writeFileSync(filePath, output)

      // Also generate flat .html file for cleanUrls compatibility on Vercel
      if (url !== '/') {
        const flatPath = resolve(root, 'dist', `${url.replace(/^\//, '')}.html`)
        const flatDir = dirname(flatPath)
        if (!existsSync(flatDir)) {
          mkdirSync(flatDir, { recursive: true })
        }
        writeFileSync(flatPath, output)
      }

      success++
      console.log(`✅ Fixed & Generated: ${url}`)
    } catch (e) {
      fail++
      console.error(`❌ ${url} — ${e.message}`)
    }
  }

  // 6. Generate Sitemap
  console.log('\n🗺️  Generating sitemap.xml...')
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`

  // One <url> per locale, each listing every locale as an alternate — that
  // reciprocal linking is what Google requires to treat them as one page.
  for (const route of LOCALIZED_ROUTES) {
    // Skip low-value pages and admin/utility pages from sitemap
    const basePath = stripLangPrefix(route)
    if ((langFromPath(route) === 'ar' && !PUBLISHED_ARABIC_ROUTES.includes(basePath)) || basePath.includes('thank-you') || basePath.startsWith('/ig/') || basePath === '/enquiry' || basePath === '/sat/results' || basePath.startsWith('/sat/diagnostic/results') || basePath.startsWith('/sat/diagnostic/quiz') || basePath.startsWith('/sat/diagnostic/math-report') || basePath.startsWith('/admin') || basePath.startsWith('/verify')) {
      continue;
    }

    const alternateLanguages = PUBLISHED_ARABIC_ROUTES.includes(basePath) ? Object.values(LANGUAGES) : []
    const alternates = alternateLanguages
      .map((l) => `    <xhtml:link rel="alternate" hreflang="${l.code}" href="https://www.nitaqacademy.com${localizePath(basePath, l.code)}" />`)
      .join('\n')

    sitemap += `  <url>\n    <loc>https://www.nitaqacademy.com${route}</loc>\n${alternates}\n  </url>\n`
  }
  sitemap += '</urlset>'
  writeFileSync(resolve(root, 'dist/sitemap.xml'), sitemap)
  writeFileSync(resolve(root, 'public/sitemap.xml'), sitemap)
  console.log('✅ sitemap.xml written to dist/ and public/')

  // SPA fallback for dynamic routes on Vercel (with proper noindex and 404 title)
  const notFoundHtml = template
    .replace(/<head>/i, '<head>\n  <title data-rh="true">Page Not Found | Nitaq Academy</title>\n  <meta data-rh="true" name="robots" content="noindex, follow" />')
  writeFileSync(resolve(root, 'dist/404.html'), notFoundHtml)
  writeFileSync(resolve(root, 'public/404.html'), notFoundHtml)
  console.log('✅ 404.html SPA fallback with noindex written to dist/ and public/')

  console.log('\n==========================================')
  console.log(`🎉 Done: ${success} success, ${fail} failed`)
  console.log('==========================================')
}

prerender()
