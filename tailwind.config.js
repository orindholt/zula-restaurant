module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				base: "'Merriweather', serif",
				imbue: "'Imbue', serif",
			},
			colors: {
				tan: "#fdf0d5",
				red: {
					normal: "#c1121f",
					dark: "#780000",
				},
				green: {
					normal: "#606c38",
					dark: "#283618",
				},
				black: "#252422",
				white: "#f8f9fa",
			},
		},
	},
	plugins: [],
};
