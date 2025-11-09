/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
				sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
			},
			colors: {
				'portfolio-orange': {
					DEFAULT: '#c2410c', // Burnt orange for main accent
					light: '#ea580c', // Lighter orange for dark mode
				},
				'portfolio-teal': {
					DEFAULT: '#0f766e',
					light: '#14b8a6',
				},
				'portfolio-red': {
					DEFAULT: '#b01830',
					light: '#c41e3a',
				},
			},
		},
	},
	plugins: [],
}
