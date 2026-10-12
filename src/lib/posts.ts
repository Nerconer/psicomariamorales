import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Marker left in a post where Maria's own text ends and unvalidated text
// begins. A post that still contains it must not go live.
const REVIEW_MARKER = 'PENDIENTE DE REVISIÓN';

/** Slugs of the posts marked as drafts. */
export async function getDraftSlugs(): Promise<Set<string>> {
  const drafts = await getCollection('blog', ({ data }) => data.draft);
  return new Set(drafts.map((p) => p.id));
}

/**
 * Links from a post's HTML to draft posts are replaced by their text, so a
 * published page never points to a page that is not built. When the draft is
 * published, the link comes back on its own.
 */
export function unlinkDrafts(html: string, drafts: Set<string>): string {
  return html.replace(/<a\s[^>]*href="\/blog\/([^/"#]+)\/?"[^>]*>([\s\S]*?)<\/a>/g, (link, slug, text) =>
    drafts.has(slug) ? text : link
  );
}

/** Published posts, newest first. Drafts are left out everywhere. */
export async function getPublishedPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  for (const post of posts) {
    if (post.body?.includes(REVIEW_MARKER))
      throw new Error(
        `Post "${post.id}" still contains "${REVIEW_MARKER}". Validate it or set draft: true.`
      );
  }
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
