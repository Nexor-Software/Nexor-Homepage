const PUBLIC_ASSET_BASE = 'https://nexorstorage-public-yjtox.sevalla.storage/';

/**
 * Build the public R2 URL for a given asset filename.
 * Preserves nested paths while encoding individual segments for safety.
 */
export function getPublicAssetUrl(filename: string): string {
	const cleanFilename = filename.startsWith('/') ? filename.slice(1) : filename;
	const encodedPath = cleanFilename
		.split('/')
		.filter(Boolean)
		.map((part) => encodeURIComponent(part))
		.join('/');

	return `${PUBLIC_ASSET_BASE}${encodedPath}`;
}
