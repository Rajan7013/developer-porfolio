import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
const cli = process.argv[2];
if (!cli) throw new Error('Pass the installed Lighthouse cli/index.js path.');
const base = process.env.AUDIT_BASE_URL || 'http://localhost:3101';
const routes = (process.env.AUDIT_ROUTES || 'home,about,services,certificate,stack,technologies,projects,contact').split(',');
const modes = (process.env.AUDIT_MODES || 'mobile,desktop').split(',');
const dir = path.resolve('artifacts/lighthouse');
mkdirSync(dir, { recursive: true });
const results = [];
for (const route of routes) {
  for (const mode of modes) {
    const url = base + (route === 'home' ? '/' : '/' + route);
    const output = path.join(dir, `${route}-${mode}`);
    const args = [cli, url, '--chrome-flags=--headless --no-first-run', '--only-categories=performance,accessibility,best-practices,seo', '--output=json', '--output=html', `--output-path=${output}`, '--quiet'];
    if (mode === 'desktop') args.push('--preset=desktop');
    const run = spawnSync(process.execPath, args, { encoding: 'utf8', timeout: 180000, windowsHide: true });
    if (run.status !== 0) throw new Error(run.stderr || `Audit failed: ${url}`);
    const report = JSON.parse(readFileSync(output + '.report.json', 'utf8'));
    const result = { route, mode, scores: Object.fromEntries(Object.entries(report.categories).map(([key, value]) => [key, Math.round(value.score * 100)])), fcp: report.audits['first-contentful-paint'].numericValue, lcp: report.audits['largest-contentful-paint'].numericValue, tbt: report.audits['total-blocking-time'].numericValue, cls: report.audits['cumulative-layout-shift'].numericValue };
    results.push(result);
    console.log(JSON.stringify(result));
    writeFileSync(path.join(dir, 'latest-run.json'), JSON.stringify(results, null, 2));
  }
}
