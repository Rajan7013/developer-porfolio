# Portfolio SEO and performance audit

Generated: 2026-10-17T05:55:51.644Z

Production build tested locally on port 3101 with Lighthouse 13.5.0 and standard mobile/desktop presets. Mobile uses simulated throttling (4x CPU slowdown, approximately 1.6 Mbps). These are lab results, not deployed Vercel or field measurements.

| Page | Device | Performance | Accessibility | Best practices | SEO | First content | Largest content |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| / | mobile | 96 | 100 | 100 | 100 | 1.07 s | 2.55 s |
| / | desktop | 100 | 100 | 100 | 100 | 0.30 s | 0.60 s |
| /about | mobile | 97 | 100 | 100 | 100 | 1.06 s | 2.43 s |
| /about | desktop | 100 | 100 | 100 | 100 | 0.30 s | 0.57 s |
| /services | mobile | 98 | 100 | 100 | 100 | 1.06 s | 2.28 s |
| /services | desktop | 100 | 100 | 100 | 100 | 0.29 s | 0.53 s |
| /certificate | mobile | 96 | 100 | 100 | 100 | 1.06 s | 2.72 s |
| /certificate | desktop | 100 | 100 | 100 | 100 | 0.30 s | 0.68 s |
| /stack | mobile | 98 | 100 | 100 | 100 | 1.21 s | 2.36 s |
| /stack | desktop | 100 | 100 | 100 | 100 | 0.33 s | 0.63 s |
| /technologies | mobile | 98 | 100 | 100 | 100 | 1.21 s | 2.35 s |
| /technologies | desktop | 100 | 100 | 100 | 100 | 0.33 s | 0.59 s |
| /projects | mobile | 99 | 100 | 100 | 100 | 1.06 s | 2.24 s |
| /projects | desktop | 100 | 100 | 100 | 100 | 0.29 s | 0.53 s |
| /contact | mobile | 98 | 100 | 100 | 100 | 1.06 s | 2.26 s |
| /contact | desktop | 100 | 100 | 100 | 100 | 0.29 s | 0.53 s |

The requested 99-point performance score and one-second load time remain targets where the measured results fall short. Lighthouse SEO 100 covers automated checks; it does not guarantee indexing, rankings, or complete SEO coverage.

## Changes

- Clear page-specific headings, one H1 per public route, and corrected heading hierarchy.
- Unique titles/descriptions, canonicals, social previews, social image, and server-rendered structured data.
- Generated sitemap, corrected manifest/icons, admin noindex, and duplicate-content canonical for /technologies.
- Server-rendered static content; removed global animation-library dependency and hero typing/count animations.
- Smaller fonts including a licensed 1.5 KB wordmark subset; responsive pre-encoded AVIF portrait.
- First-certificate image priority, on-demand PWA media caching, and inline Tailwind CSS.
- Corrected font/theme variables, contrast, keyboard focus, skip link, and certificate controls.

## Verification and limits

- Production build, TypeScript, and targeted ESLint checks passed.
- scripts/check-seo.mjs verifies eight public routes, metadata, H1 counts, JSON-LD, sitemap/robots, social image, manifest icons, and admin noindex.
- Desktop and mobile layouts were visually checked.
- Online technology logos remain external as requested; their latency and availability can vary.
- Vercel Analytics loads on Vercel; its production impact is absent from localhost scores.
- Next.js experimental inlineCss reduces first-load requests, but requires rechecking on framework upgrades and prevents separate stylesheet caching on initial responses.
- This audit did not deploy changes. Repeat the audits against the deployed site to verify production results.

## Reproduce

Build and start the production server on port 3101, run scripts/check-seo.mjs, then pass an installed Lighthouse cli/index.js path to scripts/audit-lighthouse.mjs. AUDIT_BASE_URL selects a different origin. Run scripts/summarize-lighthouse.mjs to regenerate this table. Full HTML/JSON reports are in artifacts/lighthouse/ (git-ignored).

References: [Lighthouse scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring), [Next.js inline CSS](https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss).
