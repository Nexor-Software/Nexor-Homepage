# Nexor Software Homepage - AI Agent Instructions

## Project Overview

This is an Astro-based corporate landing page for Nexor Software with internationalization (German/English), blog functionality, and modern React components. Built with performance and accessibility in mind.

## Architecture & Tech Stack

- **Framework**: Astro 5.x with server-side rendering (`output: 'server'`) and static site generation
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v4 with custom theme system and CSS variables
- **UI Components**: shadcn/ui built on Radix UI primitives with `class-variance-authority`
- **Content**: MDX for blog posts with content collections and Zod validation
- **Internationalization**: Built-in Astro i18n with German as default locale (`'de'`)
- **Analytics**: PostHog with cookieless mode and lazy loading
- **File Uploads**: UploadThing integration with URL mapping system
- **State Management**: TanStack Query with optimized caching (5min stale, 10min GC)
- **Package Manager**: Bun
- **Build Tool**: Vite (via Astro) with Netlify adapter
- **Deployment**: Netlify with manual code splitting and performance optimizations

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
├── lib/                 # Shared utilities (utils.ts with cn() function)
├── utils/               # Specialized utilities (uploadthing.ts)
├── hooks/               # Custom React hooks
└── actions/             # Server actions (index.ts)
```

## Critical Patterns & Conventions

### 1. Internationalization (i18n)

- **Default locale**: German (`'de'`)
- **Routing**: Prefix-based (`/de/page`, `/en/page`)
- **Translation pattern**: Define objects with `en`/`de` keys in components
- **Locale detection**: Use `Astro.currentLocale` in `.astro` files, `currentLocale` prop in React components
- **URL generation**: Complex helper functions for localized paths (see `Header.tsx`)
- **Automatic redirects**: Root paths redirect to default locale (`/about` → `/de/about`)

**Example translation object:**

```tsx
const translations = {
	en: { title: 'Home', services: 'Services' },
	de: { title: 'Startseite', services: 'Dienstleistungen' },
};
const t = translations[currentLocale];
```

### 2. Component Architecture

- **UI Components**: Use shadcn/ui from `src/components/ui/` with `cva` for variants
- **Path Aliases**: Import with `@/` prefix (maps to `src/`)
- **Client Directives**: Use `client:idle` for interactive components (lazy loading)
- **Provider Pattern**: All providers wrapped in `ProvidersIsland.tsx` with lazy PostHog loading
- **State Management**: TanStack Query with 5min stale time, 10min GC time
- **Performance**: Lazy load heavy components, use `Suspense` for async boundaries

### 3. Content Management

- **Schema Validation**: Define collections in `src/content.config.mjs` with Zod schemas
- **Blog Structure**: Separate folders for each locale (`src/content/blog/de/`, `src/content/blog/en/`)
- **Frontmatter**: Required fields: `title`, `description`, `pubDate` (validated with Zod)
- **MDX Components**: Can import React components from `src/components/`

### 4. Styling System

- **Tailwind v4**: Uses `@import 'tailwindcss'` and `@theme` directive
- **Custom Variables**: Defined in `src/index.css` with HSL color system
- **Design Tokens**: CSS variables for colors, fonts, spacing, animations
- **Typography**: Oswald for headings, Inter for body text
- **Dark Mode**: Implemented with CSS variables and `.dark` class
- **Utility Function**: Use `cn()` from `@/lib/utils` for conditional classes
- **8pt Spacing System**: Custom spacing utilities (`.space-8pt`, `.space-16pt`, etc.)

### 5. File Uploads & Assets

- **Service**: UploadThing with pre-configured URLs in `src/utils/uploadthing.ts`
- **URL Mapping**: Local filenames mapped to UploadThing URLs in `UPLOADTHING_URLS` object
- **Usage**: Import `getUploadThingUrl()` to resolve local filenames to UploadThing URLs
- **Example**: `getUploadThingUrl('nexor-logo.svg')` returns full UploadThing URL
- **Performance**: Preconnect to `https://oybnx5jyol.ufs.sh` in Layout.astro

### 6. Performance Optimizations

- **Code Splitting**: Manual rollup chunks for Radix UI, animations, analytics
- **Font Loading**: Non-blocking with preload and font-display swap
- **Image Optimization**: UploadThing URLs with automatic optimization
- **Analytics Delay**: PostHog loads 2 seconds after page load
- **Build Optimization**: Terser minification with console/debugger removal
- **Bundle Analysis**: Source maps disabled in production

## Developer Workflows

### Development Server

```bash
bun run dev  # Starts dev server with hot reload
```

### Build & Deploy

```bash
bun run build    # Static site generation with Netlify adapter
bun run preview  # Local preview of production build
```

### Code Quality

```bash
bun run lint     # ESLint with TypeScript rules (relaxed for development)
```

### Netlify Deployment

- Automatic deployments from main branch
- Server-side rendering with Netlify functions
- Environment variables configured in Netlify dashboard
- Build command: `bun run build`
- Publish directory: `dist`

## Common Tasks & Patterns

### Adding a New Page

1. Create `.astro` files in both `src/pages/de/` and `src/pages/en/`
2. Use `Layout.astro` with `currentLocale` prop
3. Add translations object for page-specific text
4. Update navigation in `Header.tsx` if needed
5. Add redirects in `astro.config.mjs` if root path should redirect

### Creating UI Components

1. Use shadcn/ui components from `src/components/ui/`
2. Follow the `cva` pattern for component variants
3. Use `cn()` utility for conditional class merging
4. Export with TypeScript interfaces
5. Use `client:idle` directive for interactivity

### Adding Blog Content

1. Create `.mdx` files in appropriate locale folder (`src/content/blog/de/` or `src/content/blog/en/`)
2. Follow frontmatter schema: `title`, `description`, `pubDate` (and optional `author`, `tags`, `image`)
3. Use components from `src/components/` in MDX
4. Images via UploadThing URLs using `getUploadThingUrl()` helper

### Internationalization Updates

1. Add new translation keys to component `translations` objects
2. Update both `en` and `de` variants
3. Test locale switching functionality
4. Update redirects in `astro.config.mjs` if needed

### Adding New Dependencies

1. Use `bun add` for new packages
2. Update manual chunks in `astro.config.mjs` vite config if needed
3. Add to appropriate chunk group (UI, animations, analytics, etc.)

## Integration Points

### Analytics (PostHog)

- Configured in `ProvidersIsland.tsx` with lazy loading
- Cookieless mode for privacy compliance
- EU-hosted instance (`https://eu.i.posthog.com`)
- API key configured in environment variables

### File Storage (UploadThing)

- URLs mapped in `src/utils/uploadthing.ts`
- Use `getUploadThingUrl()` helper for resolution
- Supports images and documents
- Preconnect configured in Layout.astro

### SEO & Performance

- Automatic sitemap generation with locale support
- Canonical URLs and language alternates in Layout.astro
- Structured data (JSON-LD) for organization schema
- Optimized fonts with preconnect and preload
- Critical LCP image preloaded

## Gotchas & Best Practices

### Astro-Specific

- Use `.astro` for static content, `.tsx` for interactive components
- `client:idle` only when necessary for interactivity (prefer lazy loading)
- Server-side rendering by default with `output: 'server'`
- Use `Astro.currentLocale` for locale detection in `.astro` files

### React Integration

- All React components must be in `.tsx` files
- Use Astro's component syntax for server components
- Props passed from Astro to React work seamlessly
- State management with TanStack Query for server state

### TypeScript

- Strict mode enabled but some rules relaxed (`no-explicit-any`, etc.)
- Use interfaces for component props
- Path aliases work in TypeScript without additional config
- ESLint configured with TypeScript rules

### Styling

- Prefer Tailwind utilities over custom CSS
- Use CSS variables defined in `src/index.css`
- Responsive design with Tailwind breakpoints
- Custom animations defined in `@theme` directive
- 8pt spacing system for consistent vertical rhythm

### Performance

- Manual code splitting is critical for bundle size
- Lazy load analytics and heavy components
- Use UploadThing for optimized images
- Preconnect to external domains
- Minimize console logs in production (removed by Terser)

### Internationalization

- Always test both German and English locales
- Use the `getLocalizedPath()` helper for URL generation
- Update redirects when adding new pages
- German is the primary locale - prioritize German content

Remember: This is a German-first business site with high performance requirements. Always consider both locales and bundle size when making changes.

### Key Configuration Files

- `astro.config.mjs`: i18n setup, Netlify adapter, manual code splitting, path aliases
- `eslint.config.js`: TypeScript + React rules (relaxed for development)
- `postcss.config.js`: Tailwind CSS v4 setup
- `src/index.css`: Theme variables, design tokens, custom animations
- `src/content.config.mjs`: Content collection schemas with Zod validation
- `src/utils/uploadthing.ts`: File upload URL mapping system
- `src/lib/utils.ts`: `cn()` utility for class merging
- `src/components/ProvidersIsland.tsx`: Provider setup with lazy loading

## Common Tasks & Patterns

### Adding a New Page

1. Create `.astro` files in both `src/pages/de/` and `src/pages/en/`
2. Use `Layout.astro` with `currentLocale` prop
3. Add translations object for page-specific text
4. Update navigation in `Header.tsx` if needed
5. Add redirects in `astro.config.mjs` if root path should redirect

### Creating UI Components

1. Use shadcn/ui components from `src/components/ui/`
2. Follow the `cva` pattern for component variants
3. Use `cn()` utility for conditional class merging
4. Export with TypeScript interfaces
5. Use `client:idle` directive for interactivity

### Adding Blog Content

1. Create `.mdx` files in appropriate locale folder (`src/content/blog/de/` or `src/content/blog/en/`)
2. Follow frontmatter schema: `title`, `description`, `pubDate` (and optional `author`, `tags`, `image`)
3. Use components from `src/components/` in MDX
4. Images via UploadThing URLs using `getUploadThingUrl()` helper

### Internationalization Updates

1. Add new translation keys to component `translations` objects
2. Update both `en` and `de` variants
3. Test locale switching functionality
4. Update redirects in `astro.config.mjs` if needed

### Adding New Dependencies

1. Use `bun add` for new packages
2. Update manual chunks in `astro.config.mjs` vite config if needed
3. Add to appropriate chunk group (UI, animations, analytics, etc.)

## Integration Points

### Analytics (PostHog)

- Configured in `ProvidersIsland.tsx` with lazy loading
- Cookieless mode for privacy compliance
- EU-hosted instance (`https://eu.i.posthog.com`)
- API key configured in environment variables

### File Storage (UploadThing)

- URLs mapped in `src/utils/uploadthing.ts`
- Use `getUploadThingUrl()` helper for resolution
- Supports images and documents
- Preconnect configured in Layout.astro

### SEO & Performance

- Automatic sitemap generation with locale support
- Canonical URLs and language alternates in Layout.astro
- Structured data (JSON-LD) for organization schema
- Optimized fonts with preconnect and preload
- Critical LCP image preloaded

## Gotchas & Best Practices

### Astro-Specific

- Use `.astro` for static content, `.tsx` for interactive components
- `client:idle` only when necessary for interactivity (prefer lazy loading)
- Server-side rendering by default with `output: 'server'`
- Use `Astro.currentLocale` for locale detection in `.astro` files

### React Integration

- All React components must be in `.tsx` files
- Use Astro's component syntax for server components
- Props passed from Astro to React work seamlessly
- State management with TanStack Query for server state

### TypeScript

- Strict mode enabled but some rules relaxed (`no-explicit-any`, etc.)
- Use interfaces for component props
- Path aliases work in TypeScript without additional config
- ESLint configured with TypeScript rules

### Styling

- Prefer Tailwind utilities over custom CSS
- Use CSS variables defined in `src/index.css`
- Responsive design with Tailwind breakpoints
- Custom animations defined in `@theme` directive
- 8pt spacing system for consistent vertical rhythm

### Performance

- Manual code splitting is critical for bundle size
- Lazy load analytics and heavy components
- Use UploadThing for optimized images
- Preconnect to external domains
- Minimize console logs in production (removed by Terser)

### Internationalization

- Always test both German and English locales
- Use the `getLocalizedPath()` helper for URL generation
- Update redirects when adding new pages
- German is the primary locale - prioritize German content

Remember: This is a German-first business site with high performance requirements. Always consider both locales and bundle size when making changes.
