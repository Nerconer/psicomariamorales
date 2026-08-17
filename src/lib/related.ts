import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;

/** Número de entradas que se muestran en el bloque "Seguir leyendo". */
export const RELATED_COUNT = 3;

/**
 * Calcula, para cada entrada, sus entradas relacionadas.
 *
 * Criterio:
 *  1. Primero se rellena con entradas de la MISMA categoría (`tag`).
 *  2. Si no hay suficientes, se completa con el resto del blog hasta llegar
 *     a RELATED_COUNT, de modo que el bloque siempre tenga el mismo aspecto.
 *
 * Dentro de cada nivel gana la entrada que MENOS enlaces ha recibido hasta ese
 * momento. Así se reparten los enlaces internos de forma equitativa y ninguna
 * entrada se queda huérfana. Los desempates posteriores (fecha y luego slug)
 * hacen que el resultado sea determinista: mismo contenido, misma salida.
 *
 * Mantenimiento: basta con definir el `tag` de cada entrada. No hay ninguna
 * lista de relaciones que actualizar a mano.
 */
export function buildRelatedMap(posts: Post[]): Map<string, Post[]> {
  const ordered = [...posts].sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf() || a.id.localeCompare(b.id)
  );

  const inbound = new Map<string, number>(ordered.map((p) => [p.id, 0]));
  const related = new Map<string, Post[]>();

  const rank = (a: Post, b: Post) =>
    (inbound.get(a.id) ?? 0) - (inbound.get(b.id) ?? 0) ||
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf() ||
    a.id.localeCompare(b.id);

  for (const post of ordered) {
    const picked: Post[] = [];

    const fillFrom = (pool: Post[]) => {
      while (picked.length < RELATED_COUNT) {
        const candidates = pool
          .filter((c) => c.id !== post.id && !picked.some((p) => p.id === c.id))
          .sort(rank);
        const next = candidates[0];
        if (!next) return;
        picked.push(next);
        inbound.set(next.id, (inbound.get(next.id) ?? 0) + 1);
      }
    };

    fillFrom(ordered.filter((c) => c.data.tag === post.data.tag));
    fillFrom(ordered);

    related.set(post.id, picked);
  }

  return related;
}
