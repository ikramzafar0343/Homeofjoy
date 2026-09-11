const fs = require('fs');
const https = require('https');

const logos = {
  unicef: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Logo_of_UNICEF.svg',
  world_vision: 'https://upload.wikimedia.org/wikipedia/commons/d/df/World_Vision_International_logo.svg',
  compassion: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Compassion_International_logo.svg/512px-Compassion_International_logo.svg.png',
  islamic_relief: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Islamic_Relief_Worldwide_Logo.svg'
};

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302 || res.statusCode === 307 || res.statusCode === 308) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Status: ' + res.statusCode));
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => { file.close(resolve); });
    }).on('error', reject);
  });
};

Promise.all(Object.entries(logos).map(([key, url]) => {
  const ext = url.endsWith('.svg') ? 'svg' : 'png';
  return download(url, `c:/Users/HP/Desktop/HomeOfJoyWelfareFoundation/Frontend/public/images/partners/${key}.${ext}`)
    .then(() => console.log('Downloaded', key))
    .catch(e => console.error('Failed', key, e.message));
}));
