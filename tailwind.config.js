/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],

      },
      colors:{
        "neutral-1000":"#000000",
        "twitter-blue-default":"#1D9BF0",
        "stroke":"rgba(29, 155, 240, 0.24)",
        "secondary":"rgba(255, 255, 255, 0.60)",
        "searchbar-fill":"#212327",
        "twitter-blue-hover":"#1871CA",
        "twitter-blue-disabled":"#1E5D87",
      },
    },
  },
  plugins: [],
}