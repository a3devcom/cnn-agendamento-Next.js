/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: {
          400: '#2880bb',
    
        },
      },

      fontSize: {
        'h1': ['4.3rem', '4.5rem'],
        'h2': ['3.583rem', '4rem'],
        'h3': ['2.986rem', '3.5rem'],
        'h4': ['2.488rem', '2.25rem'],
        'h5': ['2.074rem', '2.5rem'],
        'h6': ['1.728rem', '2rem'],
        'p2xl': '1.728rem',
        'pxl': '1.44rem',
        'plg': '1.2rem',
        'pmd': '1rem',
        'psm': '0.833rem',
      },
    },
  },
  plugins: [],
}
