import { createUploadthing, type FileRouter } from 'uploadthing/server';
import { createRouteHandler } from 'uploadthing/server';
import { UTApi } from 'uploadthing/server';

// Disable prerendering for this API route
export const prerender = false;

// Fake auth function - replace with real auth in production
const auth = (req: Request) => ({ id: 'fakeId' });

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
	// Define as many FileRoutes as you like, each with a unique routeSlug
	imageUploader: createUploadthing()({ image: { maxFileSize: '4MB', maxFileCount: 1 } })
		// Set permissions and file types for this FileRoute
		.middleware(async ({ req }) => {
			// This code runs on your server before upload
			const user = auth(req);

			// If you throw, the user will not be able to upload
			if (!user) throw new Error('Unauthorized');

			// Whatever is returned here is accessible in onUploadComplete as `metadata`
			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			// This code RUNS ON YOUR SERVER after upload
			console.log('Upload complete for userId:', metadata.userId);
			console.log('file url', file.url);

			// !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
			return { uploadedBy: metadata.userId };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

// Export routes for Next App Router
const handlers = createRouteHandler({
	router: ourFileRouter,
	config: {
		token: import.meta.env.UPLOADTHING_TOKEN,
	},
});

export { handlers as GET, handlers as POST };

// UTApi instance for server-side operations
export const utapi = new UTApi({
	token: import.meta.env.UPLOADTHING_TOKEN,
});
