import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)'], // Using DM Sans as the primary sans font
      },
      colors: {
				"body-blue": "#4696EC",
        "body-dark-blue": "#2970e3",
			},
      backgroundImage: {
        'full-page-gradient': 'linear-gradient(90deg, #4696EC, #2970e3)',
      },
    },
  },
  plugins: [],
}
export default config
