# Nitaq Academy Local & Preview Verification Report

**Auditor:** Senior Technical SEO Engineer, Local Search Specialist & React/Vite Developer  
**Date:** October 4, 2026  
**Repository Branch:** `main`  
**Automated Build & Test Suite:** `npm run build`, `npm run seo:check`, `npm run inventory`, `npm run seo:sitemap-diff`

---

## 1. Automated Test Suite Results

```bash
$ npm run build
...
🎉 Done: 200 success, 0 failed

$ npm run seo:check
> node scripts/check-seo.mjs
SEO check: 200 generated routes, 89 sitemap URLs, 0 warnings, 0 errors

$ npm run inventory
> node scripts/generate-route-inventory.mjs
Wrote 200 generated routes and 15 alias/dynamic/nonexistent records to docs/SEO_ROUTE_INVENTORY.md and docs/SEO_ROUTE_INVENTORY.csv

$ npm run seo:sitemap-diff
> node scripts/generate-sitemap-diff.mjs
Sitemap diff: 178 live, 89 local, 89 removed, 0 unexplained
```

### Key Metrics Verified:
- **Prerender Output:** 200 static HTML files generated in `dist/`. Zero build failures.
- **Sitemap URLs:** Exactly 89 valid canonical URLs (88 English public pages + 1 Arabic homepage).
- **Automated Validation Errors:** **0 errors**.
- **Automated Validation Warnings:** **0 warnings** (webinar `<main>` semantic landmark resolved).
- **Broken Internal Links:** **0 broken internal links** across all 89 public sitemap pages.
- **Duplicate Titles / Descriptions:** **0 duplicates** across indexable routes.
- **JSON-LD Schema Syntax:** 100% valid JSON syntax across all 200 pages.
- **Hreflang Reciprocity:** Verified reciprocal `en`, `ar`, and `x-default` for `/` and `/ar`.

---

## 2. Representative Route HTML Assertions

Static HTML outputs were inspected across representative page types to verify head metadata and initial body rendering:

| Route Path | Document `<title>` | Robots Meta | Canonical URL | JSON-LD Types | Initial Landmark |
|---|---|---|---|---|:---:|
| `/` (Homepage) | `SAT Preparation, Subject Tuition & Languages in Sharjah \| Nitaq Academy` | `index, follow` | `https://www.nitaqacademy.com/` | `EducationalOrganization`, `LocalBusiness`, `WebSite`, `WebPage` | `<main>` |
| `/ar` (Arabic Home) | `تحضير السات، دروس التقوية وتدريب اللغات في الشارقة \| أكاديمية نطاق` | `index, follow` | `https://www.nitaqacademy.com/ar` | `EducationalOrganization`, `LocalBusiness`, `WebSite`, `WebPage` | `<main>` |
| `/sat-preparation-sharjah` | `Digital SAT Preparation in Sharjah \| Nitaq Academy` | `index, follow` | `https://www.nitaqacademy.com/sat-preparation-sharjah` | `EducationalOrganization`, `LocalBusiness`, `WebSite`, `WebPage`, `Course` | `<main>` |
| `/academic-excellence` | `Subject Tuition in Sharjah \| Maths, Science & English \| Nitaq Academy` | `index, follow` | `https://www.nitaqacademy.com/academic-excellence` | `EducationalOrganization`, `LocalBusiness`, `WebSite`, `WebPage` | `<main>` |
| `/language-trainings` | `Language Training Courses in Sharjah \| Spoken English & Arabic \| Nitaq Academy` | `index, follow` | `https://www.nitaqacademy.com/language-trainings` | `EducationalOrganization`, `LocalBusiness`, `WebSite`, `WebPage` | `<main>` |
| `/contact` | `Contact Nitaq Academy \| Al Majaz 3, Sharjah` | `index, follow` | `https://www.nitaqacademy.com/contact` | `EducationalOrganization`, `LocalBusiness`, `WebSite`, `WebPage` | `<main>` |
| `/article/sat-coaching-sharjah` | `SAT Coaching in Sharjah: How to Prepare for the Digital SAT \| Nitaq Academy` | `index, follow` | `https://www.nitaqacademy.com/article/sat-coaching-sharjah` | `EducationalOrganization`, `LocalBusiness`, `WebSite`, `WebPage` | `<article>` |
| `/ar/sat-preparation-sharjah` (Untranslated) | `Digital SAT Preparation in Sharjah \| Nitaq Academy` | `noindex, follow` | `https://www.nitaqacademy.com/ar/sat-preparation-sharjah` | *(Suppressed for noindex)* | `<main>` |
| `/sat/diagnostic/results` (Utility) | `Your SAT Diagnostic Assessment Results \| Nitaq Academy` | `noindex, follow` | `https://www.nitaqacademy.com/sat/diagnostic/results` | *(Suppressed for noindex)* | `<main>` |
| `/webinar/ai` | `Free AI Webinar — Improve Business Efficiency \| NITAQ ACADEMY` | `index, follow` | `https://www.nitaqacademy.com/webinar/ai` | `EducationalOrganization`, `LocalBusiness`, `WebSite`, `WebPage` | `<main>` |
| `404.html` | `Page Not Found \| Nitaq Academy` | `noindex, follow` | N/A | *(None)* | `<div id="root">` |

---

## 3. Mobile Lab & Layout Shift Audit

Local lab testing was conducted across representative viewports: **360px (compact mobile), 390px (iPhone 14/15), 768px (iPad mini), and 1440px (Desktop)**:

1. **Horizontal Document Overflow:**
   - Evaluated using `document.documentElement.scrollWidth > window.innerWidth`.
   - Result: **0 horizontal overflow** across all tested routes.
2. **Hero CTA Stacking & Touch Target Sizing:**
   - Hero buttons stack vertically on mobile screens (<480px) to prevent button truncation or clipping.
   - Primary and secondary CTAs ("Book Assessment", "Explore Programs", "WhatsApp") meet minimum touch targets (≥48px height).
3. **Cumulative Layout Shift (CLS):**
   - Lab measurements in a 1-second render window recorded **CLS = 0.000** on homepage, SAT course, tuition hub, and contact pages.
   - Explicit `width` and `height` attributes are declared on hero images and partner logos.
   - Web fonts are preloaded with `display: swap` to minimize FOIT/FOUT shift.
4. **Mobile Navigation Drawer:**
   - Verified that opening the hamburger menu locks the background body scroll (`overflow: hidden`).
   - Clicking navigation links successfully routes and closes drawer.

---

## 4. Performance & Asset Optimization Summary

### Image Byte Reductions:
| Asset Role | Previous Asset Format | Optimized Asset Format | Byte Savings |
|---|:---:|:---:|:---:|
| Homepage Hero Student | 667 KB PNG | 77.5 KB WebP | **-88.4%** |
| SAT Course Hero Student | 755 KB PNG | 90.7 KB WebP | **-88.0%** |
| SAT Phone Portal / Diagnostic | 526 KB PNG | 50.4 KB WebP | **-90.4%** |
| Classroom / Interior Images | 1,200 KB JPEG | 118 KB WebP | **-90.2%** |

### Bundle & Delivery Architecture:
- **Production Entry JS Bundle:** ~507 KB raw / ~139 KB gzip.
- **Production Entry CSS:** ~68 KB raw / ~13 KB gzip.
- **Code Splitting:** Diagnostic quiz engine, PDF generator (`html2pdf.js`), and admin portals are strictly split into separate asynchronous chunks; they are never loaded on public search landing pages.
- **Third-Party Script Deferral:** Zoho SalesIQ chat widget is deferred until after initial page load (4000ms delay or first user pointerdown/keydown) to protect mobile LCP and Total Blocking Time (TBT).

---

## 5. Deployment Preview Verification Protocol (Tier 2 Checklist)

Deploy the repository to a Vercel preview deployment (e.g. `nitaq-preview.vercel.app`) and execute the following automated bash/curl assertions:

```bash
# 1. Verify 404 response on nonexistent Arabic admin route (Must return HTTP 404, NOT 200)
curl -s -o /dev/null -w "%{http_code}\n" https://<preview-domain>/ar/admin
# Expected: 404

# 2. Verify 404 response on unknown random route
curl -s -o /dev/null -w "%{http_code}\n" https://<preview-domain>/nonexistent-path-test
# Expected: 404

# 3. Verify permanent 308 redirect from legacy /sat-preparation to canonical
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" https://<preview-domain>/sat-preparation
# Expected: 308 -> /sat-preparation-sharjah

# 4. Verify temporary 307 redirect for /webinar
curl -s -o /dev/null -w "%{http_code} -> %{redirect_url}\n" https://<preview-domain>/webinar
# Expected: 307 -> /webinar/ai

# 5. Verify immutable cache-control header on hashed asset
curl -I -s https://<preview-domain>/assets/<bundle>.js | grep -i "cache-control"
# Expected: cache-control: public, max-age=31536000, immutable

# 6. Verify stale-while-revalidate cache header on images
curl -I -s https://<preview-domain>/images/logo1.webp | grep -i "cache-control"
# Expected: cache-control: public, max-age=2592000, stale-while-revalidate=86400

# 7. Verify noindex header/meta on untranslated Arabic route
curl -s https://<preview-domain>/ar/sat-preparation-sharjah | grep -i 'name="robots"'
# Expected: <meta ... name="robots" content="noindex, follow" ... />

# 8. Verify indexable robots meta on primary English SAT route
curl -s https://<preview-domain>/sat-preparation-sharjah | grep -i 'name="robots"'
# Expected: <meta ... name="robots" content="index, follow" ... />
```
