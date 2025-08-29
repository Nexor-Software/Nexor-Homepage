import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';

export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();

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
