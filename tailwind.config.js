/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(30, 203, 225)",
        surface: "rgb(27, 31, 36)",
        "font-primary": "rgb(255, 255, 255)",
        "font-secondary": "rgb(69, 74, 79)",
      },
      fontFamily: {
        body: [
          "-apple-system",
          "system-ui",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        heading: ['"Exo 2"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
