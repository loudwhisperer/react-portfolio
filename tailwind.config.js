/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx,css,ts,tsx}",
    "./components/**/*.{html,js,jsx,css,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "300px",
    },
  },
  plugins: [],
};
