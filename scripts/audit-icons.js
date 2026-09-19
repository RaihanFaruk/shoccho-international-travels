const fs = require('fs');
const path = require('path');

const icons = new Set();

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next') walk(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      
      // Match <span className="...material-symbols...">icon_name</span>
      const regex1 = /material-symbols[^>]*>([^<]+)<\/span>/g;
      let match;
      while ((match = regex1.exec(content)) !== null) {
        const text = match[1].trim();
        if (text && !text.includes('{') && !text.includes('(') && /^[a-z0-9_]+$/.test(text)) {
          icons.add(text);
        }
      }

      // Also match inline material-symbols icon strings or properties
      const regex2 = /icon:\s*["']([a-z0-9_]+)["']/g;
      while ((match = regex2.exec(content)) !== null) {
        icons.add(match[1]);
      }

      // Match iconName: '...'
      const regex3 = /iconName:\s*["']([a-z0-9_]+)["']/g;
      while ((match = regex3.exec(content)) !== null) {
        icons.add(match[1]);
      }
    }
  }
}

walk('src');

const sortedIcons = Array.from(icons).sort();
console.log('Total unique icons found:', sortedIcons.length);
console.log(JSON.stringify(sortedIcons, null, 2));

// Save list to a file for subsetting
fs.writeFileSync('scripts/icons-list.json', JSON.stringify(sortedIcons, null, 2));
