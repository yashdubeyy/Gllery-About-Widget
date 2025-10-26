/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'widget': '#616161',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(180deg, #373E44 0%, #191B1F 100%)',
      },
      colors: {
        'border': '#96BEE7',
        'button': '#96BEE7',
      },
    },
  },
  plugins: [],
}