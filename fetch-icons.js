const fs = require('fs');
const https = require('https');

const icons = [
  'html5', 'css3', 'javascript', 'typescript', 'php', 'python', 'c',
  'react', 'nextdotjs', 'tailwindcss', 'prisma', 'laravel', 'nodedotjs',
  'mysql', 'supabase'
];

async function fetchIcon(name) {
  return new Promise((resolve, reject) => {
    https.get(`https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/${name}.svg`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<path\s+d="([^"]+)"/);
        if (match) {
          resolve(match[1]);
        } else {
          resolve('');
        }
      });
    }).on('error', reject);
  });
}

async function main() {
  const result = {};
  for (const name of icons) {
    result[name] = await fetchIcon(name);
  }
  fs.writeFileSync('icons.json', JSON.stringify(result, null, 2));
}
main();
