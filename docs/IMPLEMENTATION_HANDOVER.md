# Nitaq Academy repositioning handover

## Implemented

- Rebuilt the homepage around the required hierarchy: Digital SAT preparation, language training, subject tuition, then additional courses.
- Completed a second visual-design pass across the shared navigation, homepage hero, cards, imagery, section spacing and footer; corrected the client mount so prerendered and runtime markup no longer appear together.
- Added the requested homepage title, description, H1, supporting copy and CTA hierarchy in English, with a full RTL Arabic homepage version.
- Replaced carousels and broad career-certification positioning with a calm, static, mobile-first layout using the existing Nitaq logo and repository imagery.
- Reorganized desktop/mobile navigation and footer into SAT, Language Training, Subject Tuition, Other Courses, About and Contact.
- Preserved all established course URLs and kept secondary courses discoverable.
- Renamed the academic hub presentation to “Subject Tuition in Sharjah”; did not introduce unsupported university tuition.
- Reworked the SAT title/H1, removed the duplicate diagnostic H1, removed unsupported score-improvement testimonials and withheld disputed 12/24/48-hour claims pending approval.
- Clarified the language hub and separated general languages from IELTS/TOEFL/PTE exam coaching.
- Consolidated runtime metadata and schema ownership in `src/components/SEO.jsx`; removed fabricated instructor, rating, opening-hours, price, geographic and duration values from shared schema.
- Added canonical, social, robots and safe Organization/LocalBusiness/WebSite/WebPage/Breadcrumb/Course graphs from confirmed facts.
- Added noindex rules for diagnostics results/quiz reports, admin, verification and thank-you utilities.
- Regenerated the sitemap from public indexable routes, removed results/admin/utility URLs, removed meaningless priority/changefreq values and published Arabic hreflang only for the completed Arabic homepage.
- Simplified robots rules so noindex pages remain crawlable and specific crawler groups no longer override general restrictions.
- Added immutable caching for hashed assets and useful caching for images, robots and sitemap on Vercel.
- Fixed the missing digital-marketing article image reference.
- Converted three large SAT PNGs to WebP and changed page references to the optimized files.
- Added diagnostic start/completion analytics without sending names, phones, emails or assessment answers.
- Corrected “No sign-up required”; the diagnostic now states that contact details are required.

## Redirect map

No new URL migrations were introduced.

| Source | Destination | Status | Note |
|---|---|---:|---|
| `/sat-preparation` | `/sat-preparation-sharjah` | 308 | Existing permanent redirect retained |
| `/ar/sat-preparation` | `/ar/sat-preparation-sharjah` | 308 | Existing redirect retained; target remains noindex until Arabic content is approved |
| `/webinar` | `/webinar/ai` | 307 | Existing temporary redirect retained |

The preferred-domain redirect from non-www to `https://www.nitaqacademy.com/` is a hosting/domain setting and cannot be verified or changed from this repository alone. Preserve query strings when configuring it in Vercel.

## Verification completed

- `npm run build`: passed; 104 production routes prerendered with zero prerender failures.
- Scoped ESLint verification for every changed source and build-script file: passed.
- Full-repository `npm run lint`: still reports 50 errors and 4 warnings in pre-existing/untouched code, primarily legacy diagnostic, admin and `MathText` files. These were not hidden or treated as regressions from this implementation.
- JSON-LD parse check: passed on generated pages.
- Static validation across all 104 managed prerendered pages: one canonical, one public-page H1, parseable JSON-LD and no missing local image references.
- Representative title, description, H1, canonical and robots checks: passed for homepage, Arabic homepage, SAT, language hub, subject tuition hub, diagnostic and utility pages.
- Runtime metadata verification: passed with one canonical, description, robots tag and JSON-LD graph after client mount, route changes and browser back navigation; clean-browser console check produced no warnings or errors.
- Mobile checks at 360, 390 and 430 CSS pixels: no horizontal document overflow; hero CTAs stack; menu opens and locks background scrolling.
- Initial HTML contains the main content and internal links for prerendered English routes and the Arabic homepage.
- The route-by-route production register is in `docs/SEO_ROUTE_INVENTORY.md`.
- All Contact, WhatsApp and telephone links use +971 52 756 9908 across the entire site.

## Performance evidence

No Lighthouse or CrUX field dataset was available locally, so no score or percentile is claimed.

| Asset | Before | After | Reduction |
|---|---:|---:|---:|
| Homepage SAT editorial image | 667,269 B PNG | 77,568 B WebP | 88.4% |
| SAT course hero image | 755,214 B PNG | 90,726 B WebP | 88.0% |
| SAT diagnostic portal image | 525,911 B PNG | 50,418 B WebP | 90.4% |

The production entry bundle is approximately 507 KB raw / 139 KB gzip and the main stylesheet approximately 68 KB raw / 13 KB gzip. The diagnostic/PDF tooling remains separately code-split. Field CWV must be measured in Search Console after deployment; targets remain LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1 at the 75th percentile.

## Remaining limitations and dependencies

- Only the Arabic homepage has fully reviewed Arabic body content. Other `/ar/` routes remain accessible but are noindex and excluded from the sitemap/hreflang until their complete body copy, forms, validation and FAQs are translated and approved.
- Course catalogue pages still contain legacy claims that require the business fact review in `docs/BUSINESS_CONFIRMATION.md`; disputed facts were removed from shared schema rather than guessed.
- Search Console and analytics account access were not available, so organic/query/enquiry baselines and live conversion delivery could not be independently verified.
- The Google Apps Script form destination was preserved. A live submission was not made because it would create a real admissions lead.
- The diagnostic backend requires its API service for end-to-end question submission; UI routing and analytics code were verified, but no synthetic student record was created.
- The current Vercel SPA fallback rewrites unknown paths to `index.html`; a true edge-level 404 response requires a hosting routing change and a complete allow-list or framework migration. The visible NotFound route still works client-side.
- Non-www redirect status, production headers and live forms require post-deployment verification.

## Deployment and rollback

1. Review `docs/BUSINESS_CONFIRMATION.md` with the academy owner.
2. Run `npm ci`, `npm run build`, and `npm run inventory`.
3. Deploy through the existing Vercel project. Verify the custom domain is `www.nitaqacademy.com` and make non-www → www permanent while preserving the path/query.
4. Smoke-test `/`, `/ar`, `/sat-preparation-sharjah`, `/language-trainings`, `/academic-excellence`, `/courses`, `/sat/diagnostic`, one professional course and one subject page.
5. Confirm the Apps Script lead destination with an agreed test lead, then remove the test record.
6. Roll back by redeploying the prior known-good Vercel deployment. No database migration or destructive URL migration is included in this change.

## Search Console validation

1. Inspect the homepage, SAT, language and subject-tuition URLs and request indexing after production verification.
2. Submit `https://www.nitaqacademy.com/sitemap.xml`; verify the discovered count and that utility routes are absent.
3. Check canonical selection and rendered HTML in URL Inspection for the three pillar pages.
4. Confirm `/ar` is indexed with reciprocal homepage hreflang; do not request indexing for unfinished Arabic course routes.
5. Review Page Indexing for “Crawled — currently not indexed”, duplicate/canonical anomalies and soft 404s.
6. Review Core Web Vitals separately for mobile and desktop after enough field data accumulates.
7. Validate schema with Schema Markup Validator. Google retired Course Info and, in May 2026, FAQ rich results; `Course`/FAQ semantics must not be presented as guaranteed enhancements.

## 30 / 60 / 90-day measurement plan

### Days 0–30

- Record weekly Search Console clicks, impressions, CTR, average position, queries and landing pages for three page groups: SAT, languages and tuition.
- Record qualified enquiries by pillar, WhatsApp clicks, successful forms, diagnostic starts and diagnostic completions.
- Annotate deployment date; check indexing, canonical selection, sitemap processing, form delivery and mobile CWV.
- Establish the baseline from the first complete post-launch 28-day window; compare against the preceding equivalent period without promising causation.

### Days 31–60

- Improve pages with high impressions but weak CTR using query-to-title/snippet alignment.
- Improve pages with engagement but low enquiry rate using clearer programme facts and CTA placement.
- Add approved trainer, timetable, fee, certificate and FAQ information from the business confirmation record.
- Review Dubai/location pages using Search Console before deciding whether to keep, rewrite or consolidate them.

### Days 61–90

- Compare pillar growth in non-brand impressions, qualified enquiries and diagnostic completion rate.
- Consolidate genuinely overlapping articles only where query/landing-page evidence supports it; maintain redirect and internal-link maps.
- Expand only fully translated, reviewed Arabic pillar pages and then add them to hreflang/sitemap.
- Prioritize the next content and technical cycle from qualified-enquiry contribution, not rankings alone.
