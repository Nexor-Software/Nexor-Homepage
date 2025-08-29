import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';

import type { OurFileRouter } from '../pages/api/uploadthing';

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// Mapping of local filenames to UploadThing URLs
// These should match the files uploaded to your UploadThing account
export const UPLOADTHING_URLS: Record<string, string> = {
	'nexor-logo-large.png': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwy7MCKQ9mF8fnHEAdhYXjRW1Vrzbo6iOZBevJ4',
	'nexor-logo.svg': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyv8wut95J4FTnDMxg1hCet7Sb3IrzQHp0Aw9X',
	'Nexor-text.png': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyTadJCW9K0M1DSYUXjuR6ygsWkt9eovb3GqmA',
	'FullLogo-01.svg': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyMgoZEdaw12SrxvWhQoucZRUPJCFa9ntiN8X5',
	'pt1duo software.png': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwy6J3xSvBs2JqRMCc5ygajmFu0Oki1DYWUbdoE',
	'Armen_Chulyakov.png': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwye3u8obkOh3Y6H9Zi8vfcJNALEun0KRklg4j5',
	'placeholder.svg': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyq226yBbwx8aVno9PmLBqKClSF6X1RM0OAbQh',
};

// Utility to get UploadThing URL for a filename
export function getUploadThingUrl(filename: string): string {
	// Remove leading slash if present
	const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
	return UPLOADTHING_URLS[cleanFilename] || filename; // Fallback to original path
}

// Utility to get UploadThing URLs dynamically (for future use)
export async function getUploadThingUrls() {
	const { utapi } = await import('../pages/api/uploadthing');

	try {
		const files = await utapi.listFiles();
		const urlMap: Record<string, string> = {};

		// Extract appId from token
		const appId = 'oybnx5jyol';

		files.files.forEach((file: any) => {
			// Map filename to UploadThing URL
			urlMap[file.name] = `https://${appId}.ufs.sh/f/${file.key}`;
		});

		return urlMap;
	} catch (error) {
		console.error('Error fetching UploadThing files:', error);
		return {};
	}
}
