/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      inter: ['Inter', 'Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        surface: '#F5F5F5',
      },
    },
    plugins: [],
  },
}
