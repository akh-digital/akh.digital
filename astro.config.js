import { defineConfig, squooshImageService } from "astro/config";

/** @param {import('astro').AstroConfig} */
export default defineConfig({
	outDir: "./dist",
	cacheDir: "./.cache",
	image: {
		service: squooshImageService(),
	},
});
