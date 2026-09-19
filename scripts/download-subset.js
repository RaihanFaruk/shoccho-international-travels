const fs = require('fs');

async function main() {
  const iconsList = JSON.parse(fs.readFileSync('scripts/icons-list.json', 'utf8'));
  const iconNamesParam = iconsList.join(',');
  const apiUrl = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=${iconNamesParam}`;
  
  console.log('Fetching subset CSS for', iconsList.length, 'icons...');
  const res = await fetch(apiUrl, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  });

  const css = await res.text();
  console.log('Returned CSS response:\n', css.substring(0, 500));

  // Extract woff2 url
  const woff2Match = css.match(/src:\s*url\((https:\/\/[^)]+)\)\s*format\(['"]woff2['"]\)/);
  if (woff2Match) {
    const woff2Url = woff2Match[1];
    console.log('Downloading subsetted woff2 from:', woff2Url);
    const fontRes = await fetch(woff2Url);
    const buf = Buffer.from(await fontRes.arrayBuffer());
    fs.writeFileSync('public/fonts/material-symbols-outlined.woff2', buf);
    console.log('SUCCESS! Saved subsetted font to public/fonts/material-symbols-outlined.woff2');
    console.log('New font file size:', buf.byteLength, 'bytes (' + (buf.byteLength / 1024).toFixed(1) + ' KB)');
  } else {
    console.error('Could not find woff2 URL in CSS response:', css);
  }
}

main().catch(console.error);
