import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      date: z.date(),
      img: z.string().optional(),
      excerpt: z.string().optional(),
    }),
  }),
};
