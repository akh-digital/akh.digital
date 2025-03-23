import order from "./prettier.config.order.js";

/** @type {import("prettier").Config} */
export default {
	plugins: ["prettier-plugin-css-order", "prettier-plugin-astro"],
	cssDeclarationSorterCustomOrder: order,
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
};
