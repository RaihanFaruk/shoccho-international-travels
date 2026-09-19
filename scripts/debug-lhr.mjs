import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

async function debug() {
  const chrome = await chromeLauncher.launch({
    chromePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    chromeFlags: ['--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  });

  try {
    const res = await lighthouse('http://localhost:3000', {
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
    console.log('=== METRICS ===');
    console.log('FCP:', audits['first-contentful-paint']?.displayValue, audits['first-contentful-paint']?.score);
    console.log('LCP:', audits['largest-contentful-paint']?.displayValue, audits['largest-contentful-paint']?.score);
    console.log('TBT:', audits['total-blocking-time']?.displayValue, audits['total-blocking-time']?.score);
    console.log('CLS:', audits['cumulative-layout-shift']?.displayValue, audits['cumulative-layout-shift']?.score);
    console.log('Speed Index:', audits['speed-index']?.displayValue, audits['speed-index']?.score);

    console.log('=== RENDER BLOCKING ===');
    console.log(JSON.stringify(audits['render-blocking-resources']?.details?.items, null, 2));

    console.log('=== LCP ELEMENT ===');
    console.log(JSON.stringify(audits['largest-contentful-paint-element']?.details?.items, null, 2));

    console.log('=== SERVER RESPONSE TIME ===');
    console.log(audits['server-response-time']?.displayValue);

    console.log('=== UNUSED JAVASCRIPT ===');
    console.log(JSON.stringify(audits['unused-javascript']?.details?.items?.map(i => ({ url: i.url, wastedBytes: i.wastedBytes })), null, 2));

    console.log('=== UNUSED CSS RULES ===');
    console.log(JSON.stringify(audits['unused-css-rules']?.details?.items?.map(i => ({ url: i.url, wastedBytes: i.wastedBytes })), null, 2));
  } finally {
    try { await chrome.kill(); } catch (e) {}
  }
}

debug().catch(console.error);
