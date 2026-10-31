import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// BASE_PATH is only needed for GitHub Pages project sites (e.g. "/portfolio/").
// Vercel, Netlify and username.github.io sites use the default "/".
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
});
