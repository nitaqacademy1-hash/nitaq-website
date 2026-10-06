# Crawler access and AI search evidence — 2026-10-04

## What was checked

- **Production, read only:** `robots.txt` returned 200. Its published rules included `User-agent: *; Allow: /`, plus disallows for `/admin/`, `/.git/`, `/temp-landing/`, `/enquiry` and `/ar/enquiry`. Separate groups explicitly allowed GPTBot and OAI-SearchBot. This is the **currently deployed** file, not the local file awaiting release.
- **Local project:** `public/robots.txt` allows public pages for all user agents and references the preferred-domain sitemap. It retains `/.git/` and `/temp-landing/` crawl exclusions. It does not block admin or enquiry pages because crawlers need to read their `noindex` directives; server-side controls must protect private data. Effective GPTBot access remains allowed, preserving the current published training preference. No new bot-specific policy was imposed.
- **Public sample requests:** `/sat-preparation-sharjah` returned HTTP 200 with a browser-like request and with user-agent strings named Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User and GPTBot. This only tests how the edge responded to those *spoofable strings*. It does **not** prove a real crawler visited, was admitted by all WAF layers, or indexed or cited the page.
- **Initial HTML:** the live GET crawl of 178 sitemap URLs recorded titles, descriptions, H1s, canonicals and language in [SEO_LIVE_GET_2026-10-04.csv](SEO_LIVE_GET_2026-10-04.csv). All 178 returned 200. The current local prerender also supplies meaningful content before JavaScript on the primary pages.
- **No `llms.txt` file** is present. None was added; it is optional and not a prerequisite for Google or ChatGPT search visibility.

## Crawler roles and verification limits

OpenAI documents [OAI-SearchBot, GPTBot and ChatGPT-User separately](https://developers.openai.com/api/docs/bots): OAI-SearchBot is for search, GPTBot is a separate model-training choice, and ChatGPT-User can fetch at a user's request. OpenAI also publishes searchbot IP ranges and recommends allowing them through host/CDN controls when a site wants search eligibility. The current effective robots policy allows OAI-SearchBot on intended public pages. Do not broaden WAF access solely from a claimed user-agent string.

[Google's crawler-verification guidance](https://developers.google.com/crawling/docs/crawlers-fetchers/verify-google-requests) requires source-IP ranges or reverse-then-forward DNS checks. [Bing's Verify Bingbot guidance](https://www.bing.com/webmasters/help/verify-bingbot-2195837f) similarly warns that user agents are spoofable. Server/CDN logs, verified source IPs, real 403/429 rates, challenge events and Bing Webmaster Tools were unavailable, so real crawler access and Bing sitemap processing are **not verified**. A sample 200 is narrower evidence than those account-side checks.

## Action after authorised release

1. Confirm live robots matches the intended local file, then submit/inspect the sitemap in Search Console and Bing Webmaster Tools. Do not assume submission guarantees indexing.
2. Review Vercel/CDN/WAF logs for 403, 429 and challenge responses to **verified** Googlebot, Bingbot and OAI-SearchBot IPs; verify GPTBot handling matches the owner's existing choice. Apply only narrowly scoped firewall exceptions if real blocked traffic is found.
3. Measure crawler access, search appearance and any ChatGPT referral/citation signals separately. Neither accessible HTML nor robots permission guarantees recommendations or citations.
4. Consider IndexNow only if the team has a reliable publish/delete workflow and Bing ownership; no key or submission endpoint was created.
