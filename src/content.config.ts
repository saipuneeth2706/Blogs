import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/blogs' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		readTime: z.number().int().min(1),
	}),
});

export const collections = { blog };
