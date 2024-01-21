import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";

/** @param {import('astro').AstroConfig} */
export default defineConfig({
	outDir: "./dist",
	cacheDir: "./.cache",
	vite: {
		plugins: [yaml()],
	},
});
