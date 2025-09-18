/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
  "./pages/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
  "./app/**/*.{js,jsx,ts,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}",
],

    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-poppins)', ...fontFamily.sans],
          serif: ['var(--font-merriweather)', ...fontFamily.serif],
        },
        colors:{
            primary: {
                1: '#b69c74',
                2: '#201c14',
            },
            secundary: {
                1: '#1f3d22',
                2: '#132615',
            },
            terciary: {
                1: '#faf8e8',
                2: '#f5efc3',
            },
        }
      },
    },
    plugins: [],
  }
  