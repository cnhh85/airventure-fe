/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-gray': '#F0F0F3',
      },
      backgroundImage: {
        'login-background': "url('/src/assets/img/loginBackground.png')",
      },
    },
  },
  plugins: [],
}
