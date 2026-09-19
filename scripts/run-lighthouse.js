const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

process.env.CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const pages = [
  { name: 'home', url: 'http://localhost:3000' },
  { name: 'packages', url: 'http://localhost:3000/packages' },
  { name: 'about', url: 'http://localhost:3000/about' }
];

const presets = ['desktop', 'mobile'];
const results = {};

for (const page of pages) {
  results[page.name] = {};
  for (const preset of presets) {
    const outFile = path.join(__dirname, `lh-${page.name}-${preset}.json`);
    const cmd = `npx lighthouse ${page.url} --chrome-flags="--headless --no-sandbox" ${preset === 'desktop' ? '--preset=desktop' : ''} --output=json --output-path="${outFile}" --quiet`;
    console.log(`Auditing ${page.name} (${preset})...`);
    try {
      execSync(cmd, { stdio: 'inherit', env: process.env });
      const data = JSON.parse(fs.readFileSync(outFile, 'utf8'));
      const scores = {
        performance: Math.round((data.categories.performance?.score || 0) * 100),
        accessibility: Math.round((data.categories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((data.categories['best-practices']?.score || 0) * 100),
        seo: Math.round((data.categories.seo?.score || 0) * 100),
      };
      results[page.name][preset] = scores;
      console.log(`${page.name} (${preset}):`, scores);
    } catch (err) {
      console.error(`Error auditing ${page.name} (${preset}):`, err.message);
    }
  }
}

fs.writeFileSync(path.join(__dirname, 'lighthouse-summary.json'), JSON.stringify(results, null, 2));
console.log('All audits completed. Summary saved to scripts/lighthouse-summary.json');
