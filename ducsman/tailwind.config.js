/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Italianno: ["Italianno", "cursive"],
      Lobster: ["Lobster", "cursive"],
      Maitree: ["Maitree", "serif"],
      Meie: ["Meie Script", "cursive"],
    },

    extend: {
      colors: {
        darkBlue: "#0c3483",
        darkGrey: "#27272a",
        trueGray: "#d6d3d1",
        fafafa: "#fafafa",
        coolGrayfa: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
