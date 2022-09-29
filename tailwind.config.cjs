/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: ['Fredoka', 'sans-serif'],
      },
      colors: {
        first: '#3DB2FF',
        second: '#FFEDDA',
        third: '#FFB830',
        fourth: '#FF2442',
      },
    },
  },
  plugins: [],
};
