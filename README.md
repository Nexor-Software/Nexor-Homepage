# Nexor Software — Corporate Landing Page

This repository contains the official corporate landing page. The site is built with Astro and powered by Bun, React components, Tailwind CSS and MDX for content. It is optimized for performance, accessibility and easy content updates.

## Features

- Fast, SEO-friendly, server-rendered site with Astro
- React components for interactive UI
- MDX-based content pages for easy editing
- Tailwind CSS for utility-first styling
- Built and run with Bun for speed
- Responsive layout, accessibility best practices, and optimized assets

## Tech stack

- Astro
- Bun
- React
- Tailwind CSS
- MDX
- (Optional) Any deployment platform that supports static sites or Node-compatible serverless functions

## Prerequisites

- Bun >= 1.x installed (https://bun.sh)
- Git

## Quickstart

Clone the repo and start the dev server:

```bash
git clone https://github.com/your-org/nexor-website.git
cd nexor-website
bun install
bun run dev
```

## Available commands

Use Bun to run scripts defined in package.json:

- Start local development server
```bash
bun run dev
```

- Build static site for production
```bash
bun run build
```

- Preview the production build locally
```bash
bun run preview
```

- Format code (if Prettier configured)
```bash
bun run format
```

- Run linting (if configured)
```bash
bun run lint
```

## Tailwind + MDX notes

- Tailwind is configured via `tailwind.config.*` and imported into your main CSS file.
- MDX files can import and use React components placed in `src/components`.
- For consistent styling, wrap MDX pages with a layout that includes Tailwind classes.


## License

```
MIT © Nexor Software
```
