/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/components/**/*.{jsx,tsx}',
    './src/pages/**/*.{jsx,tsx}',
    './src/layouts/**/*.{jsx,tsx}',
    './src/views/**/*.{jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '786px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      rubik: ['Rubik'],
      inter: ['Inter'],
    },
    extend: {
      colors: {
        primary: '#0079C4',
        hover: '#0065A3',
        link: '#EEF6FB',
        neutral: '#FAFAFA',
        neutral60: '#777682',
        neutral50: '#9999A4',
        neutral80: '#444458',
        bluemain: '#1088C8',
        yellowmain: '#F89D3C',
        redmain: '#D92B4E',
        toscamain: '#00ACA2',
      },
    },
  },
  plugins: [],
}
