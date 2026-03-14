/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["'Syne'", "sans-serif"],
        dm: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        crab: {
          DEFAULT: "#D85A30",
          dark: "#993C1D",
          light: "#FAECE7",
        },
        surface: "#111111",
        card: "#1A1A1A",
        border: "#2A2A2A",
      },
    },
  },
  plugins: [],
};
