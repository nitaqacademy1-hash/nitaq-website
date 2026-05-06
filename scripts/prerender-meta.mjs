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

  // 1. Replace or Inject Basic Meta (with data-rh="true")
  const basicTags = [
    { tag: 'title', content: page.title },
    { tag: 'meta', name: 'description', content: page.description },
    { tag: 'link', rel: 'canonical', href: fullCanonical }
  ];

  basicTags.forEach(t => {
    if (t.tag === 'title') {
      if (html.includes('<title>')) {
        html = html.replace(/<title>[^<]*<\/title>/i, `<title data-rh="true">${t.content}</title>`);
      } else {
        html = html.replace('</head>', `  <title data-rh="true">${t.content}</title>\n</head>`);
      }
    } else if (t.tag === 'meta') {
      const regex = new RegExp(`<meta name="${t.name}"[^>]*>`, 'i');
      if (regex.test(html)) {
        html = html.replace(regex, `<meta name="${t.name}" content="${t.content}" data-rh="true">`);
      } else {
        html = html.replace('</head>', `  <meta name="${t.name}" content="${t.content}" data-rh="true">\n</head>`);
      }
    } else if (t.tag === 'link') {
      const regex = new RegExp(`<link rel="${t.rel}"[^>]*>`, 'i');
      if (regex.test(html)) {
        html = html.replace(regex, `<link rel="${t.rel}" href="${t.href}" data-rh="true">`);
      } else {
        html = html.replace('</head>', `  <link rel="${t.rel}" href="${t.href}" data-rh="true">\n</head>`);
      }
    }
  });

  // 2. Handle Open Graph & Twitter Tags (Unified with data-rh="true")
  const socialTags = [
    { property: 'og:url', content: fullCanonical },
    { property: 'og:title', content: page.ogTitle || page.title },
    { property: 'og:description', content: page.ogDescription || page.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: ogImageUrl },
    { name: 'twitter:card', content: page.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: page.ogTitle || page.title },
    { name: 'twitter:description', content: page.ogDescription || page.description },
    { name: 'twitter:image', content: ogImageUrl }
  ];

  socialTags.forEach(tag => {
    if (tag.property) {
      const regex = new RegExp(`<meta property="${tag.property}"[^>]*>`, 'i');
      if (regex.test(html)) {
        html = html.replace(regex, `<meta property="${tag.property}" content="${tag.content}" data-rh="true">`);
      } else {
        html = html.replace('</head>', `  <meta property="${tag.property}" content="${tag.content}" data-rh="true">\n</head>`);
      }
    } else {
      const regex = new RegExp(`<meta name="${tag.name}"[^>]*>`, 'i');
      if (regex.test(html)) {
        html = html.replace(regex, `<meta name="${tag.name}" content="${tag.content}" data-rh="true">`);
      } else {
        html = html.replace('</head>', `  <meta name="${tag.name}" content="${tag.content}" data-rh="true">\n</head>`);
      }
    }
  });

  // 3. JSON-LD Schema Construction
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
        address: { '@type': 'PostalAddress', addressLocality: 'Sharjah', addressCountry: 'AE' }
      },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '24' },
      ...(page.courseSchema.timeRequired && { timeRequired: page.courseSchema.timeRequired }),
      ...(page.courseSchema.courseMode && { courseMode: page.courseSchema.courseMode }),
      ...(page.courseSchema.educationalLevel && { educationalLevel: page.courseSchema.educationalLevel }),
      ...(page.courseSchema.teaches && { teaches: page.courseSchema.teaches }),
    };
    schemaScripts += `<script type="application/ld+json" data-rh="true">${JSON.stringify(coursePayload)}</script>\n  `;
  }

  if (page.faqSchema && page.faqSchema.length > 0) {
    const faqPayload = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqSchema.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      })),
    };
    schemaScripts += `<script type="application/ld+json" data-rh="true">${JSON.stringify(faqPayload)}</script>\n  `;
  }

  if (page.path !== '/') {
    const segments = page.path.split('/').filter(Boolean);
    const itemListElement = [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nitaqacademy.com' }];
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        item: `https://www.nitaqacademy.com${currentPath}`
      });
    });
    const breadcrumbPayload = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement };
    schemaScripts += `<script type="application/ld+json" data-rh="true">${JSON.stringify(breadcrumbPayload)}</script>\n  `;
  }

  if (page.path.startsWith('/article/')) {
    const articlePayload = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.title,
      description: page.description,
      image: ogImageUrl,
      author: { '@type': 'Person', name: 'Nitaq Expert Team' },
      publisher: {
        '@type': 'EducationalOrganization',
        name: 'Nitaq Academy',
        logo: { '@type': 'ImageObject', url: 'https://www.nitaqacademy.com/images/logo1.webp' }
      },
      datePublished: '2026-05-01'
    };
    schemaScripts += `<script type="application/ld+json" data-rh="true">${JSON.stringify(articlePayload)}</script>\n  `;
  }

  if (page.path === '/contact') {
    const lbPayload = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Nitaq Academy",
      "image": 'https://www.nitaqacademy.com/images/logo1.webp',
      "@id": 'https://www.nitaqacademy.com/contact',
      "url": 'https://www.nitaqacademy.com/contact',
      "telephone": "+971545723181",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office 103, Floor F1, Abu Khamseen Tower",
        "addressLocality": "Al Majaz 3",
        "addressRegion": "Sharjah",
        "addressCountry": "AE"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 25.3259, "longitude": 55.3857 },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "24" }
    };
    schemaScripts += `<script type="application/ld+json" data-rh="true">${JSON.stringify(lbPayload)}</script>\n  `;
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

// ==========================================
// AUTO-GENERATE SITEMAP.XML
// ==========================================
console.log("\n🗺️  Generating automated sitemap.xml...");

const today = new Date().toISOString().split('T')[0];
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const page of seoRoutes) {
  // Give homepage priority 1.0, courses 0.9, articles 0.7
  let priority = "0.8";
  if (page.path === '/') priority = "1.0";
  else if (page.path.includes('course') || page.path.includes('preparation')) priority = "0.9";
  else if (page.path.includes('article') || page.path.includes('ig/')) priority = "0.7";

  sitemapXml += `  <url>
    <loc>${page.canonical}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
}
sitemapXml += `</urlset>`;

writeFileSync(join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log("✅ Successfully wrote fully matched sitemap.xml to dist/");
