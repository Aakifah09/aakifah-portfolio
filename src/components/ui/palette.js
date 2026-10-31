// Pastel swatches cycled across cards. `bg` fills the card, `blob` is the soft glow, `ink` is readable text on `bg`.
export const pastels = [
  { name: 'lavender', bg: '#efe9ff', blob: '#c9b8ff', ink: '#5b45c9' },
  { name: 'peach', bg: '#ffeee6', blob: '#ffc4ac', ink: '#b8502a' },
  { name: 'mint', bg: '#e6f6ee', blob: '#b4e6cf', ink: '#2c7a58' },
  { name: 'sky', bg: '#e8f0ff', blob: '#b8ceff', ink: '#3a60c4' },
  { name: 'butter', bg: '#fff6dc', blob: '#ffe08f', ink: '#8d6200' },
  { name: 'rose', bg: '#fdeaf4', blob: '#f8bcdd', ink: '#ad3775' },
];

export const pastel = (i) => pastels[i % pastels.length];
