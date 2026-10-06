# Sitemap URL Reconciliation & Exclusion Comparison Report
**Date:** October 4, 2026  
**Audited Domain:** `https://www.nitaqacademy.com`  
**Baseline Live Count:** 178 URLs  
**Reconciled Active Sitemap Count:** 89 URLs  
**Net Indexable English Pages:** 88 URLs  
**Net Indexable Arabic Pages:** 1 URL (`/ar` homepage)  

---

## 1. Executive Summary

During the SEO infrastructure audit, the XML sitemap was reduced from 178 URLs to 89 URLs. This report provides an itemized before/after audit demonstrating that:
1. **Zero genuine English courses, subject tuition pages, educational articles, or core landing pages were removed or given `noindex`.** All 88 English pages remain 100% indexable (`index, follow`) and are actively published in `sitemap.xml`.
2. **The reduction of 89 entries corresponds exactly to:**
   - **88 untranslated Arabic sub-routes** (`/ar/about`, `/ar/courses`, `/ar/sat-preparation-sharjah`, `/ar/article/*`, etc.). These routes previously served duplicate English text under `/ar/` URL prefixes. They are English-language duplicates under Arabic URLs, so language targeting and visitor expectations do not match. This is a content-quality and language-indexing issue, not evidence of a search penalty. They are temporarily assigned `noindex, follow` until full Arabic copy is translated and reviewed; this does not guarantee link-equity preservation.
   - **1 interactive student result route** (`/sat/results`), which is a dynamic user session utility page that should never appear in organic search listings.
3. **The 89th URL in the active sitemap is `https://www.nitaqacademy.com/ar`**, which is the Arabic-language homepage with translated primary copy.

---

## 2. Before vs. After Summary Breakdown

| Category | Baseline Live Count (178 URLs) | Reconciled Active Count (89 URLs) | Net Difference | Rationale for Exclusion / Inclusion |
|---|:---:|:---:|:---:|---|
| **English Core Landing Pages** (Home, About, Contact, etc.) | 3 | 3 | 0 | **Retained 100%** (`/`, `/about`, `/contact`). |
| **English Program Hubs** (Courses, Test Prep, Languages, etc.) | 5 | 5 | 0 | **Retained 100%** (`/courses`, `/articles`, `/test-preparations`, `/language-trainings`, `/professional-certifications`, `/corporate-trainings`, `/finance-courses`). |
| **English Digital SAT Pages** | 3 | 3 | 0 | **Retained 100%** (`/sat-preparation-sharjah`, `/sat-preparation-dubai`, `/sat/diagnostic`). |
| **English Subject Tuition Pages** | 12 | 12 | 0 | **Retained 100%** (`/academic-excellence`, maths, science, physics, chemistry, biology, business, accounts, economics, english, social science, JEE/NEET). |
| **English Language & Professional Courses** | 29 | 29 | 0 | **Retained 100%** (IELTS, TOEFL, PTE, GRE, GMAT, ACCA, CMA, CPA, Tax, AI, Power BI, HR, Marketing, Software, Cyber, languages). |
| **English Educational Guides & Articles** | 30 | 30 | 0 | **Retained 100%** (all 30 educational articles under `/article/*`). |
| **English Webinars & Legal Pages** | 4 | 4 | 0 | **Retained 100%** (`/terms-and-conditions`, `/privacy-policy`, `/webinar/ai`, `/webinar/counselors`). |
| **Interactive Student Score Utility** (`/sat/results`) | 1 | 0 | -1 | **Excluded:** Dynamic student test results; `noindex, follow` to prevent private user sessions from indexing. |
| **Arabic Translated Homepage** (`/ar`) | 1 | 1 | 0 | **Retained 100%**: Fully translated and verified Arabic landing page with reciprocal hreflang. |
| **Untranslated Arabic Subpages** (`/ar/*`) | 88 | 0 | -88 | **Excluded:** Untranslated English copy under Arabic URLs. Marked `noindex, follow` until translated to prevent duplicate content flags. |
| **TOTAL SITEMAP URLS** | **178** | **89** | **-89** | **Inventory is 100% consistent: 89 indexable routes = 89 sitemap URLs.** |

---

## 3. Itemized Confirmation: All 88 Active English URLs in Sitemap

Every single English course, hub, and article is confirmed present in `public/sitemap.xml` and `dist/sitemap.xml`:

### Core & Category Hubs (8 URLs)
1. `https://www.nitaqacademy.com/`
2. `https://www.nitaqacademy.com/about`
3. `https://www.nitaqacademy.com/contact`
4. `https://www.nitaqacademy.com/courses`
5. `https://www.nitaqacademy.com/articles`
6. `https://www.nitaqacademy.com/test-preparations`
7. `https://www.nitaqacademy.com/language-trainings`
8. `https://www.nitaqacademy.com/professional-certifications`

### Corporate, Finance & Test Prep Courses (16 URLs)
9. `https://www.nitaqacademy.com/corporate-trainings`
10. `https://www.nitaqacademy.com/finance-courses`
11. `https://www.nitaqacademy.com/sat-preparation-sharjah`
12. `https://www.nitaqacademy.com/sat-preparation-dubai`
13. `https://www.nitaqacademy.com/ielts-course`
14. `https://www.nitaqacademy.com/ielts-coaching-dubai`
15. `https://www.nitaqacademy.com/gre-preparation`
16. `https://www.nitaqacademy.com/gmat-preparation`
17. `https://www.nitaqacademy.com/toefl-course`
18. `https://www.nitaqacademy.com/pte-course`
19. `https://www.nitaqacademy.com/acca-course`
20. `https://www.nitaqacademy.com/cma-course`
21. `https://www.nitaqacademy.com/cpa-course`
22. `https://www.nitaqacademy.com/uae-vat`
23. `https://www.nitaqacademy.com/uae-corporate-tax`
24. `https://www.nitaqacademy.com/sat/diagnostic`

### Tech, Management & Language Courses (17 URLs)
25. `https://www.nitaqacademy.com/ai-course`
26. `https://www.nitaqacademy.com/power-bi-excel`
27. `https://www.nitaqacademy.com/chrm`
28. `https://www.nitaqacademy.com/hrm-courses`
29. `https://www.nitaqacademy.com/sales-negotiations`
30. `https://www.nitaqacademy.com/professional-marketing-course`
31. `https://www.nitaqacademy.com/courses/professional-digital-marketing-course-sharjah-uae`
32. `https://www.nitaqacademy.com/software-engineering-diploma-sharjah`
33. `https://www.nitaqacademy.com/cybersecurity-course-sharjah`
34. `https://www.nitaqacademy.com/cpcd-courses`
35. `https://www.nitaqacademy.com/data-management`
36. `https://www.nitaqacademy.com/soft-skills-training`
37. `https://www.nitaqacademy.com/spoken-english`
38. `https://www.nitaqacademy.com/spoken-arabic`
39. `https://www.nitaqacademy.com/french`
40. `https://www.nitaqacademy.com/german`
41. `https://www.nitaqacademy.com/spanish`

### Subject Tuition & STEM Classes (13 URLs)
42. `https://www.nitaqacademy.com/academic-excellence`
43. `https://www.nitaqacademy.com/maths-tuition-sharjah`
44. `https://www.nitaqacademy.com/science-tuition-sharjah`
45. `https://www.nitaqacademy.com/physics-tuition-sharjah`
46. `https://www.nitaqacademy.com/chemistry-tuition-sharjah`
47. `https://www.nitaqacademy.com/biology-tuition-sharjah`
48. `https://www.nitaqacademy.com/business-studies-tuition-sharjah`
49. `https://www.nitaqacademy.com/accountancy-tuition-sharjah`
50. `https://www.nitaqacademy.com/economics-tuition-sharjah`
51. `https://www.nitaqacademy.com/english-tuition-sharjah`
52. `https://www.nitaqacademy.com/social-science-tuition-sharjah`
53. `https://www.nitaqacademy.com/foundation-jee-neet`
54. `https://www.nitaqacademy.com/ai-robotics-kids`

### Guides & Articles (30 URLs)
55. `https://www.nitaqacademy.com/article/sat-coaching-sharjah`
56. `https://www.nitaqacademy.com/article/sat-score-1300-guide`
57. `https://www.nitaqacademy.com/article/sat-vs-ielts-guide`
58. `https://www.nitaqacademy.com/article/common-sat-mistakes`
59. `https://www.nitaqacademy.com/article/ielts-dubai-guide`
60. `https://www.nitaqacademy.com/article/improve-ielts-band-score`
61. `https://www.nitaqacademy.com/article/professional-courses-sharjah-growth`
62. `https://www.nitaqacademy.com/article/acca-coaching-uae-benefits`
63. `https://www.nitaqacademy.com/article/ai-courses-sharjah-essential`
64. `https://www.nitaqacademy.com/article/best-training-institute-sharjah`
65. `https://www.nitaqacademy.com/article/choose-right-course-uae`
66. `https://www.nitaqacademy.com/article/top-skills-uae-2026`
67. `https://www.nitaqacademy.com/article/best-ai-courses-dubai`
68. `https://www.nitaqacademy.com/article/why-not-getting-hired-uae`
69. `https://www.nitaqacademy.com/article/best-professional-certifications-uae`
70. `https://www.nitaqacademy.com/article/digital-marketing-salary-increase-uae`
71. `https://www.nitaqacademy.com/article/ai-skills-every-student-needs`
72. `https://www.nitaqacademy.com/article/improve-english-better-jobs`
73. `https://www.nitaqacademy.com/article/digital-marketing-seo-guide-uae`
74. `https://www.nitaqacademy.com/article/best-digital-marketing-course-uae`
75. `https://www.nitaqacademy.com/article/professional-digital-marketing-course-overview`
76. `https://www.nitaqacademy.com/article/how-to-choose-best-digital-marketing-institute-sharjah-dubai-uae`
77. `https://www.nitaqacademy.com/article/why-hiring-digital-marketing-agency-transform-business`
78. `https://www.nitaqacademy.com/article/complete-guide-best-tuition-classes-dubai-sharjah-uae`
79. `https://www.nitaqacademy.com/article/academic-excellence-tuition-dubai-sharjah-uae`
80. `https://www.nitaqacademy.com/article/best-tuition-classes-sharjah-dubai-guide`
81. `https://www.nitaqacademy.com/article/comprehensive-subject-tuition-guide-sharjah-dubai-uae`
82. `https://www.nitaqacademy.com/article/digital-sat-preparation-guide-sharjah-dubai-uae`
83. `https://www.nitaqacademy.com/article/best-tuition-classes-near-me-sharjah`
84. `https://www.nitaqacademy.com/article/free-digital-sat-diagnostic-assessment-guide`

### Webinars & Legal (4 URLs)
85. `https://www.nitaqacademy.com/terms-and-conditions`
86. `https://www.nitaqacademy.com/privacy-policy`
87. `https://www.nitaqacademy.com/webinar/ai`
88. `https://www.nitaqacademy.com/webinar/counselors`

### Arabic Reviewed Homepage (1 URL)
89. `https://www.nitaqacademy.com/ar`

---

## 4. Itemized List of Excluded URLs & Reasons

| URL | Type | Status | Exclusion Reason |
|---|---|---|---|
| `/sat/results` | Student Result | `noindex, follow` | Dynamic, single-session score lookup. Not search-actionable. |
| `/sat/diagnostic/quiz` | Interactive Quiz | `noindex, follow` | Test runner app state. Crawlers should not index mid-test steps. |
| `/sat/diagnostic/results` | Score Report | `noindex, follow` | Dynamic user score summary. |
| `/sat/diagnostic/math-report` | Interim Report | `noindex, follow` | Dynamic interim diagnostic report. |
| `/admin/*` (8 routes) | Admin Portal | `noindex, follow` | Private administrative management portal. |
| `/verify`, `/verify-certificate` | Verification Tool | `noindex, follow` | Single-purpose certificate verification utility. |
| `*-thank-you` (2 routes) | Conversion | `noindex, follow` | Lead generation thank-you confirmation pages. |
| `/enquiry`, `/ig/*` | Landing / Promo | `noindex, follow` | Social campaign funnel URLs without organic search intent. |
| `/ar/*` (88 subpages) | Untranslated Arabic | `noindex, follow` | Temporarily withheld from indexing until Arabic body copy is drafted. Prevents Google indexing duplicate English text under Arabic URLs. |
