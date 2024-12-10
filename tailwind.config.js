/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFD1DC", // Light Pink - for subtle accents or hover states
          200: "#FF69B4", // Vibrant Pink - main buttons, highlights
          300: "#FF1493", // Deep Pink - bold elements, active states
        },
        accent: {
          100: "#333333", // Softer Black - key contrast for text and elements
          200: "#444444", // Dark Gray - for less prominent backgrounds
        },
        text: {
          100: "#FFFFFF", // Pure White - primary text
          200: "#F5F5F5", // Soft White - secondary or muted text
        },
        bg: {
          100: "#FFFFFF", // Pure White - main background
          200: "#FFF0F5", // Blush White - for section backgrounds
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
