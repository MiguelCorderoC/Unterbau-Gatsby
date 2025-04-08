/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
      },
      colors: {
        unterbau: {
          red: "#AA0719",
          dark: "#100B00",
          blue: "#5D83AD",
          white: "#FFFFFF",
          gray: "#D9D9D9",
        },
      },
    },
  },
  plugins: [],
}
