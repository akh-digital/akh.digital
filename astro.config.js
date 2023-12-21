import { defineConfig } from "astro/config";

/** @param {import('astro').AstroConfig} */
export default defineConfig({
	outDir: "./my-custom-build-directory",
	cacheDir: "./.cache",
});
