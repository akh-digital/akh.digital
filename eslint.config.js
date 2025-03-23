import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";

export default [
	{
		ignores: ["**/node_modules/**", "**/dist/**", "**/.astro/**"],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	eslint.configs.recommended,
	eslintConfigPrettier, // Make sure this is the last
];
