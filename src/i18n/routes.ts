import type { Locale } from './config';

/**
 * Public URL of every page in each language. Catalan pages use their own
 * slugs, so equivalence cannot be derived from the path.
 *
 * A page with a `ca` entry exists in Catalan: it gets hreflang links, a
 * language switcher entry and sitemap alternates, and links built with
 * `pathFor` in Catalan pages point to it. Pages without one only exist in
 * Spanish and Catalan pages link to the Spanish version.
 */
export const ROUTES = {
  home: { es: '/', ca: '/ca/' },
  online: { es: '/terapia-online/', ca: '/ca/terapia-en-linia/' },
  therapy: { es: '/terapia-psicologica/', ca: '/ca/terapia-psicologica/' },
  anxiety: { es: '/psicologa-ansiedad-barcelona/', ca: '/ca/psicologa-ansietat-barcelona/' },
  emdr: { es: '/terapia-emdr-barcelona/', ca: '/ca/terapia-emdr-barcelona/' },
  stress: { es: '/terapia-estres-burnout/', ca: '/ca/terapia-estres-burnout/' },
  selfEsteem: { es: '/terapia-autoestima/', ca: '/ca/terapia-autoestima/' },
  grief: { es: '/terapia-duelo/', ca: '/ca/terapia-dol/' },
  growth: { es: '/crecimiento-personal/', ca: '/ca/creixement-personal/' },
  couples: { es: '/terapia-de-pareja/', ca: '/ca/terapia-de-parella/' },
  about: { es: '/sobre-mi/', ca: '/ca/sobre-mi/' },
  pricing: { es: '/tarifas/', ca: '/ca/tarifes/' },
  contact: { es: '/contacto/', ca: '/ca/contacte/' },
  panic: { es: '/ataques-de-panico/', ca: '/ca/atacs-de-panic/' },
  intrusive: { es: '/pensamientos-intrusivos-obsesiones/', ca: '/ca/pensaments-intrusius-obsessions/' },
  sadness: { es: '/terapia-tristeza-depresion/', ca: '/ca/terapia-tristesa-depressio/' },
  emotionRegulation: { es: '/regulacion-emocional/', ca: '/ca/regulacio-emocional/' },
  irritability: { es: '/irritabilidad/', ca: '/ca/irritabilitat/' },
  control: { es: '/necesidad-de-control/', ca: '/ca/necessitat-de-control/' },
  conflicts: { es: '/gestion-de-conflictos/', ca: '/ca/gestio-de-conflictes/' },
  dependency: { es: '/dependencia-emocional/', ca: '/ca/dependencia-emocional/' },
  attachment: { es: '/apego-y-limites/', ca: '/ca/aferrament-i-limits/' },
  family: { es: '/relaciones-familiares/', ca: '/ca/relacions-familiars/' },
  loneliness: { es: '/soledad/', ca: '/ca/solitud/' },
  avoidance: { es: '/evitacion-emocional/', ca: '/ca/evitacio-emocional/' },
  screens: { es: '/abuso-de-pantallas/', ca: '/ca/abus-de-pantalles/' },
  lifeCrisis: { es: '/crisis-vitales/', ca: '/ca/crisis-vitals/' },
  youth: { es: '/psicologa-adolescentes-jovenes/', ca: '/ca/psicologa-adolescents-joves/' },
  perinatal: { es: '/psicologia-perinatal/', ca: '/ca/psicologia-perinatal/' },
  dissociation: { es: '/disociacion/', ca: '/ca/dissociacio/' },
  eating: { es: '/trastornos-conducta-alimentaria/', ca: '/ca/trastorns-conducta-alimentaria/' },
  blog: { es: '/blog/' },
  companies: { es: '/empresas/' },
  schools: { es: '/centros-educativos/' },
  legal: { es: '/aviso-legal/' },
  privacy: { es: '/politica-privacidad/' },
  cookies: { es: '/politica-cookies/' },
} satisfies Record<string, Partial<Record<Locale, string>> & { es: string }>;

export type RouteKey = keyof typeof ROUTES;

/** URL of a page in a language, falling back to Spanish when not translated. */
export function pathFor(key: RouteKey, locale: Locale): string {
  const route: Partial<Record<Locale, string>> & { es: string } = ROUTES[key];
  return route[locale] ?? route.es;
}

/** All language versions of the page at `pathname`, or an empty list. */
export function alternatesOf(pathname: string): Array<{ locale: Locale; path: string }> {
  const route = Object.values(ROUTES).find((r) => Object.values(r).includes(pathname));
  if (!route || Object.keys(route).length < 2) return [];
  return (Object.entries(route) as Array<[Locale, string]>).map(([locale, path]) => ({ locale, path }));
}
