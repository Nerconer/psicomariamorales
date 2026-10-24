import { PRICES, formatPrice } from '../consts';
import type { Locale } from '../i18n/config';
import type { RouteKey } from '../i18n/routes';
import { HOME_SUBTITLE, PAGE_TITLES } from './page-titles';
import { SERVICES } from './services';

/**
 * Pages with their own share image, built as /og/<locale>-<key>.jpg by
 * src/pages/og/[image].jpg.ts. Any other page uses the home image of its
 * language.
 */
export const OG_KEYS = [
  'home', 'online', 'therapy', 'anxiety', 'emdr', 'stress', 'selfEsteem', 'grief', 'growth', 'couples', 'about', 'pricing', 'contact',
] as const satisfies readonly RouteKey[];

export type OgKey = (typeof OG_KEYS)[number];

export interface OgText {
  title: string;
  subtitle: string;
  chips: string[];
}

/** Text of a share image, read from the same sources as the page. */
export function ogText(key: OgKey, locale: Locale): OgText {
  const service = SERVICES.find((s) => s.key === key);
  const minutes = PRICES.online.minutes;
  // "Tarifas" alone says little in a chat preview, so pricing gets a share headline.
  const pricing = locale === 'ca' ? `Tarifes clares, sessions de ${minutes} minuts` : `Tarifas claras, sesiones de ${minutes} minutos`;
  const title = service ? service[locale].title : key === 'pricing' ? pricing : PAGE_TITLES[key as keyof typeof PAGE_TITLES][locale];
  const online = formatPrice(PRICES.online.amount);
  const first = formatPrice(PRICES.firstSession.amount);
  const chips =
    locale === 'ca'
      ? [`En línia · ${online}`, `Primera sessió ${first}`, 'Català i castellà']
      : [`Online · ${online}`, `Primera sesión ${first}`, 'Castellano y català'];
  return { title, subtitle: HOME_SUBTITLE[locale], chips };
}
