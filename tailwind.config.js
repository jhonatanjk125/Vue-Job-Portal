/** @type {import('tailwindcss').Config} */
/* eslint-env node */
import defaultTheme from 'tailwindcss/defaultTheme'
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'brand-gray-1': '#DADCE0',
        'brand-blue-1': '#1967D2',
        'brand-blue-2': '#4285F4',
        'brand-green-1': '#137333',
      },
      boxShadow: {
        blue: "0 0 3px 3px #4285f4",
      },
    }
  },
  plugins: []
}
