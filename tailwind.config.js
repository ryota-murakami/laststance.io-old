/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],

  theme: {
    screens: {
      sp: {'max': '640px'},
      sm: '641px',
      // => @media (min-width: 641px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px'
      // => @media (min-width: 1024px) { ... }
    }
  },
  extend: {
    fontFamily: {
      sans: ['Inter var', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      'accent-1': '#FAFAFA',
      'accent-2': '#EAEAEA',
      'accent-7': '#333',
      success: '#0070f3',
      cyan: '#79FFE1'
    },
    spacing: {
      28: '7rem'
    },
    letterSpacing: {
      tighter: '-.04em'
    },
    lineHeight: {
      tight: 1.2
    },
    fontSize: {
      '5xl': '2.5rem',
      '6xl': '2.75rem',
      '7xl': '4.5rem',
      '8xl': '6.25rem'
    },
    boxShadow: {
      small: '0 5px 10px rgba(0, 0, 0, 0.12)',
      medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
    },
    margin: {
      'ratio': '30%'
    },
  },
  plugins: [require('@tailwindcss/typography')]
}
