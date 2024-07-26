// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tomato': '#F84F39',
        'dark': '#26253B',
        'lightPurple': '#6B66DA',
        'lightGray': '#8E8DA0',
        'whiteGray': '#F4F3FA',
        'borderColor': 'rgba(182, 182, 209, .15)',
        'offWhite': '#fff',
        'darkGray': '#72718A',
        'darkGreen': '#2A966F',
        'lightGreen': '#EAF5F1',
        'lightTomato': '#FEEDEA',
        'skyBlue' : '#2590F2',
        'lightSkyBlue': '#E9F4FE',
        'darkBlue': '#181824',
        'lightBlueGray': '#20202E',
        'darkWhite': '#181824',
      },
      fontFamily: {
        'inter': ['inter', 'sans-serif'],
        'ibm': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  safelist: [
    'bg-tomato',
    'bg-dark',
    'bg-lightPurple',
    'bg-lightGray',
    'bg-whiteGray',
    'bg-borderColor',
    'bg-offWhite',
    'bg-darkGray',
    'bg-darkGreen',
    'bg-lightGreen',
    'bg-lightTomato',
    'bg-skyBlue',
    'bg-lightSkyBlue',
    // Add any other dynamic color classes you may use
  ],
  plugins: [],
}
