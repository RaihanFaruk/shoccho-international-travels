import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

async function diagnose() {
  const chrome = await chromeLauncher.launch({
    chromePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  });

  try {
    // Test about page mobile (biggest regression)
    const res = await lighthouse('http://localhost:3000/about', {
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

    const audits = res.lhr.audits;
    const cats = res.lhr.categories;
    console.log('=== ABOUT MOBILE SCORES ===');
    console.log('Performance:', Math.round((cats.performance?.score || 0) * 100));
    console.log('FCP:', audits['first-contentful-paint']?.displayValue);
    console.log('LCP:', audits['largest-contentful-paint']?.displayValue);
    console.log('TBT:', audits['total-blocking-time']?.displayValue);
    console.log('CLS:', audits['cumulative-layout-shift']?.displayValue);

    console.log('\n=== RENDER BLOCKING ===');
    const rbl = audits['render-blocking-resources']?.details?.items || [];
    for (const r of rbl) {
      console.log(`  ${r.url} - wastedMs: ${r.wastedMs}`);
    }

    console.log('\n=== BOOTUP TIME (top 5) ===');
    const bootup = audits['bootup-time']?.details?.items || [];
    for (const b of bootup.slice(0, 5)) {
      console.log(`  ${b.url}: scripting=${b.scripting}ms`);
    }

    console.log('\n=== LONG TASKS (top 5) ===');
    const longTasks = audits['long-tasks']?.details?.items || [];
    for (const lt of longTasks.slice(0, 5)) {
      console.log(`  ${lt.duration}ms @ ${lt.startTime}ms — ${lt.url}`);
    }

    console.log('\n=== PRELOAD FONT RESOURCES ===');
    const fontAudit = audits['uses-rel-preload']?.details?.items || [];
    for (const f of fontAudit) {
      console.log(`  ${f.url}`);
    }

    console.log('\n=== RESOURCE SIZES ===');
    const resources = audits['uses-optimized-images']?.details?.items || [];
    for (const r of resources.slice(0, 10)) {
      console.log(`  ${r.url}: total=${r.totalBytes}, wasted=${r.wastedBytes}`);
    }

    // Also check home mobile
    console.log('\n\n=== HOME MOBILE TBT breakdown ===');
    const res2 = await lighthouse('http://localhost:3000', {
      port: chrome.port,
      output: 'json',
      logLevel: 'error',
      formFactor: 'mobile',
      screenEmulation: { mobile: true, width: 390, height: 844, deviceScaleFactor: 3, disabled: false }
    });
    const a2 = res2.lhr.audits;
    console.log('Performance:', Math.round((res2.lhr.categories.performance?.score || 0) * 100));
    console.log('TBT:', a2['total-blocking-time']?.displayValue);
    console.log('LCP:', a2['largest-contentful-paint']?.displayValue);
    console.log('FCP:', a2['first-contentful-paint']?.displayValue);
    const longTasks2 = a2['long-tasks']?.details?.items || [];
    for (const lt of longTasks2.slice(0, 5)) {
      console.log(`  Long task: ${lt.duration}ms @ ${lt.startTime}ms — ${lt.url}`);
    }
    const bootup2 = a2['bootup-time']?.details?.items || [];
    for (const b of bootup2.slice(0, 5)) {
      console.log(`  Bootup: ${b.url}: scripting=${b.scripting}ms`);
    }
  } finally {
    try { await chrome.kill(); } catch (e) {}
  }
}

diagnose().catch(console.error);
