import { z, defineCollection } from 'astro:content';
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        author: z.string(),
        pubDate: z.date(),
        description: z.string(),
        draft: z.boolean(),
    })
});
export const collections = {
    'posts': postsCollection,
};