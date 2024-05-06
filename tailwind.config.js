/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      teko: ["Teko", "sans-serif"],
      lora: ["Lora", "serif"],
      satisfy: ["Satisfy", "cursive"]
    },
    extend: {
      colors: {
        primary: "#333",
        secondary: "#f9f9f9",
        label: "#666"
      },
    },
  },
  plugins: [],
}