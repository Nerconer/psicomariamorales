/**
 * Colour of the category pill on the blog.
 *
 * Each category has its own pastel so the index is not a row of identical
 * labels and the colour carries information: the category is recognised at a
 * glance. Every background/text pair passes AA contrast (lowest measured:
 * 5.75:1).
 *
 * A new category only needs to be added here. If it is missing, the brand
 * fallback is used, so nothing breaks.
 */
const CATEGORY_BADGE: Record<string, string> = {
  'Ansiedad y estrés': 'border-badge-sky-line bg-badge-sky text-badge-sky-ink',
  'Relaciones y pareja': 'border-badge-coral-line bg-badge-coral text-badge-coral-ink',
  'Autoestima y emociones': 'border-badge-lilac-line bg-badge-lilac text-badge-lilac-ink',
  'Trauma y duelo': 'border-badge-sand-line bg-badge-sand text-badge-sand-ink',
  'Empezar terapia': 'border-badge-mint-line bg-badge-mint text-badge-mint-ink',
};

const CATEGORY_BADGE_FALLBACK = 'border-badge-mint-line bg-badge-mint text-badge-mint-ink';

export function categoryBadgeClass(tag: string): string {
  return CATEGORY_BADGE[tag] ?? CATEGORY_BADGE_FALLBACK;
}
