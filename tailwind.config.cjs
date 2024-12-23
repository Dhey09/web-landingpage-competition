/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'myBlack' : '#141315',
        'myWhite' : '#F7F7F7',
        'myCyan' : '#96E1DC',
        'myDarkBlue' : '#042028',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
