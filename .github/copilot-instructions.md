# Nexor Software Homepage - AI Agent Instructions

## Project Overview

This is an Astro-based corporate landing page for Nexor Software with internationalization (German/English), blog functionality, and modern React components. Built with performance and accessibility in mind.

## Architecture & Tech Stack

- **Framework**: Astro 5.x with static site generation
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 with custom theme system
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Content**: MDX for blog posts with content collections
- **Internationalization**: Built-in Astro i18n with German as default locale
- **Analytics**: PostHog with cookieless mode
- **File Uploads**: UploadThing integration
- **Package Manager**: Bun
- **Build Tool**: Vite (via Astro)

## Key Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components (button, dialog, etc.)
│   └── *.tsx            # Page-specific components
├── layouts/             # Astro layouts (Layout.astro)
├── pages/               # Route-based pages (de/, en/ folders)
├── content/             # MDX content collections
│   └── blog/            # Blog posts (de/, en/ subfolders)
├── lib/                 # Shared utilities (utils.ts)
├── utils/               # Specialized utilities (uploadthing.ts)
└── hooks/               # Custom React hooks
```

## Critical Patterns & Conventions

### 1. Internationalization (i18n)

- **Default locale**: German (`'de'`)
- **Routing**: Prefix-based (`/de/page`, `/en/page`)
- **Translation pattern**: Define objects with `en`/`de` keys
- **Locale detection**: Use `Astro.currentLocale` in `.astro` files, `currentLocale` prop in React components
- **Example**:

```tsx
const translations = {
	en: { title: 'Home' },
	de: { title: 'Startseite' },
};
const t = translations[currentLocale];
```

### 2. Component Architecture

- **UI Components**: Use shadcn/ui from `src/components/ui/` with `class-variance-authority` for variants
- **Path Aliases**: Import with `@/` prefix (maps to `src/`)
- **Client Directives**: Use `client:load` for interactive components
- **Provider Pattern**: All providers wrapped in `ProvidersIsland.tsx`

### 3. Content Management

- **Schema Validation**: Define collections in `src/content.config.mjs` with Zod schemas
- **Blog Structure**: Separate folders for each locale (`src/content/blog/de/`, `src/content/blog/en/`)
- **Frontmatter**: Required fields: `title`, `description`, `pubDate`

### 4. Styling System

- **Tailwind v4**: Uses `@import 'tailwindcss'` and `@theme` directive
- **Custom Variables**: Defined in `src/index.css` for colors, fonts, animations
- **Utility Function**: Use `cn()` from `@/lib/utils` for conditional classes
- **Fonts**: Oswald for headings, Inter for body text

### 5. File Uploads

- **Service**: UploadThing with pre-configured URLs in `src/utils/uploadthing.ts`
- **Usage**: Import `getUploadThingUrl()` to resolve local filenames to UploadThing URLs
- **Example**: `getUploadThingUrl('nexor-logo-large.png')`

## Developer Workflows

### Development Server

```bash
bun run dev  # Starts dev server with hot reload
```

### Build & Deploy

```bash
bun run build    # Static site generation
bun run preview  # Local preview of production build
```

### Code Quality

```bash
bun run lint     # ESLint with TypeScript rules
```

### Key Configuration Files

- `astro.config.mjs`: i18n setup, integrations, path aliases
- `eslint.config.js`: TypeScript + React rules (relaxed for development)
- `postcss.config.js`: Tailwind CSS v4 setup
- `src/index.css`: Theme variables and Tailwind imports
- `src/content.config.mjs`: Content collection schemas

## Common Tasks & Patterns

### Adding a New Page

1. Create `.astro` files in both `src/pages/de/` and `src/pages/en/`
2. Use `Layout.astro` with `currentLocale` prop
3. Add translations object for page-specific text
4. Update navigation in `Header.tsx` if needed

### Creating UI Components

1. Use shadcn/ui components from `src/components/ui/`
2. Follow the `cva` pattern for variants
3. Use `cn()` utility for class merging
4. Export with TypeScript interfaces

### Adding Blog Content

1. Create `.mdx` files in appropriate locale folder
2. Follow frontmatter schema from `src/content.config.mjs`
3. Use components from `src/components/` in MDX
4. Images via UploadThing URLs

### Internationalization Updates

1. Add new translation keys to component `translations` objects
2. Update both `en` and `de` variants
3. Test locale switching functionality

## Integration Points

### Analytics (PostHog)

- Configured in `ProvidersIsland.tsx`
- Cookieless mode for privacy compliance
- EU-hosted instance

### File Storage (UploadThing)

- URLs mapped in `src/utils/uploadthing.ts`
- Use `getUploadThingUrl()` helper for resolution
- Supports images and documents

### SEO & Performance

- Automatic sitemap generation
- Canonical URLs and language alternates
- Structured data (JSON-LD) in Layout.astro
- Optimized fonts and assets

## Gotchas & Best Practices

### Astro-Specific

- Use `.astro` for static content, `.tsx` for interactive components
- `client:load` only when necessary for interactivity
- Server-side rendering by default

### React Integration

- All React components must be in `.tsx` files
- Use Astro's component syntax for server components
- Props passed from Astro to React work seamlessly

### TypeScript

- Strict mode enabled but some rules relaxed (`no-explicit-any`, etc.)
- Use interfaces for component props
- Path aliases work in TypeScript without additional config

### Styling

- Prefer Tailwind utilities over custom CSS
- Use CSS variables defined in `src/index.css`
- Responsive design with Tailwind breakpoints

Remember: This is a German-first business site, so prioritize German content and ensure all new features work seamlessly in both locales.
