/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Minsur-inspired
        primary: {
          50: '#e6f0f9',
          100: '#cce0f3',
          200: '#99c2e7',
          300: '#66a3db',
          400: '#3385cf',
          500: '#0066c3',
          600: '#004891', // Primary Minsur
          700: '#003a74',
          800: '#002c57',
          900: '#001e3a',
        },
        accent: {
          50: '#fff5e6',
          100: '#ffeacc',
          200: '#ffd699',
          300: '#ffc166',
          400: '#ffad33',
          500: '#f98600', // Accent Minsur
          600: '#cc6e00',
          700: '#995300',
          800: '#663700',
          900: '#331c00',
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

