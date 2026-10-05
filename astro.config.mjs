// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://psicomariamorales.com',
  // Pages are built as folders (/sobre-mi/index.html) and Cloudflare serves
  // them with a trailing slash, so every internal link uses one too. Without
  // it each click costs a 307 redirect.
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
