import type { Locale } from './config';

/**
 * Interface strings shared by the layout and the components (navigation,
 * buttons, footer). Page copy lives in the pages themselves.
 *
 * The Catalan strings need a native review before they go live.
 */
export const UI = {
  es: {
    'nav.home': 'Inicio',
    'nav.therapy': 'Terapia psicológica',
    'nav.couples': 'Terapia de pareja',
    'nav.about': 'Sobre mí',
    'nav.pricing': 'Tarifas',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'nav.open': 'Abrir menú',
    'nav.close': 'Cerrar menú',
    'nav.main': 'Navegación principal',
    'nav.mobile': 'Navegación móvil',
    'cta.book': 'Reservar cita',
    'cta.bookFirst': 'Reservar primera sesión',
    'cta.whatsapp': 'WhatsApp',
    'cta.whatsappLong': 'Escríbeme por WhatsApp',
    'cta.call': 'Llamar',
    'a11y.skip': 'Saltar al contenido',
    'a11y.newTab': '(se abre en otra pestaña)',
    'lang.switch': 'Idioma',
  },
  ca: {
    'nav.home': 'Inici',
    'nav.therapy': 'Teràpia psicològica',
    'nav.couples': 'Teràpia de parella',
    'nav.about': 'Sobre mi',
    'nav.pricing': 'Tarifes',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacte',
    'nav.open': 'Obrir el menú',
    'nav.close': 'Tancar el menú',
    'nav.main': 'Navegació principal',
    'nav.mobile': 'Navegació mòbil',
    'cta.book': 'Reservar cita',
    'cta.bookFirst': 'Reservar la primera sessió',
    'cta.whatsapp': 'WhatsApp',
    'cta.whatsappLong': 'Escriu-me per WhatsApp',
    'cta.call': 'Trucar',
    'a11y.skip': 'Anar al contingut',
    'a11y.newTab': "(s'obre en una altra pestanya)",
    'lang.switch': 'Idioma',
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof UI)['es'];

/** Translator bound to a locale. Falls back to Spanish if a key is missing. */
export function useTranslations(locale: Locale) {
  return (key: UIKey): string => UI[locale][key] ?? UI.es[key];
}
