/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
var webpack = require('webpack')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Client/**/*.{js,ts,jsx,tsx}",
    "./Client/Components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        green: colors.green,
        purple: colors.purple,
        rose: colors.rose,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        slider: colors.gray,
      },
      maxWidth: {
        'slider': '50%',
        'link': '10vw',
        'downloadM': '90vw',
        'downloadT': '40vw',
        'downloadL': '40vw',
      },
      minHeight: {
        'appBar': '8vh',
        'slider': '95vh',
        'icon': '20vh',
        'sliderMobile': '75vh',
        'sliderTablet': '85vh',
        'screen': '100vh',
        'downloadM': '15vh',
        'downloadGPM': '25vh',
        'downloadT': '25vh',
        'downloadL': '25vh',
        'footer': '30vh',
      },
      minWidth: {
        'slider': '75vh',
        'link': '10vw',
        'iconM': '80vw',
        'iconT': '45vw',
        'iconL': '45vw',
        'screen': '100vw',
        'downloadM': '90vw',
        'downloadT': '40vw',
        'downloadL': '40vw',
      },
      maxHeight: {
        'icon': '20vh',
        'downloadM': '15vh',
        'downloadT': '25vh',
        'downloadGPM': '25vh',
        'downloadL': '25vh',
      },
      screens: {
        'phone': '640px',
        'tablet': '768px',
        'laptop': '1080px',
      },
      fontFamily: {
        'Coffee': ['Love', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        'slider': '7.5rem',
        'sliderL': '5rem',
        'sliderM': '2rem',
        'sliderT': '3.5rem',
      },
      backgroundImage: {
        'slider1': 'url("/images/artisan.jpg")',
        'slider2': 'url("/images/artisan1.jpg")',
        'googlePlay': 'url("/images/GooglePlay.png")',
        'appStore': 'url("/images/AppStore.svg")',
      }
    },
  },
  plugins: [],
}
