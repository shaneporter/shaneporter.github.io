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
				'portfolio-red': {
					DEFAULT: '#b01830', // Darker for better contrast on white (WCAG AA compliant)
					light: '#c41e3a', // Original color for dark mode
				},
			},
		},
	},
	plugins: [],
}
