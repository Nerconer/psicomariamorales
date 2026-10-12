/**
 * Category pill on the blog: a neutral pill with a coloured dot.
 *
 * Each category has its own dot so the colour carries information and the
 * category is recognised at a glance, while the pill itself stays calm. The
 * text is always ink, so contrast does not depend on the dot colour.
 *
 * A new category only needs to be added here. If it is missing, the brand
 * fallback is used, so nothing breaks.
 */
const CATEGORY_DOT: Record<string, string> = {
  'Ansiedad y estrés': 'before:bg-cat-sky',
  'Relaciones y pareja': 'before:bg-cat-rose',
  'Autoestima y emociones': 'before:bg-cat-sage',
  'Trauma y duelo': 'before:bg-cat-stone',
  'Empezar terapia': 'before:bg-cat-lilac',
};

const CATEGORY_DOT_FALLBACK = 'before:bg-accent';

const PILL =
  'inline-flex items-center gap-2 self-start rounded-full border border-line bg-white px-3 py-1 text-sm font-semibold text-ink before:h-2 before:w-2 before:shrink-0 before:rounded-full';

export function categoryBadgeClass(tag: string): string {
  return `${PILL} ${CATEGORY_DOT[tag] ?? CATEGORY_DOT_FALLBACK}`;
}
