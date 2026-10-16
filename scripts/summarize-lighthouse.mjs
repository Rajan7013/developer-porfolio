import { readFileSync, writeFileSync } from 'node:fs';
const routes = ['home', 'about', 'services', 'certificate', 'stack', 'technologies', 'projects', 'contact'];
const lines = [
    '# Portfolio SEO and performance audit', '',
    `Generated: ${new Date().toISOString()}`, '',
    'Production build tested locally on port 3101 with Lighthouse 13.5.0 and standard mobile/desktop presets. Mobile uses simulated throttling (4x CPU slowdown, approximately 1.6 Mbps). These are lab results, not deployed Vercel or field measurements.', '',
    '| Page | Device | Performance | Accessibility | Best practices | SEO | First content | Largest content |',
    '| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |',
];
for (const route of routes) for (const mode of ['mobile', 'desktop']) {
    const r = JSON.parse(readFileSync(`artifacts/lighthouse/${route}-${mode}.report.json`, 'utf8'));
    const scores = ['performance', 'accessibility', 'best-practices', 'seo'].map(key => Math.round(r.categories[key].score * 100));
    const seconds = ['first-contentful-paint', 'largest-contentful-paint'].map(key => (r.audits[key].numericValue / 1000).toFixed(2) + ' s');
    lines.push(`| /${route === 'home' ? '' : route} | ${mode} | ${[...scores, ...seconds].join(' | ')} |`);
}
lines.push('',
    'The requested 99-point performance score and one-second load time remain targets where the measured results fall short. Lighthouse SEO 100 covers automated checks; it does not guarantee indexing, rankings, or complete SEO coverage.', '',
    '## Changes', '',
    '- Clear page-specific headings, one H1 per public route, and corrected heading hierarchy.',
    '- Unique titles/descriptions, canonicals, social previews, social image, and server-rendered structured data.',
    '- Generated sitemap, corrected manifest/icons, admin noindex, and duplicate-content canonical for /technologies.',
    '- Server-rendered static content; removed global animation-library dependency and hero typing/count animations.',
    '- Smaller fonts including a licensed 1.5 KB wordmark subset; responsive pre-encoded AVIF portrait.',
    '- First-certificate image priority, on-demand PWA media caching, and inline Tailwind CSS.',
    '- Corrected font/theme variables, contrast, keyboard focus, skip link, and certificate controls.', '',
    '## Verification and limits', '',
    '- Production build, TypeScript, and targeted ESLint checks passed.',
    '- scripts/check-seo.mjs verifies eight public routes, metadata, H1 counts, JSON-LD, sitemap/robots, social image, manifest icons, and admin noindex.',
    '- Desktop and mobile layouts were visually checked.',
    '- Online technology logos remain external as requested; their latency and availability can vary.',
    '- Vercel Analytics loads on Vercel; its production impact is absent from localhost scores.',
    '- Next.js experimental inlineCss reduces first-load requests, but requires rechecking on framework upgrades and prevents separate stylesheet caching on initial responses.',
    '- Changes have not been deployed. Repeat the audits against production after deployment.', '',
    '## Reproduce', '',
    'Build and start the production server on port 3101, run scripts/check-seo.mjs, then pass an installed Lighthouse cli/index.js path to scripts/audit-lighthouse.mjs. AUDIT_BASE_URL selects a different origin. Run scripts/summarize-lighthouse.mjs to regenerate this table. Full HTML/JSON reports are in artifacts/lighthouse/ (git-ignored).', '',
    'References: [Lighthouse scoring](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring), [Next.js inline CSS](https://nextjs.org/docs/app/api-reference/config/next-config-js/inlineCss).', '');
writeFileSync('SEO_PERFORMANCE_REPORT.md', lines.join('\n'));
