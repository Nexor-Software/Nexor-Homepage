import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import path from 'path';

// https://astro.build/config
export default defineConfig({
	output: 'static',
	i18n: {
		defaultLocale: 'de',
		locales: ['de', 'en'],
		routing: {
			prefixDefaultLocale: true,
		},
	},
	redirects: {
		'/': '/de',
		'/about': '/de/about',
		'/services': '/de/services',
		'/blog': '/de/blog',
		'/portfolio': '/de/portfolio',
		'/contact': '/de/contact',
		'/privacy-policy': '/de/privacy-policy',
		'/terms-of-service': '/de/terms-of-service',
	},
	integrations: [react(), mdx()],
	resolve: {
		alias: {
			'@': path.resolve(process.cwd(), './src'),
		},
	},
	image: {
		domains: ['oybnx5jyol.ufs.sh'],
	},
});
