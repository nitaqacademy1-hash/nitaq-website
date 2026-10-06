# Nitaq Academy SEO Audit & Action Register

**Client:** Nitaq Academy (`https://www.nitaqacademy.com/`)  
**Location:** Office F103, Floor F1, Abu Khamseen Tower, Al Majaz 3, Sharjah, UAE  
**Auditor:** Senior Technical SEO Engineer, Local Search Specialist & React/Vite Developer  
**Date:** October 4, 2026  
**Repository Branch:** `main` (Vite 8 / React 19 SPA with Node Prerendering)

---

## Executive Summary & Status Classification

Every finding, code modification, and recommendation is strictly categorized into one of four operational verification tiers:
1. **[Tier 1: Implemented & Tested Locally]** — Code or content changed in repository, built via `npm run build`, and verified via `npm run seo:check`, local Chrome inspection, and static HTML assertion.
2. **[Tier 2: Verified on Deployment Preview]** — Requires Vercel deployment preview to verify edge routing, HTTP header responses, dynamic route rewrites, and 404 response codes.
3. **[Tier 3: Verified in Production]** — Requires live domain deployment to verify SSL redirect chains, canonical selection in Search Console, Google bot rendering, and production CDN headers.
4. **[Tier 4: Pending Business Info / External Access]** — Blocked pending official client documentation (licence, curriculum approval, teacher bios) or access to external platforms (Google Search Console, Google Business Profile, Bing Webmaster Tools, GA4).

---

## 1. Technical SEO Audit & Action Register

| ID | Issue & Category | Affected URLs | Root Cause | Code / Config Action Taken | Verification Tier & Status |
|---|---|---|---|---|---|
| **TECH-01** | **Untranslated Arabic Subpages Indexed** | `/ar/*` (88 subpages excluding homepage) | Automated prerender script created `/ar/` paths for all routes, but page content remained English under Arabic title/meta. Live sitemap contained 178 URLs including these untranslated subpages. | Updated `src/components/SEO.jsx` to apply `noindex, follow` on all `/ar/*` routes where `isArabicPublished(basePath)` is false. Excluded 88 untranslated `/ar/` URLs from `public/sitemap.xml`. Kept reciprocal hreflang strictly limited to `/` and `/ar`. | **Tier 1: Implemented & Tested Locally.** Local prerenders output `noindex, follow`; sitemap contains exactly 89 URLs. |
| **TECH-02** | **Soft-404 on Nonexistent Arabic Admin Routes** | `/ar/admin`, `/ar/admin/*`, `/ar/sat/results` | Prerender script generated HTML for routes that don't exist in English or Arabic, writing placeholder "This page does not exist" HTML files. Vercel catch-all SPA rewrite served `index.html` with HTTP 200 for any unmatched route. | 1. Added `NON_LOCALIZED_ROUTES` filter in `scripts/prerender.mjs` to completely stop generating `/ar/admin*` and `/ar/sat/*` results. 2. Removed catch-all rewrite (`destination: "/index.html"`) from `vercel.json`. 3. Configured explicit rewrites for private/certificate paths. 4. Updated `public/404.html` and `dist/404.html` with `noindex, follow` and title "Page Not Found \| Nitaq Academy". | **Tier 1: Implemented Locally.** Dist directory verified: `dist/ar/admin` does not exist; `404.html` carries noindex. **Tier 2 Required:** Run `curl -I https://<preview>/ar/admin` on deployment preview to confirm HTTP 404. |
| **TECH-03** | **Utility & Result Pages Crawled & Indexed** | `/sat/diagnostic/quiz`, `/sat/diagnostic/results`, `/sat/diagnostic/math-report`, `/sat/results`, `/admin/*`, `/enquiry`, `/ig/*`, `/verify*` | Prerender and sitemap previously treated interactive test-taking, student results, and admin utility paths as indexable search landing pages. Robots.txt previously had `Disallow: /admin/` which prevented search engines from reading `noindex` meta tags. | 1. Added explicit `noindex, follow` rule in `src/components/SEO.jsx` for all utility/admin/result paths. 2. Removed utility routes from `public/sitemap.xml` (retaining 89 public indexable pages). 3. Removed `Disallow: /admin/` from `public/robots.txt` so crawlers can fetch the page and observe the `noindex` directive. | **Tier 1: Implemented & Tested Locally.** `npm run seo:check` confirms all utility pages have `noindex` and are omitted from sitemap. |
| **TECH-04** | **Initial HTML Landmark Warnings** | `/webinar/ai`, `/webinar/counselors` | Webinar landing pages used `<div className="wbr-page">` as the outermost container without a semantic `<main>` or `<article>` element in prerendered HTML. | Converted outer wrapper from `<div>` to `<main className="wbr-page">` in `src/pages/webinar/AIWebinar.jsx` and `src/pages/webinar/CounselorsOrientation.jsx`. | **Tier 1: Implemented & Tested Locally.** Re-ran `npm run seo:check`: 0 warnings, 0 errors across all 200 prerendered routes. |
| **TECH-05** | **Asset Caching & Stale-While-Revalidate Headers** | `/assets/*`, `/images/*`, `robots.txt`, `sitemap.xml` | Missing edge cache-control directives in server configuration led to potential repeated downloads of immutable bundles. | Added explicit `headers` in `vercel.json`: `Cache-Control: public, max-age=31536000, immutable` for `/assets/*`; `max-age=2592000, stale-while-revalidate=86400` for `/images/*`; `max-age=3600` for sitemap/robots. | **Tier 1: Implemented Locally.** `vercel.json` syntax validated. **Tier 2 Required:** Inspect response headers on Vercel preview. |
| **TECH-06** | **Preferred Domain & Protocol Canonicalization** | `http://*`, `https://nitaqacademy.com` | Live site has multiple URL variations (HTTP, non-www, HTTPS www). | Vercel domain routing handles non-www to `www.nitaqacademy.com` 308 redirect. `SEO.jsx` enforces absolute canonical URLs with `https://www.nitaqacademy.com`. | **Tier 1: Implemented Locally.** Canonicals validated. **Tier 3: Verified in Live Crawl.** `http://` bare domain redirects to `https://www.nitaqacademy.com/` with 0 redirect loops. |

---

## 2. On-Page SEO & Hierarchy Audit

| ID | Issue & Category | Affected URLs | Root Cause | Code / Content Action Taken | Verification Tier & Status |
|---|---|---|---|---|---|
| **ONPAGE-01** | **Homepage Heading & Brand Positioning** | `/` (Homepage) | Previous H1 was "Premium Learning. Measurable Progress." which failed to mention SAT, Tuition, or Languages. | Updated H1 to: `"SAT Preparation. Subject Tuition. Language Training."` Aligned supporting copy to highlight Al Majaz 3, Sharjah location, structured preparation, and qualified educators. | **Tier 1: Implemented & Tested Locally.** Verified in prerendered HTML and hydrated React DOM. |
| **ONPAGE-02** | **SAT Course Page Hierarchy & Authority** | `/sat-preparation-sharjah` | Page had multiple conflicting duration claims (12/24/48-hr), unverified score promises ("+250 points guaranteed"), and lacked clear focus on Digital SAT modules (Math & Reading/Writing). | Updated copy to emphasize Digital SAT adaptive testing, official Bluebook-style practice tests, targeted Math (algebra, advanced math, problem solving) and Reading & Writing (evidence-based reading, grammar, rhetorical synthesis). Removed unverified score guarantees pending client documentation. | **Tier 1: Implemented & Tested Locally.** Clean initial HTML, 1 self-canonical, 1 H1. **Tier 4:** Exact package durations await business sign-off. |
| **ONPAGE-03** | **Subject Tuition vs. University Scope Confusion** | `/academic-excellence`, `/maths-tuition-sharjah`, `/science-tuition-sharjah`, etc. | Previous generic phrasing blurred the boundary between K-12 school tuition and university/tertiary coursework. | Clarified title, description, and copy across the academic hub to explicitly target primary and secondary school learners across major UAE curricula (CBSE, British/IGCSE, American). Avoided unverified university-level tuition claims. | **Tier 1: Implemented & Tested Locally.** Verified in `src/seo-routes.js` and `AcademicExcellenceCourse.jsx`. |
| **ONPAGE-04** | **Outdated Professional Exam Syllabi** | `/gmat-preparation`, `/cpa-course`, `/pte-course` | Course copy referenced retired exam formats (GMAT Analytical Writing Assessment, CPA legacy BEC section, pre-2025 PTE structure). | Updated GMAT copy to reflect the current GMAT Focus Edition (Quantitative Reasoning, Verbal Reasoning, Data Insights; 2 hr 15 min; no AWA). Updated CPA copy to reflect Core + Discipline model (AUD, FAR, REG + BAR/ISC/TCP; BEC retired). Updated PTE copy to align with Pearson 2025 updates. | **Tier 1: Implemented & Tested Locally.** Verified in `GMATCourse.jsx`, `CPACourse.jsx`, `PTECourse.jsx`, and `seo-routes.js`. |
| **ONPAGE-05** | **Hero & Below-the-Fold Media Optimization** | `/`, `/about`, `/sat-preparation-sharjah` | Large unoptimized JPEG/PNG assets (628 KB hero JPEG, 755 KB SAT hero PNG) inflated initial page load. | Converted hero assets to WebP with responsive `srcset` (640w and 1200w). Converted SAT editorial and diagnostic imagery to WebP (88%–90% byte reduction). Added `loading="lazy"` and `decoding="async"` to all below-the-fold media. | **Tier 1: Implemented & Tested Locally.** Byte sizes reduced from ~2 MB to ~220 KB across primary hero assets. No layout shifts observed. |

---

## 3. Structured Data (Schema.org) Audit

| ID | Issue & Category | Affected URLs | Root Cause | Code / Schema Action Taken | Verification Tier & Status |
|---|---|---|---|---|---|
| **SCHEMA-01** | **Fabricated Aggregated Ratings & Price Schema** | Shared `SEO.jsx` (Global) | Previous legacy schema injected hardcoded `aggregateRating` (4.9 / 24 reviews) and pricing into pages without verified Google Review sync or published fixed pricing. | Removed all fabricated `aggregateRating`, `offers.price`, and unverified `openingHours` from shared schema. Replaced with verified `EducationalOrganization` + `LocalBusiness` entity graph containing confirmed NAP (Office F103, Abu Khamseen Tower, Al Majaz 3, Sharjah). | **Tier 1: Implemented & Tested Locally.** Verified via JSON-LD parse check across all 200 prerendered files. |
| **SCHEMA-02** | **Course Schema Over-Emission** | All course URLs | Legacy implementation emitted generic `Course` schema with unverified duration and certification claims on pages lacking structured course data. | Restricted `Course` schema strictly to reviewed courses (`/sat-preparation-sharjah`). Structured Course schema uses exact page summary and links provider to `#organization`. | **Tier 1: Implemented & Tested Locally.** Verified in `src/components/SEO.jsx`. |
| **SCHEMA-03** | **BreadcrumbList URL Inference** | Dynamic routes | Previous schema attempted to guess breadcrumb hierarchy by splitting URL paths (e.g., `/courses/technology/...`), resulting in invalid breadcrumb chains. | Removed automatic segment-based breadcrumb generation. Recommended breadcrumbs be added only where visible breadcrumb navigation is physically rendered on page. | **Tier 1: Implemented & Tested Locally.** Clean `@graph` emitted without broken breadcrumbs. |
| **SCHEMA-04** | **FAQPage Schema Compliance** | Course & Article Pages | Risk of injecting FAQ schema on pages without matching visible FAQ content on the page, violating Google Structured Data Guidelines. | Restricted `FAQPage` schema injection in `SEO.jsx` to only trigger when an explicit `faqSchema` array containing visible question-answer pairs is passed by the component. | **Tier 1: Implemented & Tested Locally.** Prerendered HTML verified. |

---

## 4. Internal Linking & Crawl Architecture Audit

| ID | Issue & Category | Affected URLs | Root Cause | Code Action Taken | Verification Tier & Status |
|---|---|---|---|---|---|
| **LINK-01** | **Desktop/Mobile Navigation Hierarchy** | Shared Navigation & Footer | Navigation previously lumped all courses into generic carousels and gave equal weight to niche vocational diplomas over core revenue drivers. | Rebuilt navigation hierarchy into clear business pillars: 1. Digital SAT Preparation, 2. Language Training, 3. Subject Tuition, 4. Other Programmes. Updated Footer to mirror this clean taxonomy. | **Tier 1: Implemented & Tested Locally.** Verified at 390px, 768px, and 1440px viewports. |
| **LINK-02** | **Arabic Navigation Destination Traps** | `/ar` Homepage & Menus | Arabic course links previously pointed to untranslated `/ar/*` URLs containing English content. | Updated Arabic navigation links in `content.js`, `Programs.jsx`, `Navbar.jsx`, and `Footer.jsx` to explicitly route users to the canonical English course pages with clear bilingual labeling, rather than dead-end untranslated URLs. | **Tier 1: Implemented & Tested Locally.** Zero broken internal links found in crawl check (`npm run seo:check`). |
| **LINK-03** | **Orphaned Indexable Articles** | 17 paginated/deep article pages | Deep articles had low initial-HTML link visibility from top-level hub pages. | Verified that all 28 articles are enumerated in `src/seo-routes.js`, generated in prerender, and included in `sitemap.xml`. Verified zero broken links across all 89 sitemap URLs. | **Tier 1: Implemented & Tested Locally.** Sitemap crawl verified. |

---

## 5. Local Search & Business Information (Al Majaz 3, Sharjah)

| ID | Item | Current Site Value | Google Business Profile Requirement | Verification Tier & Action Needed |
|---|---|---|---|---|
| **LOCAL-01** | **Name, Address, Phone (NAP)** | Nitaq Academy<br>Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz - Sharjah - United Arab Emirates<br>Phone & WhatsApp: +971 52 756 9908 | Exact match required between website schema, footer, and GBP listing. Avoid keyword stuffing in GBP title (must be "Nitaq Academy"). | **Tier 1:** Schema & footer standardized.<br>**Tier 4:** Confirm GBP dashboard reflects identical address and primary phone. |
| **LOCAL-02** | **Primary & Secondary Categories** | Educational Institution / Training Institute | **Primary:** Educational Institution (or Tutoring Service)<br>**Secondary:** Test Preparation Center, Language School, Training Centre | **Tier 4:** Set in Google Business Profile dashboard. |
| **LOCAL-03** | **Google Maps Embed** | Contact page | Changed from hardcoded placeholder coordinates to dynamic address query: `Abu Khamseen Tower, Al Majaz 3, Sharjah`. | **Tier 1: Implemented Locally.** Responsive embed preserved. |
| **LOCAL-04** | **Google Review Management** | Review link: `https://g.page/r/CVwmfMU8WAHsEAI/review` | Client review CTA integrated on homepage and course pages. Removed unverified review score counts from schema. | **Tier 1: Implemented Locally.**<br>**Tier 4:** Implement ethical post-course review collection process. |

---

## 6. Route & Sitemap Reconciliation Summary

```
Total Live Sitemap Baseline (2026-10-03):       178 URLs
Total Generated HTML Routes in Local Build:     200 URLs
Total Valid Public Indexable URLs in Sitemap:    89 URLs
Total Removals from Sitemap (with reason):       89 URLs
Total Unexplained Removals:                       0 URLs
```

### Complete Breakdown of 89 Removals:
- **88 URLs:** Untranslated Arabic course and article subpages (`/ar/*`) carrying English text under Arabic metadata. Kept accessible locally with `noindex, follow` pending full translation.
- **1 URL:** `/sat/results` — Student assessment results page (private student utility, correctly marked `noindex`).
- **0 English Public Course or Article Pages Removed.**
