import { defineConfig, squooshImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { global } from "./src/lib/config";

console.log(global());

function unwrapImg() {
	return function (tree) {
		tree.children = tree.children.map((child) => {
			if (child.children[0].type !== "image") return child;
			return { ...child.children[0] };
		});
	};
}

/** @param {import('astro').AstroConfig} */
export default defineConfig({
	site: global().domain,
	outDir: "./dist",
	cacheDir: "./.cache",
	image: { service: squooshImageService() },
	markdown: { remarkPlugins: [unwrapImg] },
	integrations: [
		sitemap({
			canonicalURL: global().domain,
		}),
	],
});
