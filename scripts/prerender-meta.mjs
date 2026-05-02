/**
 * Post-build prerender script for critical SEO pages.
 * Reads the built dist/index.html and creates route-specific copies
 * with correct meta tags, OG tags, canonical, and JSON-LD schema.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Import the central SEO data source
import { seoRoutes } from '../src/seo-routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

if (!existsSync(join(distDir, 'index.html'))) {
  console.error("❌ Build error: dist/index.html not found. Run Vite build first.");
  process.exit(1);
}

const baseTemplate = readFileSync(join(distDir, 'index.html'), 'utf-8');

function generatePageHtml(template, page) {
  let html = template;

  const fullCanonical = page.canonical;
  const ogImageUrl = page.ogImage.startsWith('http') 
      ? page.ogImage 
      : `https://www.nitaqacademy.com${page.ogImage}`;

  // 1. Replace or Inject Title
  if (html.includes('<title>')) {
    html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`);
  } else {
    html = html.replace('</head>', `  <title>${page.title}</title>\n</head>`);
  }

  // 2. Replace or Inject Meta Description
  if (html.includes('name="description"')) {
    html = html.replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${page.description}">`);
  } else {
    html = html.replace('</head>', `  <meta name="description" content="${page.description}">\n</head>`);
  }

  // 3. Replace or Inject Canonical
  if (html.includes('rel="canonical"')) {
    html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${fullCanonical}">`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${fullCanonical}">\n</head>`);
  }

  // 4. Handle Open Graph Tags
  const ogTags = [
    { property: 'og:url', content: fullCanonical },
    { property: 'og:title', content: page.ogTitle || page.title },
    { property: 'og:description', content: page.ogDescription || page.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: ogImageUrl }
  ];

  ogTags.forEach(tag => {
    const regex = new RegExp(`<meta property="${tag.property}"[^>]*>`, 'i');
    if (regex.test(html)) {
      html = html.replace(regex, `<meta property="${tag.property}" content="${tag.content}">`);
    } else {
      html = html.replace('</head>', `  <meta property="${tag.property}" content="${tag.content}">\n</head>`);
    }
  });

  // 5. Add or Update Twitter Card tags
  const twitterTags = [
    { name: 'twitter:card', content: page.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: page.ogTitle || page.title },
    { name: 'twitter:description', content: page.ogDescription || page.description },
    { name: 'twitter:image', content: ogImageUrl }
  ];

  twitterTags.forEach(tag => {
    const regex = new RegExp(`<meta name="${tag.name}"[^>]*>`, 'i');
    if (regex.test(html)) {
      html = html.replace(regex, `<meta name="${tag.name}" content="${tag.content}">`);
    } else {
      html = html.replace('</head>', `  <meta name="twitter:${tag.name.replace('twitter:', '')}" content="${tag.content}">\n</head>`);
    }
  });

  // 6. JSON-LD Schema Construction
  let schemaScripts = '';

  if (page.courseSchema) {
    const coursePayload = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: page.courseSchema.name,
      description: page.courseSchema.description,
      url: fullCanonical,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Nitaq Academy',
        url: 'https://www.nitaqacademy.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Sharjah',
          addressCountry: 'AE',
        },
      },
      ...(page.courseSchema.timeRequired && { timeRequired: page.courseSchema.timeRequired }),
      ...(page.courseSchema.courseMode && { courseMode: page.courseSchema.courseMode }),
      ...(page.courseSchema.educationalLevel && { educationalLevel: page.courseSchema.educationalLevel }),
      ...(page.courseSchema.teaches && { teaches: page.courseSchema.teaches }),
    };
    schemaScripts += `<script type="application/ld+json">${JSON.stringify(coursePayload)}</script>\n  `;
  }

  if (page.faqSchema && page.faqSchema.length > 0) {
    const faqPayload = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqSchema.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      })),
    };
    schemaScripts += `<script type="application/ld+json">${JSON.stringify(faqPayload)}</script>\n  `;
  }

  if (schemaScripts) {
    html = html.replace('</head>', `  ${schemaScripts}</head>`);
  }

  return html;
}

// Ensure the root path has an index rendered too
const rootRoute = seoRoutes.find(r => r.path === '/');

let successCount = 0;
let warningCount = 0;

console.log("==========================================");
console.log("   PRERENDERING STATIC HTML SEO ROUTES");
console.log("==========================================");

for (const page of seoRoutes) {
  // Validation
  let hasWarnings = false;
  if (!page.title) { console.warn(`⚠️ Warning: Route ${page.path} is missing a title.`); hasWarnings = true; }
  if (!page.description) { console.warn(`⚠️ Warning: Route ${page.path} is missing a description.`); hasWarnings = true; }
  if (!page.canonical) { console.warn(`⚠️ Warning: Route ${page.path} is missing a canonical URL.`); hasWarnings = true; }

  // Generate directory
  const pagePath = page.path.replace(/^\//, ''); // Strip leading slash
  let outDir = distDir;
  let outFile = join(distDir, 'index.html'); // fallback for root '/'

  if (pagePath !== '') {
    outDir = join(distDir, pagePath);
    if (!existsSync(outDir)) {
      mkdirSync(outDir, { recursive: true });
    }
    outFile = join(outDir, 'index.html');
  } else {
    // If it's the root "/", we manipulate dist/index.html directly
    outFile = join(distDir, 'index.html');
  }

  try {
    const html = generatePageHtml(baseTemplate, page);
    writeFileSync(outFile, html, 'utf-8');
    
    if (hasWarnings) {
      warningCount++;
      console.log(`🟡 Pre-rendered (with warnings): ${page.path} → ${outFile.replace(__dirname, '')}`);
    } else {
      successCount++;
      console.log(`✅ Pre-rendered: ${page.path}`);
    }
  } catch (err) {
    console.error(`❌ Failed to pre-render ${page.path}: ${err.message}`);
  }
}

console.log("==========================================");
console.log(`🎉 Operations Complete: ${successCount} successful, ${warningCount} warnings.`);
console.log(`Total Pages Generated: ${successCount + warningCount}`);
console.log("==========================================");
