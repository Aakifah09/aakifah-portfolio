// Pastel swatches cycled across cards (dark mode): `bg` is the deep tinted card, `blob` its glow, `ink` the pastel accent text.
export const pastels = [
  { name: 'lavender', bg: '#1b1730', blob: '#5b47c2', ink: '#cbbcff' },
  { name: 'peach', bg: '#26181a', blob: '#b5583c', ink: '#ffc4ac' },
  { name: 'mint', bg: '#13221d', blob: '#25805c', ink: '#a3e6c8' },
  { name: 'sky', bg: '#141b2d', blob: '#3a5fb8', ink: '#b8ceff' },
  { name: 'butter', bg: '#231f12', blob: '#9c7d1c', ink: '#ffe08f' },
  { name: 'rose', bg: '#251524', blob: '#a63f78', ink: '#f8bcdd' },
];

export const pastel = (i) => pastels[i % pastels.length];
