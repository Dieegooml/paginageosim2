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
          50:  '#F0F5FF',
          100: '#DCE8FF',
          200: '#B9D0FF',
          300: '#8FB6FF',
          400: '#60A5FA', // azul vibrante
          500: '#3B82F6', // azul corporativo
          600: '#1E3A8A', // navy intenso
          700: '#162C5B',
          800: '#0F1E3A',
          900: '#0B1528',
        },
        accent: {
          50:  '#FFF9E6',
          100: '#FFF1CC',
          200: '#FFE39F',
          300: '#FFD36D',
          400: '#FBCB54',
          500: '#D4AF37', // oro premium
          600: '#B38F1F',
          700: '#8A6F15',
          800: '#6B5610',
          900: '#4D3D0B',
        },
        // Neutros de alto contraste
        ink: {
          900: '#0B0E12',
          800: '#12161C',
          700: '#1B2129',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
