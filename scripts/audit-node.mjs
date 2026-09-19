import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pages = [
  { name: 'home', url: 'http://localhost:3000' },
  { name: 'packages', url: 'http://localhost:3000/packages' },
  { name: 'about', url: 'http://localhost:3000/about' }
];

async function run() {
  console.log('Launching Chrome...');
  const chrome = await chromeLauncher.launch({
    chromePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  });

  const results = {};

  try {
    for (const page of pages) {
      results[page.name] = {};

      // Desktop
      console.log(`Auditing ${page.name} (desktop)...`);
      const desktopResult = await lighthouse(page.url, {
        port: chrome.port,
        output: 'json',
        logLevel: 'error',
        formFactor: 'desktop',
        screenEmulation: {
          mobile: false,
          width: 1350,
          height: 940,
          deviceScaleFactor: 1,
          disabled: false,
        },
        throttling: {
          rttMs: 40,
          throughputKbps: 10240,
          cpuSlowdownMultiplier: 1,
          requestLatencyMs: 0,
          downloadThroughputKbps: 0,
          uploadThroughputKbps: 0
        }
      });

      results[page.name].desktop = {
        performance: Math.round((desktopResult.lhr.categories.performance?.score || 0) * 100),
        accessibility: Math.round((desktopResult.lhr.categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((desktopResult.lhr.categories['best-practices']?.score || 0) * 100),
        seo: Math.round((desktopResult.lhr.categories.seo?.score || 0) * 100),
      };
      console.log(`${page.name} (desktop):`, results[page.name].desktop);

      // Mobile
      console.log(`Auditing ${page.name} (mobile)...`);
      const mobileResult = await lighthouse(page.url, {
        port: chrome.port,
        output: 'json',
        logLevel: 'error',
        formFactor: 'mobile',
        screenEmulation: {
          mobile: true,
          width: 390,
          height: 844,
          deviceScaleFactor: 3,
          disabled: false,
        }
      });

      results[page.name].mobile = {
        performance: Math.round((mobileResult.lhr.categories.performance?.score || 0) * 100),
        accessibility: Math.round((mobileResult.lhr.categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((mobileResult.lhr.categories['best-practices']?.score || 0) * 100),
        seo: Math.round((mobileResult.lhr.categories.seo?.score || 0) * 100),
      };
      console.log(`${page.name} (mobile):`, results[page.name].mobile);
    }
  } finally {
    try {
      await chrome.kill();
    } catch (e) {
      // ignore Windows temp dir cleanup EPERM
    }
  }

  const outPath = path.join(__dirname, 'lighthouse-summary.json');
  fs.writeFileSync(outPath, JSON.stringify(results, null, 2));
  console.log('Results saved to', outPath);
}

run().catch(err => {
  console.error('Lighthouse audit error:', err);
  process.exit(1);
});
