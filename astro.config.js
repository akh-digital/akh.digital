import { defineConfig, squooshImageService } from "astro/config";

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
	outDir: "./dist",
	cacheDir: "./.cache",
	image: {
		service: squooshImageService(),
	},
	markdown: {
		remarkPlugins: [unwrapImg],
	},
});
