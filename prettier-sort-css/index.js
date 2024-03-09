import prettierPostcss from "prettier/parser-postcss";
import postcss from "postcss";
import { cssDeclarationSorter } from "css-declaration-sorter";

function parseSort(text, options) {
	return postcss([
		cssDeclarationSorter({
			order: (a, b) =>
				options.customOrder.indexOf(a) - options.customOrder.indexOf(b),
			keepOverrides: options.cssDeclarationSorterKeepOverrides,
		}),
	])
		.process(text)
		.then((result) => result.css)
		.then((sortedCss) => {
			options.originalText = sortedCss;
			return prettierPostcss.parsers[options.parser].parse(
				sortedCss,
				[options.parser],
				options,
			);
		});
}

export default {
	options: {
		cssDeclarationSorterOrder: {
			type: "choice",
			description: "One of the built-in sort orders.",
			category: "css-declaration-sorter",
			default: "concentric-css",
			choices: [
				{
					value: "alphabetical",
					description:
						"Default, order in a simple alphabetical manner from a - z.",
				},
				{
					value: "smacss",
					description:
						"Order from most important, flow affecting properties, to least important properties.",
				},
				{
					value: "concentric-css",
					description:
						"Order properties applying outside the box model, moving inward to intrinsic changes.",
				},
				{
					value: "custom",
					description:
						"Provide an array of declaration names in the `customOrder` property.",
				},
			],
		},
		cssDeclarationSorterKeepOverrides: {
			type: "boolean",
			description: "",
			category: "css-declaration-sorter",
			default: true,
		},
		customOrder: {
			type: "string",
			description:
				"An array of declaration names to sort according to their index in the array.",
			category: "css-declaration-sorter",
			array: true,
			default: [{value: []}],
		},
	},
	parsers: {
		css: {
			...prettierPostcss.parsers.css,
			parse: parseSort,
		},
		less: {
			...prettierPostcss.parsers.less,
			parse: parseSort,
		},
		scss: {
			...prettierPostcss.parsers.scss,
			parse: parseSort,
		},
	},
};
