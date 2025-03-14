/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#FA70A8",
        voilet: "#242A56",
        blue: "#0C359E",
        darkpink: "#EA4487",
        lightpink: "#FFE3CA",
        offwhite: "#F9F9E0",
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
      fontFamily: {
        // Add your custom fonts along with emoji font family fallback
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          '"Roboto"',
          '"Oxygen"',
          '"Ubuntu"',
          '"Cantarell"',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      screens: {
        xs: '350px',
        // lg: '1280px' // Example for an extra small breakpoint
      },
    },
  },
  plugins: [],
};
