/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './index.html',
      './dist/*.html',
      './src/**/*.{js,jsx,ts,tsx}',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};