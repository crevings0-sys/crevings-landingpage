import fs from 'fs';

const filePath = 'src/App.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Theme replacements
const replacements: Record<string, string> = {
  'bg-black': 'bg-white',
  'bg-black/70': 'bg-white/70',
  'bg-black/80': 'bg-white/80',
  'bg-black/60': 'bg-white/60',
  'text-white': 'text-gray-900',
  'text-gray-400': 'text-gray-600',
  'text-gray-300': 'text-gray-700',
  'text-gray-500': 'text-gray-500',
  'text-gray-600': 'text-gray-400',
  'bg-white/5': 'bg-gray-50',
  'bg-white/10': 'bg-gray-100',
  'bg-white/20': 'bg-gray-200',
  'border-white/10': 'border-gray-200',
  'border-white/20': 'border-gray-300',
  'shadow-white/20': 'shadow-black/5',
  'shadow-black/20': 'shadow-gray-200',
  'from-black': 'from-white',
  'to-black': 'to-white',
  'from-blue-400': 'from-blue-600',
  'to-blue-200': 'to-blue-400',
  'text-blue-400': 'text-blue-600',
  'text-blue-200': 'text-blue-800',
  'bg-blue-900/20': 'bg-blue-50',
  'selection:bg-blue-900': 'selection:bg-blue-100',
  'selection:text-blue-100': 'selection:text-blue-900',
  'hover:bg-white/10': 'hover:bg-gray-100',
  'hover:bg-white/5': 'hover:bg-gray-50',
  'hover:text-white': 'hover:text-gray-900',
  'text-white/80': 'text-gray-700',
  'text-white/60': 'text-gray-500',
  'bg-white': 'bg-black', // wait, if I replace bg-black with bg-white, and then bg-white with bg-black, it will conflict.
};

// We need to be careful with the order of replacements and word boundaries.
// Let's use a more robust way.

const replaceMap = [
  { from: /\bbg-black\/70\b/g, to: 'bg-white/70' },
  { from: /\bbg-black\/80\b/g, to: 'bg-white/80' },
  { from: /\bbg-black\/60\b/g, to: 'bg-white/60' },
  { from: /\bbg-black\b/g, to: 'bg-white' },
  { from: /\btext-white\b/g, to: 'text-gray-900' },
  { from: /\btext-white\/80\b/g, to: 'text-gray-700' },
  { from: /\btext-white\/60\b/g, to: 'text-gray-500' },
  { from: /\btext-gray-400\b/g, to: 'text-gray-600' },
  { from: /\btext-gray-300\b/g, to: 'text-gray-700' },
  { from: /\bbg-white\/5\b/g, to: 'bg-gray-50' },
  { from: /\bbg-white\/10\b/g, to: 'bg-gray-100' },
  { from: /\bbg-white\/20\b/g, to: 'bg-gray-200' },
  { from: /\bborder-white\/10\b/g, to: 'border-gray-200' },
  { from: /\bborder-white\/20\b/g, to: 'border-gray-300' },
  { from: /\bshadow-white\/20\b/g, to: 'shadow-black/5' },
  { from: /\bshadow-black\/20\b/g, to: 'shadow-gray-200' },
  { from: /\bfrom-black\b/g, to: 'from-white' },
  { from: /\bto-black\b/g, to: 'to-white' },
  { from: /\bfrom-blue-400\b/g, to: 'from-blue-600' },
  { from: /\bto-blue-200\b/g, to: 'to-blue-400' },
  { from: /\btext-blue-400\b/g, to: 'text-blue-600' },
  { from: /\btext-blue-200\b/g, to: 'text-blue-800' },
  { from: /\bbg-blue-900\/20\b/g, to: 'bg-blue-50' },
  { from: /\bselection:bg-blue-900\b/g, to: 'selection:bg-blue-100' },
  { from: /\bselection:text-blue-100\b/g, to: 'selection:text-blue-900' },
  { from: /\bhover:bg-white\/10\b/g, to: 'hover:bg-gray-100' },
  { from: /\bhover:bg-white\/5\b/g, to: 'hover:bg-gray-50' },
  { from: /\bhover:text-white\b/g, to: 'hover:text-gray-900' },
  { from: /\bbg-gray-900\b/g, to: 'bg-gray-100' },
  { from: /\bbg-gray-800\b/g, to: 'bg-gray-200' },
  { from: /\bbg-zinc-900\b/g, to: 'bg-zinc-100' },
  { from: /\bbg-zinc-800\b/g, to: 'bg-zinc-200' },
  { from: /\bbg-zinc-950\b/g, to: 'bg-zinc-50' },
  { from: /\btext-zinc-400\b/g, to: 'text-zinc-600' },
  { from: /\btext-zinc-300\b/g, to: 'text-zinc-700' },
  { from: /\bborder-zinc-800\b/g, to: 'border-zinc-200' },
  { from: /\bborder-zinc-700\b/g, to: 'border-zinc-300' },
  { from: /\btext-blue-500\b/g, to: 'text-blue-600' },
];

for (const { from, to } of replaceMap) {
  content = content.replace(from, to);
}

// Special case: "bg-white text-black" for buttons
content = content.replace(/bg-gray-900 text-white/g, 'bg-black text-white'); // keep primary buttons dark or make them blue? Let's make them black text-white
content = content.replace(/bg-white text-black/g, 'bg-black text-white');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Theme replaced successfully.');
