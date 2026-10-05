import type { Locale } from './config';

/**
 * Every page that exists in more than one language, with its URL in each one.
 *
 * Translated pages may use their own slug, so equivalence cannot be derived
 * from the path. A page appears here once its translation is published, and
 * from then on it gets hreflang links, a language switcher entry and sitemap
 * alternates. Pages that only exist in Spanish do not need an entry.
 */
export const TRANSLATED_ROUTES: Array<Partial<Record<Locale, string>>> = [
  // { es: '/', ca: '/ca/' },
];

/** All language versions of the page at `pathname`, or an empty list. */
export function alternatesOf(pathname: string): Array<{ locale: Locale; path: string }> {
  const route = TRANSLATED_ROUTES.find((r) => Object.values(r).includes(pathname));
  if (!route) return [];
  return (Object.entries(route) as Array<[Locale, string]>).map(([locale, path]) => ({
    locale,
    path,
  }));
}
