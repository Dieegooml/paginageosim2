/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta corporativa premium (azul profundo + oro)
        primary: {
          50:  '#EAF5FF',
          100: '#D5EBFF',
          200: '#AED7FF',
          300: '#7FC1FF',
          400: '#45A8FF', // azul vibrante
          500: '#1D8CFF', // azul corporativo vivo
          600: '#145FC4', // navy-azul intenso
          700: '#124B94',
          800: '#123B70',
          900: '#102E57',
        },
        accent: {
          50:  '#F8FCEB',
          100: '#EFF8CF',
          200: '#E0F0A5',
          300: '#CDE373',
          400: '#B7D95A',
          500: '#9BCB3C', // verde-oliva premium
          600: '#7EAB2E',
          700: '#638723',
          800: '#4D6A1C',
          900: '#3B5117',
        },
        // Neutros de alto contraste
        ink: {
          900: '#0B0E12',
          800: '#12161C',
          700: '#1B2129',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
