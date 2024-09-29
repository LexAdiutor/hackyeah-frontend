/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: '600px',
				md: '728px',
				lg: '1025px', // nie rozjezdza sie na regulaminowej szerokosci dzieki temu
				xl: '1280px',
				'2xl': '1536px',
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"night", "light", "dark", 
			{
        		mytheme: {
					"primary": "#0F172A",
          			"primary-content": "#eeeeee",
          			"secondary": "#eeeeee",
          			"secondary-content": "#0F172A",
          			"accent": "oklch(74.51% 0.167 183.61)",
          			"accent-content": "#160016",
          			"neutral": "#2a323c",
          			"neutral-content": "#a6adbb",
          			"base-100": "#1d232a",
          			"base-200": "#191e24",
        			"base-300": "#15191e",
          			"base-content": "#ccced0",
          			"info": "#ff00ff",
          			"info-content": "#160016",
          			"success": "#00ffff",
          			"success-content": "#001616",
          			"warning": "#00ff00",
          			"warning-content": "#001600",
        			"error": "#ff0000",
          			"error-content": "#160000",
          		},
        	},
		],
	},
};
