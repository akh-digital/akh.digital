/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				akhblack: "var(--akh-black)",
				akhgray: "var(--akh-gray)",
				akhlightGray: "var(--akh-light-gray)",
			},
		},
	},
	plugins: [],
};
