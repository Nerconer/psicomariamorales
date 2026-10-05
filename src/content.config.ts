import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Shorter title for search results when the H1 is long.
    seoTitle: z.string().max(60).optional(),
    // Page the post leads to at the end: a service slug, or a page such as
    // terapia-de-pareja.
    service: z.string().optional(),
    tag: z.string(),
    // Drafts are kept in the repo but never built: no page, no listing, no sitemap.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
