# Nitaq Academy Post-Launch 30-60-90 Day SEO Plan

**Auditor:** Senior Technical SEO Engineer, Local Search Specialist & React/Vite Developer  
**Date:** October 4, 2026  
**Primary Target Geography:** Al Majaz 3, Sharjah, UAE

---

## 1. Core Measurement Protocol & Query Tracking Groups

Track search performance weekly across four distinct intent clusters in Google Search Console:

### Cluster 1: Digital SAT Preparation (Sharjah Priority)
- Target Landing Page: `https://www.nitaqacademy.com/sat-preparation-sharjah`
- Core Queries:
  - `sat preparation sharjah`
  - `digital sat coaching sharjah`
  - `sat classes al majaz`
  - `sat test prep near me sharjah`
  - `best sat institute in sharjah`
  - `sat diagnostic test sharjah`

### Cluster 2: Academic Subject Tuition (School Curricula)
- Target Landing Pages: `https://www.nitaqacademy.com/academic-excellence`, `/maths-tuition-sharjah`, `/science-tuition-sharjah`, etc.
- Core Queries:
  - `tuition classes in sharjah`
  - `maths tuition sharjah`
  - `physics tuition near al majaz`
  - `cbse tuition classes sharjah`
  - `igcse tuition sharjah`
  - `science tutor sharjah`

### Cluster 3: Language Training (Professional & Conversational)
- Target Landing Pages: `https://www.nitaqacademy.com/language-trainings`, `/spoken-english`, `/spoken-arabic`, etc.
- Core Queries:
  - `spoken arabic classes sharjah`
  - `english speaking course sharjah`
  - `language institute in al majaz sharjah`
  - `learn arabic in sharjah`
  - `french classes sharjah`

### Cluster 4: Local Entity & Academy Brand
- Target Landing Pages: `https://www.nitaqacademy.com/`, `/contact`, `/about`
- Core Queries:
  - `nitaq academy`
  - `nitaq academy sharjah`
  - `training institute abu khamseen tower`
  - `institutes in al majaz 3`

---

## 2. Phased Implementation & Milestone Roadmap

### Phase 1: Days 0–30 (Indexation Baseline & Health Audit)

1. **Production Deployment & Domain Verification:**
   - Execute production deployment via Vercel.
   - Run live curl check confirming 308 redirect: `http://nitaqacademy.com` → `https://www.nitaqacademy.com/`.
   - Verify that `/ar/admin` returns HTTP 404 in production.
2. **Sitemap Submission & Indexing Request:**
   - Submit `https://www.nitaqacademy.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
   - Confirm discovered URL count matches exactly 89 URLs.
   - Manually request indexing via GSC URL Inspection for the top 5 strategic pillars:
     - `/` (Homepage)
     - `/ar` (Arabic Homepage)
     - `/sat-preparation-sharjah`
     - `/academic-excellence`
     - `/language-trainings`
3. **Indexation & Canonical Audit:**
   - Verify in GSC "Pages" report that zero public sitemap URLs are marked as "Excluded", "Duplicate without user-selected canonical", or "Soft 404".
   - Confirm that untranslated `/ar/*` subpages are properly recognized as "Excluded by ‘noindex’ tag".
4. **Event Tracking & Conversion Validation:**
   - In GA4 DebugView, perform real-time verification of conversion events:
     - `whatsapp_click` (Admissions enquiry)
     - `phone_click` (Direct call)
     - `form_submission` (Contact / Enquiry form)
     - `sat_diagnostic_start` and `sat_diagnostic_complete`
5. **Initial 28-Day Search Performance Baseline:**
   - Record total impressions, clicks, average CTR, and average position for the 4 query clusters.

---

### Phase 2: Days 31–60 (Snippet Optimization & Local Expansion)

1. **SERP Snippet & CTR Refinement:**
   - Identify pages with high impressions (>500/mo) but below-average CTR (<2.5%).
   - Adjust `<title>` and `<meta name="description">` in `src/seo-routes.js` to better match verified user search intents (e.g. adding specific curriculum terms like "CBSE / IGCSE" to high-ranking tuition pages).
2. **Google Business Profile Integration:**
   - Align weekly Google Business Profile posts with website course updates (e.g., upcoming Digital SAT exam batch dates).
   - Link all GBP post CTAs directly to canonical course URLs with UTM parameters (`?utm_source=gbp&utm_medium=organic&utm_campaign=sat_sharjah`).
3. **Review Velocity & Sentiment Analysis:**
   - Monitor incoming Google Reviews on `https://g.page/r/CVwmfMU8WAHsEAI/review`.
   - Track keyword occurrences in parent/student reviews ("SAT preparation", "Sharjah tuition", "Al Majaz").
4. **Core Web Vitals Field Monitoring:**
   - Check Google Search Console Core Web Vitals report for mobile and desktop field data (p75 metrics):
     - Target: LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1.

---

### Phase 3: Days 61–90 (Content Authority & Arabic Translation Rollout)

1. **Strategic Content Gap Expansion:**
   - Based on client confirmation from `docs/BUSINESS_EXTERNAL_DEPENDENCIES_REGISTER.md`:
     - Expand `/academic-excellence` with dedicated curriculum guides (e.g. "CBSE Grade 10 & 12 Board Exam Coaching in Sharjah").
     - Publish verified teacher credentials and educator profiles on course pages.
2. **Staged Arabic Content Rollout:**
   - Translate priority Arabic course pages in order of commercial value:
     1. `/ar/sat-preparation-sharjah` (Digital SAT in Arabic)
     2. `/ar/academic-excellence` (Subject Tuition in Arabic)
     3. `/ar/spoken-arabic` (Spoken Arabic details)
   - When each Arabic page has complete, high-quality Arabic body copy, add its route to `src/i18n/published.js`.
   - Remove `noindex` and publish reciprocal hreflang pairings on both English and Arabic versions.
   - Re-run `npm run build` to automatically include translated pages in `sitemap.xml`.
3. **Consolidation of Low-Value / Cannibalizing Content:**
   - Review performance of secondary article pages. If any articles compete for identical query clusters without generating qualified enquiries, consolidate copy into authoritative pillar pages with 301 redirects.
4. **Quarterly Organic ROI Review:**
   - Calculate organic inquiry-to-enrolment conversion rate.
   - Present quarterly progress report comparing organic traffic growth, local Maps visibility, and student acquisitions.
