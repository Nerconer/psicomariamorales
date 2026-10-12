/**
 * Color de la píldora de categoría en el blog.
 *
 * Cada categoría tiene su propio pastel para que el índice no sea una sucesión
 * de etiquetas idénticas y el color aporte información: se reconoce la
 * categoría de un vistazo. Todos los pares fondo/texto superan el contraste
 * AA (mínimo medido: 5,75:1).
 *
 * Al crear una categoría nueva basta con añadirla aquí. Si falta, se usa el
 * verde de marca, así que nunca se rompe nada.
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
