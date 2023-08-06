/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          'shark-700': '#484C66',
          'malibu': {
            '50': '#ecfcff',
            '100': '#cef6ff',
            '200': '#a3ecfe',
            '300': '#4ad6fb',
            '400': '#1ec2f2',
            '500': '#02a5d8',
            '600': '#0583b5',
            '700': '#0c6992',
            '800': '#135677',
            '900': '#154864',
            '950': '#072d45',
        },
        'gun-powder': {
          '50': '#f6f6f9',
          '100': '#ecedf2',
          '200': '#d6d7e1',
          '300': '#b1b5c8',
          '400': '#878ea9',
          '500': '#686f8f',
          '600': '#535876',
          '700': '#484c66',
          '800': '#3b3e51',
          '900': '#343646',
          '950': '#23242e',
      },
      'shark': {
        '50': '#f4f4f7',
        '100': '#e4e6e9',
        '200': '#cccfd5',
        '300': '#a8adb8',
        '400': '#7d8393',
        '500': '#626878',
        '600': '#545766',
        '700': '#484b56',
        '800': '#40424a',
        '900': '#383941',
        '950': '#2c2d34',
      },
    
      },
      fontFamily: {
        dmsans: ['var(--font-dm-sans)'],
        cabinetgrotesk: ['var(--font-cabinet-grotesk)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),],

};
