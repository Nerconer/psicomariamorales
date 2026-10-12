import type { CollectionEntry } from 'astro:content';

type Post = CollectionEntry<'blog'>;

/** Number of posts shown in the "Seguir leyendo" block. */
export const RELATED_COUNT = 3;

/**
 * Works out the related posts for each post.
 *
 * Rules:
 *  1. Fill first with posts from the SAME category (`tag`).
 *  2. If there are not enough, top up with the rest of the blog until
 *     RELATED_COUNT is reached, so the block always looks the same.
 *
 * Within each level, the post that has received the FEWEST links so far wins.
 * Internal links are spread evenly and no post is left orphaned. The later
 * tie-breakers (date, then slug) make the result deterministic: same content,
 * same output.
 *
 * Maintenance: each post only needs its `tag`. There is no list of relations
 * to keep up to date by hand.
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
