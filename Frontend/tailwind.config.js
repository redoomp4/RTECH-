/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop: "1026px",
      ipad: "768px",phone: "375px",},
    },
  },
  plugins: [],
}
  