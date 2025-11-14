/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'invest-black': '#0B0C10',
        'invest-gray': '#1F2833',
        'invest-silver': '#C5C6C7',
        'invest-orange': '#FF7A00',
        'invest-gold': '#FFB84C',
        'invest-white': '#F8F8F8',
      },
    },
  },
  plugins: [],
};