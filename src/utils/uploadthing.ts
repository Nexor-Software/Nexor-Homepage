import { generateUploadButton, generateUploadDropzone } from '@uploadthing/react';

export const UploadButton = generateUploadButton();
export const UploadDropzone = generateUploadDropzone();

// Mapping of local filenames to UploadThing URLs
// These should match the files uploaded to your UploadThing account
export const UPLOADTHING_URLS: Record<string, string> = {
	'Nexor-logo-large-helle-Schrift.avif': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyzjH393fOsLQhVHiI0NT7km4ubKyvFM9Bfeol',
	'nexor-logo.svg': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyv8wut95J4FTnDMxg1hCet7Sb3IrzQHp0Aw9X',
	'Nexor-text.avif': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyvbrx4BQ5J4FTnDMxg1hCet7Sb3IrzQHp0Aw9',
	'FullLogo-01.svg': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyMgoZEdaw12SrxvWhQoucZRUPJCFa9ntiN8X5',
	'pt1duo software.png': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyNQtV9IWU7Pp51tuOiv9kwaZdJb3SLgeX6TjQ',
	'Armen_Chulyakov-min.png': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyUgfCzZGwaJ32OZYclv0HPDmAoWTguzqx9RpB',
	'placeholder.svg': 'https://oybnx5jyol.ufs.sh/f/AeQfLJScGDwyq226yBbwx8aVno9PmLBqKClSF6X1RM0OAbQh',
};

// Utility to get UploadThing URL for a filename
export function getUploadThingUrl(filename: string): string {
	// Remove leading slash if present
	const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
	return UPLOADTHING_URLS[cleanFilename] || filename; // Fallback to original path
}
