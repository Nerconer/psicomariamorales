// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { LOCALES } from './src/i18n/config.ts';
import { alternatesOf } from './src/i18n/routes.ts';

const SITE_URL = 'https://psicomariamorales.com';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  // Pages are built as folders (/sobre-mi/index.html) and Cloudflare serves
  // them with a trailing slash, so every internal link uses one too. Without
  // it each click costs a 307 redirect.
  trailingSlash: 'always',
  // The single stylesheet goes inside each page instead of in a separate file,
  // so the browser paints without waiting for one more request. GitHub Pages
  // only lets files be cached for 10 minutes, so a separate file saved little.
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca'],
    // Spanish lives at the root, Catalan under /ca/.
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Alternate language links for pages listed in src/i18n/routes.ts.
      serialize(item) {
        const path = new URL(item.url).pathname;
        const links = alternatesOf(path).map((a) => ({
          lang: LOCALES[a.locale].hreflang,
          url: new URL(a.path, SITE_URL).href,
        }));
        return links.length ? { ...item, links } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
