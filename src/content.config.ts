import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tag: z.string(),
    // Drafts are kept in the repo but never built: no page, no listing, no sitemap.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
