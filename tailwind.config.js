const {
  backgroundColor,
  backgroundOpacity,
  borderWidth
} = require('tailwindcss/defaultTheme')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0d1117',
        'brand-blue': '#1992d4'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
        8: '8px'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover'],
      backgroundOpacity: ['dark', 'hover']
    }
  },
  plugins: []
}
