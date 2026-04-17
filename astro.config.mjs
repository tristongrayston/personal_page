import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages: set `site` to your published origin.
// Project site (e.g. https://username.github.io/personal_page/): set `base` to your repo name.
// User/org site (username.github.io repo): use `base: '/'` or omit `base`.
export default defineConfig({
  site: 'https://YOUR_USERNAME.github.io',
  base: '/personal_page',
  output: 'static',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
