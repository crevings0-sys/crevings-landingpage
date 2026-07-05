import fs from 'fs';

const filePath = 'src/App.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const replaceMap = [
  { from: /bg-white\/70/g, to: 'bg-[#050505]/70' },
  { from: /bg-white\/60/g, to: 'bg-[#050505]/60' },
  { from: /bg-white\/80/g, to: 'bg-[#050505]/80' },
  { from: /bg-white\/\[0\.02\]/g, to: 'bg-white/[0.02]' }, // Keep if already there
  { from: /bg-white/g, to: 'bg-[#050505]' },
  { from: /text-gray-900/g, to: 'text-white' },
  { from: /text-gray-600/g, to: 'text-gray-400' },
  { from: /text-gray-700/g, to: 'text-gray-300' },
  { from: /text-gray-500/g, to: 'text-gray-500' },
  { from: /border-gray-200/g, to: 'border-white/10' },
  { from: /border-gray-300/g, to: 'border-white/20' },
  { from: /bg-gray-50/g, to: 'bg-white/[0.02]' },
  { from: /bg-gray-100/g, to: 'bg-white/5' },
  { from: /hover:bg-gray-100/g, to: 'hover:bg-white/10' },
  { from: /hover:bg-gray-200/g, to: 'hover:bg-white/10' },
  { from: /hover:text-gray-900/g, to: 'hover:text-white' },
  { from: /shadow-gray-200/g, to: 'shadow-white/5' },
  { from: /bg-blue-50/g, to: 'bg-blue-900/20' },
  { from: /text-blue-800/g, to: 'text-blue-400' },
  { from: /from-white/g, to: 'from-[#050505]' },
  { from: /shadow-black\/5/g, to: 'shadow-black/20' },
  { from: /bg-gray-200/g, to: 'bg-white/10' },
];

for (const { from, to } of replaceMap) {
  content = content.replace(from, to);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Theme reverted to dark.');
