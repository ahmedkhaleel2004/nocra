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
				"body-blue": "#519ef0",
        "body-dark-blue": "#1960d4",
			},
      backgroundImage: {
        'full-page-gradient': 'linear-gradient(90deg, #519ef0, #1960d4)',
      },
    },
  },
  plugins: [],
}
export default config
