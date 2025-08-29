import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		author: z.string().optional(),
		tags: z.array(z.string()).optional(),
		image: z.string().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};
