import type { Locale } from '../i18n/config';

/**
 * Headlines shared by a page and its share image (src/pages/og/), so the two
 * never drift apart. Service pages keep theirs in services.ts.
 */
export const PAGE_TITLES = {
  home: { es: 'Psicóloga en Barcelona y online', ca: 'Psicòloga a Barcelona i en línia' },
  therapy: { es: 'Terapia psicológica en Barcelona', ca: 'Teràpia psicològica a Barcelona' },
  couples: { es: 'Terapia de pareja online y en Barcelona', ca: 'Teràpia de parella en línia i a Barcelona' },
  about: { es: 'Hola, soy Maria', ca: 'Hola, soc Maria' },
  pricing: { es: 'Tarifas', ca: 'Tarifes' },
  contact: { es: '¿Hablamos?', ca: 'En parlem?' },
} satisfies Record<string, Record<Locale, string>>;

/** Subtitle of the home hero, also printed on every share image. */
export const HOME_SUBTITLE: Record<Locale, string> = {
  es: 'Te acompaño cuando algo pasa y cuando simplemente quieres mejorar algo.',
  ca: "T'acompanyo quan passa alguna cosa i quan simplement vols millorar alguna cosa.",
};
