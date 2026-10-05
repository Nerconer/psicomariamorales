import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

// Marker left in a post where Maria's own text ends and unvalidated text
// begins. A post that still contains it must not go live.
const REVIEW_MARKER = 'PENDIENTE DE REVISIÓN';

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
