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
import { fileURLToPath } from 'url'
import { build } from 'vite'

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
  '/webinar/ai',
  '/webinar/ai/thank-you',
  '/webinar/counselors',
  '/webinar/counselors/thank-you'
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
  const { render } = await import(serverPath)

  // 4. Read template
  const template = readFileSync(resolve(root, 'dist/index.html'), 'utf-8')

  // 5. Render routes
  console.log('\n📄 Generating static pages...')
  let success = 0
  let fail = 0

  for (const url of ROUTES) {
    try {
      const { html, head } = render(url)

      let output = template
        .replace('<!--ssr-head-->', head)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

      const filePath = resolve(root, 'dist', url === '/' ? 'index.html' : `${url.replace(/^\//, '')}/index.html`)
      const dir = dirname(filePath)

      if (!existsSync(dir)) {
        mkdirSync(dir, { recursive: true })
      }

      writeFileSync(filePath, output)
      success++
      console.log(`✅ ${url}`)
    } catch (e) {
      fail++
      console.error(`❌ ${url} — ${e.message}`)
    }
  }

  // 6. Generate Sitemap
  console.log('\n🗺️  Generating sitemap.xml...')
  const today = new Date().toISOString().split('T')[0]
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`
  
  for (const route of ROUTES) {
    // Skip low-value pages from sitemap
    if (route.includes('thank-you') || route.startsWith('/ig/') || route === '/enquiry') {
      continue;
    }

    let priority = '0.8'
    if (route === '/') priority = '1.0'
    else if (/course|prep|ielts|gre|gmat/.test(route)) priority = '0.9'
    
    sitemap += `  <url>\n    <loc>https://www.nitaqacademy.com${route}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`
  }
  sitemap += '</urlset>'
  writeFileSync(resolve(root, 'dist/sitemap.xml'), sitemap)
  console.log('✅ sitemap.xml written')

  console.log('\n==========================================')
  console.log(`🎉 Done: ${success} success, ${fail} failed`)
  console.log('==========================================')
}

prerender()
