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
      // colors: {
      //   primary: {
      //     100: "#F35D77",
      //     200: "#ff90a6",
      //     300: "#fff8ff",
      //   },
      //   accent: {
      //     100: "#FFC0CB",
      //     200: "#99616c",
      //   },
      //   text: {
      //     100: "#333333",
      //     200: "#5c5c5c",
      //   },
      //   bg: {
      //     100: "#FFFFFF",
      //     200: "#f5f5f5",
      //     300: "#cccccc",
      //   },
      // },
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
    },
  },
  plugins: [],
};
