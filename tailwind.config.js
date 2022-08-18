/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        asap: ["Asap"],
      },
      colors: {
        black: "#46424B",
        purple: "#892DB9",
      },
    },
  },

  plugins: [],
};
