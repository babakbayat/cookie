// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              foreground: "#FFFFFF", // White (for contrast)
              DEFAULT: "#b78f46", // Chocolate Brown (adjusted for better contrast)
            },
            secondary: {
              foreground: "#2F4F4F", // Dark Slate Gray (for contrast)
              DEFAULT: "#F5DEB3", // Creamy Beige (remains the same)
            },
            default: {
              foreground: "#fff", // Dark Slate Gray (for contrast)
              DEFAULT: "#3a2020", // White (remains the same)
            },
            content1: {
              foreground: "#2F4F4F", // Dark Slate Gray (for contrast)
              DEFAULT: "#333", // Light Pink (slightly darker than Pastel Pink)
            },
            content2: {
              foreground: "#2F4F4F", // Dark Slate Gray (for contrast)
              DEFAULT: "#90EE90", // Light Green (slightly darker than Mint Green)
            },
            content3: {
              foreground: "#2F4F4F", // Dark Slate Gray (for contrast)
              DEFAULT: "#FFD700", // Golden Yellow (remains the same)
            },
            content4: {
              foreground: "#FFFFFF", // White (for contrast)
              DEFAULT: "#8B4513", // Warm Brown (used as a content color now)
            },
            background: {
              foreground: "#FFFFFF", // White (for contrast)
              DEFAULT: "#555", // Dark Slate Gray (a dark, neutral background color)
            },
          },
        },
      },
    }),
  ],
};
