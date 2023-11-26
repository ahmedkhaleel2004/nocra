import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-dm-sans)"], // Using DM Sans as the primary sans font
			},
			colors: {
				"body-blue": "#65aefc",
				"body-dark-blue": "#134fb0",
			},
			backgroundImage: {
				"full-page-gradient": "linear-gradient(90deg, #65aefc, #134fb0)",
			},
			keyframes: {
				slideDown: {
					"0%": { opacity: "0", transform: "translateY(-1rem)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
			},
			animation: {
				slideDown: "slideDown 0.5s ease-out forwards",
			},
			boxShadow: {
				"custom-large": "0 4px 80px rgba(0, 0, 0, 1)",
			},
		},
	},
	plugins: [],
};
export default config;
