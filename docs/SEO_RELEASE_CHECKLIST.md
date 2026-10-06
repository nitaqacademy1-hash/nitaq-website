# SEO release checklist — 2026-10-04

This project has **not** been deployed from this task. “Local preview” means the production build served on localhost; it is not a Vercel deployment preview. Use this checklist before releasing the existing dirty working tree, which contains unrelated changes.

| Check | Local implementation/test | Deployment preview | Production |
|---|---|---|---|
| Build and initial HTML | **Pass:** `npm run build`, 200 generated routes, 0 prerender failures | Pending Vercel preview | Existing site GET crawl recorded; new output not live |
| SEO regression | **Pass:** `npm run seo:check`, 89 sitemap URLs, 0 errors; two webinar semantic warnings | Pending | Pending after release |
| Sitemap reconciliation | **Pass:** `npm run seo:sitemap-diff`, 178 live baseline → 89 local; 89 exclusions, each explained in `SEO_SITEMAP_DIFF.csv` | Pending | Existing 178-URL sitemap remains live |
| Primary metadata, canonicals, noindex and hreflang | **Pass:** generated HTML and hydrated Chrome matched on nine representative routes | Pending HTTP GET and browser comparison | Existing production sampled; new metadata not live |
| Nonexistent `/ar/admin*` | **Pass:** no generated local files; catch-all Vercel rewrite removed | **Must verify actual HTTP 404** | **Fail now:** `/ar/admin` and `/ar/admin/login` returned 200 on 2026-10-04 |
| Unknown URL | Local config has no SPA catch-all; `dist/404.html` exists | **Must verify actual HTTP 404** | Passed one random URL with HTTP 404 on 2026-10-04 |
| Aliases and dynamic routes | Existing SAT/webinar redirects retained; explicit diagnostic aliases, certificate and admin-student rewrites added | Test 301/302 and direct refresh of dynamic routes | Existing `/sat-preparation` and `/ar/sat-preparation` reached target; new rules not live |
| Links, mobile and forms | **Pass:** no broken internal links in generated public pages; Chrome at 390/768/1440 px had no overflow, broken images or page errors. Contact form 200/500 responses tested with intercepted requests; no live lead sent. | Test real preview endpoint with safe account-approved process | Live form receipt unverified |
| Arabic journey | **Pass:** untranslated pages noindex; switch from English course goes to translated `/ar` homepage; Arabic homepage links to English canonical course. | Check labels, RTL, punctuation and navigation | Current untranslated `/ar/*` remain in live sitemap |
| Structured data | **Pass:** JSON parses, IDs consistent; Course markup limited to SAT; no invented ratings/prices/hours | Run Schema.org validator and Google's supported Rich Results Test on preview URL | Current live schema not revalidated |
| Crawler access | Local robots permits intended public paths and sitemap; no bot-specific training-policy change | Check preview is excluded from search without changing production robots | Live robots and named-UA sample GETs recorded; verified crawler logs unavailable |
| Performance | Three unthrottled localhost mobile runs per primary page saved in `SEO_MOBILE_LAB_2026-10-04.json`; LCP/INP field evidence unavailable | Run repeatable throttled lab on preview and inspect assets/headers | Search Console/CrUX p75 unavailable |
| Lint | Scoped changed-file ESLint passed. Full `npm run lint`: 50 errors/4 warnings in legacy SAT/admin modules, recorded separately | Must not add new errors | Not applicable |

## Release gates and owners

1. **Web/deployment owner:** create an isolated Vercel preview from a reviewed change set. This task did not create one because deployment was not authorised. Check GET status/headers for all important routes, especially `/ar/admin*`, unknown and retired paths, direct course visits, `/sat/diagnostic/quiz`, certificate URLs and admin student detail refresh. Inspect robots and sitemap on the preview. If the new clean-URL behaviour differs from expected, fix routing before production.
2. **Business owner/management:** approve the [page-specific content questions](SEO_CONTENT_GAPS.md), especially address, legal name, SPEA/partnership wording, reviews, landline, hours, programme delivery/levels and active webinars. Do not add disputed facts to visible copy or schema.
3. **Search/analytics owner:** after production release, inspect the 89-URL sitemap, indexing, canonicals and queries in Search Console; verify Bing sitemap in Bing Webmaster Tools; verify GA4/Meta event receipt, consent and lead deduplication; verify GBP address, pin, phone, hours and services. Search Console evidence unavailable; indexing and ranking conclusions are limited.
4. **Security/backend owner:** verify admin APIs require authentication and student result URLs/session tokens are not exposed through public HTML, analytics, logs or caches. Robots and `noindex` are not access control. Review the form's CORS fallback: a failed readable POST can be followed by a second opaque POST and a success message without confirmed receipt.

## Rollback

Keep the current production deployment available until preview checks pass. If a release causes bad statuses, broken forms or incorrect metadata, use Vercel's deployment rollback to restore the prior production deployment. Revert the specific routing/SEO commit or patch in the repository, rebuild, and retest before redeploying. A sitemap rollback should restore its matching page metadata and robots behaviour as a set; do not publish an old sitemap against new noindex rules. Recheck Search Console and Bing after any rollback.
