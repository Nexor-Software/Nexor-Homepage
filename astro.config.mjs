import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import path from 'path';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	site: 'https://nexor-software.de', // Update this with your actual domain
	i18n: {
		defaultLocale: 'de',
		locales: ['de', 'en'],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	redirects: {
		'/about': '/de/about',
		'/services': '/de/services',
		'/blog': '/de/blog',
		'/portfolio': '/de/portfolio',
		'/contact': '/de/contact',
		'/privacy-policy': '/de/privacy-policy',
		'/terms-of-service': '/de/terms-of-service',
	},
	integrations: [
		react(),
		mdx(),
		sitemap({
			i18n: {
				defaultLocale: 'de',
				locales: {
					de: 'de-DE',
					en: 'en-US',
				},
			},
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(process.cwd(), './src'),
		},
	},
	image: {
		domains: ['oybnx5jyol.ufs.sh'],
	},
	vite: {
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						// UI component libraries
						'radix-ui-core': [
							'@radix-ui/react-dialog',
							'@radix-ui/react-tooltip',
							'@radix-ui/react-toast',
							'@radix-ui/react-dropdown-menu',
							'@radix-ui/react-popover',
						],
						'radix-ui-forms': [
							'@radix-ui/react-checkbox',
							'@radix-ui/react-radio-group',
							'@radix-ui/react-select',
							'@radix-ui/react-slider',
							'@radix-ui/react-switch',
						],
						'radix-ui-navigation': [
							'@radix-ui/react-navigation-menu',
							'@radix-ui/react-tabs',
							'@radix-ui/react-accordion',
						],
						'radix-ui-layout': [
							'@radix-ui/react-collapsible',
							'@radix-ui/react-scroll-area',
							'@radix-ui/react-separator',
						],
						// Animation libraries
						'animation-motion': ['motion'],
						'animation-gsap': ['gsap'],
						// WebGL
						'webgl-ogl': ['ogl'],
						// Analytics and state management
						'analytics-posthog': ['@posthog/react'],
						'state-management': ['@tanstack/react-query'],
						// Utilities
						'utils-lucide': ['lucide-react'],
						'utils-uploadthing': ['uploadthing', '@uploadthing/react'],
					},
				},
				treeshake: {
					moduleSideEffects: false,
					propertyReadSideEffects: false,
					tryCatchDeoptimization: false,
				},
			},
			minify: 'terser',
			terserOptions: {
				compress: {
					drop_console: true,
					drop_debugger: true,
					pure_funcs: ['console.log', 'console.info', 'console.debug'],
				},
			},
		},
	},
});
