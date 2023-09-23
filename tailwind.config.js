/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Clash Display", "sans-serif"],
        sentence: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        unica: ["Unica One", "cursive"],
      },
      backgroundImage: {
        home: "url(/src/assets/getLinkedbackground.svg)",
      },
    },
    plugins: [
      require("@shrutibalasa/tailwind-grid-auto-fit"),
      // ...
    ],
  },
  plugins: [],
};
