/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#6C0F0A",
          200: "#a04031",
          300: "#ff9e88",
        },
        accent: {
          100: "#2c2c2c",
          200: "#b0b0b0",
        },
        text: {
          100: "#000000",
          200: "#2c2c2c",
        },
        bg: {
          100: "#FFFFFF",
          200: "#f5f5f5",
          300: "#cccccc",
        },
      },
    },
  },
  plugins: [],
};
