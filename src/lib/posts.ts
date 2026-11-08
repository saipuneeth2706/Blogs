import { getCollection } from 'astro:content';

export const SITE = {
	name: 'Blogs',
	tagline: 'Bold ideas, readable fast.',
	description:
		'The Blog — a Bauhaus-flavored home for essays, notes, guides and ideas.',
};

export type BlogEntry = Awaited<ReturnType<typeof getCollection>>[number];

export function formatDate(date: Date) {
	return new Intl.DateTimeFormat('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	}).format(date);
}
