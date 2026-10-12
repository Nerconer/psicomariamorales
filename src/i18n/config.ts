export const LOCALES = {
  es: { htmlLang: 'es', hreflang: 'es-ES', ogLocale: 'es_ES', label: 'Castellano', short: 'ES' },
  ca: { htmlLang: 'ca', hreflang: 'ca-ES', ogLocale: 'ca_ES', label: 'Català', short: 'CA' },
} as const;

export type Locale = keyof typeof LOCALES;

export const DEFAULT_LOCALE: Locale = 'es';

/** Locale of a path: anything under /ca/ is Catalan, the rest is Spanish. */
export function localeFromPath(pathname: string): Locale {
  return pathname === '/ca' || pathname.startsWith('/ca/') ? 'ca' : DEFAULT_LOCALE;
}
