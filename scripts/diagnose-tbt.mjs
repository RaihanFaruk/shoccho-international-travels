import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

async function diagnose() {
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
    console.log('=== LONG TASKS ===');
    const longTasks = audits['long-tasks']?.details?.items || [];
    for (const lt of longTasks.slice(0, 10)) {
      console.log(`Duration: ${lt.duration}ms, StartTime: ${lt.startTime}ms, URL: ${lt.url}`);
    }

    console.log('=== BOOTUP TIME ===');
    const bootup = audits['bootup-time']?.details?.items || [];
    for (const b of bootup.slice(0, 10)) {
      console.log(`URL: ${b.url}, Total: ${b.total}ms, Scripting: ${b.scripting}ms, Parse/Compile: ${b.scriptParseCompile}ms`);
    }

    console.log('=== MAIN THREAD WORK BREAKDOWN ===');
    const mainThread = audits['mainthread-work-breakdown']?.details?.items || [];
    for (const m of mainThread.slice(0, 10)) {
      console.log(`Group: ${m.group}, Duration: ${m.duration}ms`);
    }

    console.log('=== THIRD PARTY SUMMARY ===');
    const thirdParty = audits['third-party-summary']?.details?.items || [];
    for (const tp of thirdParty) {
      console.log(`Entity: ${tp.entity?.text}, Transfer: ${tp.transferSize}, MainThread: ${tp.mainThreadTime}ms`);
    }
  } finally {
    try { await chrome.kill(); } catch (e) {}
  }
}

diagnose().catch(console.error);
