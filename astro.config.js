import { defineConfig, squooshImageService } from "astro/config";
import yaml from "@rollup/plugin-yaml";

/** @param {import('astro').AstroConfig} */
export default defineConfig({
	outDir: "./dist",
	cacheDir: "./.cache",
	image: {
		service: squooshImageService(),
	},
	vite: {
		plugins: [yaml()],
	},
});
