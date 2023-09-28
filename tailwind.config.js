/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(30, 203, 225)",
        accent: "rgb(102, 100, 236)",
        "accent-light": "rgb(94, 115, 240)",
        surface: "rgb(27, 31, 36)",
        "surface-secondary": "rgb(40, 40, 40)",
        "font-primary": "rgb(255, 255, 255)",
        "font-secondary": "rgb(69, 74, 79)",
        "font-tertiary": "rgb(255, 255, 255,0.5)",
        "editor-surface": "rgb(30, 30, 30)",
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
  plugins: [require("tailwind-scrollbar")],
};
