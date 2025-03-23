import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import yaml from "@rollup/plugin-yaml";
import icon from "astro-icon";

/** @param {import('astro').AstroConfig} */
export default defineConfig({
	site: "https://akh.digital",
	outDir: "./dist",
	cacheDir: "./.cache",
	image: { service: passthroughImageService() },
	integrations: [
		sitemap({ canonicalURL: "https://akh.digital" }),
		icon({ iconDir: "./icons" }),
		partytown(),
	],
	vite: { plugins: [yaml()] },
});
