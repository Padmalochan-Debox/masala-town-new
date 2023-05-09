/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primeBeige: "#ff8247",
        primary: "#112ed1",
        tertiary: "#fcba03",
        lightRed: "#eb1317",
        primeBlack: "#262626",
        secondaryBlack: "#483c46",
      },
    },
  },
  plugins: [],
};
