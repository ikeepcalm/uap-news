import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date(),
        author: z.string().default('Server Team'),
        featured: z.boolean().default(false),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    news: newsCollection,
};