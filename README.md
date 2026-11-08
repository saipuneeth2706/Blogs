# The Blog

A Bauhaus-styled blog built with [Astro](https://astro.build), Tailwind CSS v4 and Lucide icons. Off-white ground, black 4px seams, bold primary planes — red, blue, yellow — with hard offset shadows.

## Features

- **Home page** — searchable, sortable post grid:
  - Live search over title, description and tags, with a result count and empty state
  - Sort by newest / oldest (publish date) or shortest / longest (read time)
  - One featured post pinned as the full-width anchor row (spans all 3 columns of the grid)
  - Uniform card heights via title/description line-clamping
- **Reading pages** at `/posts/<slug>/`:
  - Three-column layout: article spans columns 1–2, related-post sidebar sticky in column 3
  - Markdown rendered from the content collection with hand-rolled `.prose-bauhaus` typography
  - Tag-based related posts: shared-tag count first, recency as tiebreak, then most-recent fallback — capped at 4
- **Back-to-top button** — slides in from the right edge after scrolling ~75% of a viewport; respects `prefers-reduced-motion`
- **Logo mark** — black-outlined red triangle, blue square and yellow circle; outlines invert to white on the black footer
- **Accessibility** — visible focus states, keyboard-friendly controls, reduced-motion support, LTR left-aligned text throughout

## Getting started

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # production build to ./dist/
npm run preview  # preview the production build
```

## Project structure

```text
/
├── public/
│   └── fonts/                  # Self-hosted Google Sans (variable, 400–700 + italics)
├── src/
│   ├── blogs/                  # Blog posts — plain .md files with frontmatter
│   ├── components/
│   │   ├── Header.astro        # Logo + site nav
│   │   ├── Footer.astro        # About footer with inverted logo
│   │   ├── BlogCard.astro      # Grid card (also used for the featured banner)
│   │   └── BackToTop.astro     # Floating slide-in back-to-top button
│   ├── lib/posts.ts            # SITE name/tagline, date formatting helpers
│   ├── pages/
│   │   ├── index.astro         # Home: search band + featured anchor + grid
│   │   └── posts/[slug].astro  # Reading page + related-post logic
│   ├── styles/global.css       # Bauhaus tokens, font-face, prose styles
│   └── content.config.ts       # Zod schema for post frontmatter
├── astro.config.mjs            # astro-icon (lucide) + Tailwind vite plugin
└── package.json
```

## Writing a post

Add a Markdown file to `src/blogs/`:

```markdown
---
title: How I Built This
description: One-sentence summary used in cards, meta and search.
pubDate: 2026-03-01
heroImage: https://picsum.photos/seed/anything/1200/800
tags: [Process, Notes]
featured: false        # at most one post should be featured
readTime: 2            # minutes, ~200 words per minute
---

Your content here. Rendered as-is on `/posts/<file-name-without-extension>/`.
```

Only `featured` is templated into the layout; the frontmatter fields are validated by `src/content.config.ts`. Edit body content directly in the `.md` files — the UI reads whatever is there.

## Design system quick reference

| Token | Value | Use |
| :---- | :---- | :-- |
| `bg-ground` | `#f5f4ee` off-white | Page background |
| `border-ink` | `#000000` | 4px seams, outline shapes |
| `bg-accent` | `#ff0000` red | Primary accents, search icon block |
| `bg-field` | `#0000ff` blue | Sort select, triangle logo |
| `bg-support` | `#ffff00` yellow | Featured panel, circle logo |
| `--font-display` | Google Sans | Everything (self-hosted in `public/fonts/`) |

Icons come from [astro-icon](https://github.com/natemoo-re/astro-icon) with the Lucide set, inlined at build time with 2.5px strokes (`svg.astro-icon` rule in `global.css`).
