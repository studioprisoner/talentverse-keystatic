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
          'tv-blue': '#4AD6FB',
          'tv-gray': '#2C2D34',
          'tv-dark-gray': '#484C66'
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
  plugins: [require("@tailwindcss/typography")],
};
