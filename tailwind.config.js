/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#800020",
        "secondary" : "#c30031",
        "tertiary" : "#f8c7d3"
      }
    },
  },
  plugins: [],
}

