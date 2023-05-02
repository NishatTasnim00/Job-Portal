/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#1A1919',

					secondary: '#474747',

					accent: '#37CDBE',

					neutral: '#757575',

					'base-100': '#FFFFFF',

					info: '#3ABFF8',

					success: '#36D399',

					warning: '#FBBD23',

					error: '#F87272',
					title: '#1A1919',
					dark2: '#474747',
					des: '#757575',
					info: '#757575',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
