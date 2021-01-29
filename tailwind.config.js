const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-color': '#1992d4',
        'dark-primary': '#0d1117',
        'dark-secondary': '#161b22'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover'],
      backgroundOpacity: ['dark', 'hover'],
      margin: ['last']
    }
  },
  plugins: []
}
