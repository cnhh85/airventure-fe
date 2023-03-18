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
    fontFamily: {
      inter: ['Inter', 'Open Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        surface: '#F5F5F5',
        primary: '#3898D3',
        primaryHover: '#2D7AB1',
      },
      backgroundImage: {
        'dash-border': `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23888888FF' stroke-width='4' stroke-dasharray='6%2c 16' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
      },
      boxShadow: {
        custom: '0px 10.64px 29.68px rgba(0, 0, 0, 0.035), 0px 85px 237px rgba(0, 0, 0, 0.07)',
      },
    },
    plugins: [],
  },
}
