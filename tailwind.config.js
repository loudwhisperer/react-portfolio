/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./components/**/*.{html,js,jsx,css,ts,tsx}",
    "./components/pages/**/*.{html,js,jsx,css,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "300px",
    },
  },
  plugins: [],
};
