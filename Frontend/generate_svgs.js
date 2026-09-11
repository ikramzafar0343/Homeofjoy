const fs = require('fs');

const partners = [
  { id: 'unicef', name: 'UNICEF', color: '#1CABE2' },
  { id: 'world-vision', name: 'World Vision', color: '#FF7500' },
  { id: 'compassion', name: 'Compassion', color: '#005A9C' },
  { id: 'local-churches', name: 'Local Churches', color: '#333333' },
  { id: 'red-crescent', name: 'Red Crescent', color: '#ED1B24' },
  { id: 'islamic-relief', name: 'Islamic Relief', color: '#00548F' },
  { id: 'education-for-all', name: 'Education for All', color: '#00A99D' },
  { id: 'global-hope', name: 'Global Hope', color: '#F37021' },
  { id: 'community-dev', name: 'Community Dev', color: '#0072CE' },
  { id: 'child-rights', name: 'Child Rights', color: '#62259D' }
];

partners.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="100%" height="100%">
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="${p.color}" text-anchor="middle" dominant-baseline="middle">${p.name}</text>
</svg>`;
  fs.writeFileSync(`c:/Users/HP/Desktop/HomeOfJoyWelfareFoundation/Frontend/public/images/partners/${p.id}.svg`, svg);
});
console.log('SVGs generated successfully.');
