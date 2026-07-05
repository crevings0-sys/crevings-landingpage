import fs from 'fs';
const content = fs.readFileSync('src/App.tsx', 'utf8');
const newContent = content.replace(/blue-/g, 'primary-');
fs.writeFileSync('src/App.tsx', newContent);
console.log('Replaced blue- with primary-');
