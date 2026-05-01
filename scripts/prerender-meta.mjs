/**
 * Post-build prerender script for critical SEO pages.
 * Reads the built dist/index.html and creates route-specific copies
 * with correct meta tags, OG tags, canonical, and JSON-LD schema
 * so that non-JS crawlers (WhatsApp, Facebook, audit tools) get proper content.
 *
 * Googlebot renders JS fine, but social crawlers and SEO audit tools do not.
 * This script solves that by generating static HTML per route.
 *
 * Usage: node scripts/prerender-meta.mjs (run after `npm run build`)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const baseTemplate = readFileSync(join(distDir, 'index.html'), 'utf-8');

// Define pages that need prerendered meta tags
const pages = [
  {
    path: '/sat-preparation-sharjah',
    title: 'SAT Preparation in Sharjah | Expert Coaching | Nitaq Academy UAE',
    description: "Score 1400+ on the Digital SAT with Nitaq Academy's expert coaching in Sharjah. Small batches, mock tests, proven strategies. Enrol now — +971 54 572 3181.",
    canonical: 'https://www.nitaqacademy.com/sat-preparation-sharjah',
    ogImage: 'https://www.nitaqacademy.com/images/og-sat.png',
    h1: 'SAT Preparation in Sharjah — Digital SAT Coaching at Nitaq Academy',
    introText: 'The SAT (Scholastic Assessment Test) is a standardised exam used by universities in the United States, Canada, and across the globe to evaluate college readiness. At Nitaq Academy, our SPEA Authorized & UAE Govt Attested coaching programme in Sharjah prepares high-school students to achieve scores of 1400 and above through small-batch expert coaching, full-length mock tests, and proven test-taking strategies.',
    schema: {
      course: {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "SAT Preparation in Sharjah",
        "description": "Score 1400+ on the Digital SAT with Nitaq Academy's expert coaching in Sharjah. Small batches, mock tests, proven strategies. SPEA Authorized & UAE Govt Attested.",
        "url": "https://www.nitaqacademy.com/sat-preparation-sharjah",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "Nitaq Academy",
          "url": "https://www.nitaqacademy.com",
          "address": { "@type": "PostalAddress", "addressLocality": "Sharjah", "addressCountry": "AE" }
        },
        "timeRequired": "PT48H",
        "courseMode": ["onsite", "online"],
        "educationalLevel": "Secondary",
        "teaches": "Digital SAT Math, Evidence-Based Reading and Writing, Test-Taking Strategies",
        "inLanguage": "en"
      },
      faq: {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "What is the Digital SAT and how is it different from the old SAT?", "acceptedAnswer": { "@type": "Answer", "text": "The Digital SAT is the current format of the Scholastic Assessment Test, taken on a laptop using the College Board's Bluebook app. Unlike the paper SAT, it is adaptive — meaning the difficulty of the second module adjusts based on your first module performance. Total test time is 2 hours and 14 minutes." }},
          { "@type": "Question", "name": "How long does SAT preparation take at Nitaq Academy in Sharjah?", "acceptedAnswer": { "@type": "Answer", "text": "Our SAT preparation course runs for 8 to 12 weeks, with three sessions per week. Each session is approximately 90 minutes, covering Reading & Writing strategies, Math concepts, and timed practice." }},
          { "@type": "Question", "name": "What SAT score do I need to get into a US university from the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "Most US universities accept students with scores between 1200 and 1400. Competitive universities typically expect 1400 or above. Ivy League schools generally require 1500+." }},
          { "@type": "Question", "name": "Where are the SAT exam centers in the UAE in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "SAT test centers in the UAE are located in Dubai and Abu Dhabi. Students from Sharjah typically travel to Dubai centers to sit the exam." }},
          { "@type": "Question", "name": "Does Nitaq Academy offer online SAT coaching in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Nitaq Academy offers both in-person SAT coaching at our Sharjah campus and live online classes for students across Dubai, Abu Dhabi, Ajman, and the wider UAE." }},
          { "@type": "Question", "name": "How much does an SAT preparation course cost in Sharjah?", "acceptedAnswer": { "@type": "Answer", "text": "SAT preparation course fees in Sharjah typically range from AED 1,800 to AED 4,000 depending on course duration, batch size, and format." }},
          { "@type": "Question", "name": "Can I take the SAT more than once in the UAE?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, there is no strict limit. Most students appear two to three times to improve their scores. The College Board's SuperScore feature allows universities to consider your highest section scores across attempts." }},
          { "@type": "Question", "name": "Are weekend SAT classes available in Sharjah?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Nitaq Academy offers weekend and evening SAT batches specifically designed for school students. Friday and Saturday morning batches are available throughout the year." }}
        ]
      }
    }
  }
];

function generatePageHtml(template, page) {
  let html = template;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${page.title}</title>`
  );

  // Replace or add meta description
  if (html.includes('name="description"')) {
    html = html.replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${page.description}">`
    );
  } else {
    html = html.replace('</title>', `</title>\n  <meta name="description" content="${page.description}">`);
  }

  // Replace canonical
  html = html.replace(
    /<link rel="canonical"[^>]*>/,
    `<link rel="canonical" href="${page.canonical}">`
  );

  // Replace OG tags
  html = html.replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${page.canonical}">`);
  html = html.replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${page.title}">`);
  html = html.replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${page.description}">`);
  html = html.replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${page.ogImage}">`);

  // Add Twitter Card tags if not present
  if (!html.includes('twitter:card')) {
    html = html.replace(
      '</head>',
      `  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${page.title}">
  <meta name="twitter:description" content="${page.description}">
  <meta name="twitter:image" content="${page.ogImage}">
</head>`
    );
  }

  // Add page-specific JSON-LD schema (Course + FAQ)
  const schemaScripts = [
    `<script type="application/ld+json">${JSON.stringify(page.schema.course)}</script>`,
    `<script type="application/ld+json">${JSON.stringify(page.schema.faq)}</script>`
  ].join('\n  ');

  html = html.replace(
    '</head>',
    `  ${schemaScripts}\n</head>`
  );

  // Add noscript fallback with real content for crawlers
  const noscriptContent = `
  <noscript>
    <h1>${page.h1}</h1>
    <p>${page.introText}</p>
    <p>Contact Nitaq Academy: <a href="tel:+971545723181">+971 54 572 3181</a> | <a href="https://wa.me/971545723181">WhatsApp</a></p>
  </noscript>`;

  html = html.replace(
    '<div id="root"></div>',
    `<div id="root"></div>${noscriptContent}`
  );

  return html;
}

// Generate each page
for (const page of pages) {
  const pagePath = page.path.replace(/^\//, '');
  const outDir = join(distDir, pagePath);
  
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }

  const html = generatePageHtml(baseTemplate, page);
  const outFile = join(outDir, 'index.html');
  writeFileSync(outFile, html, 'utf-8');
  console.log(`✅ Pre-rendered: ${page.path} → dist/${pagePath}/index.html`);
}

console.log(`\n🎉 Pre-rendering complete! ${pages.length} page(s) generated.`);
