const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './layout/**/*.{js,jsx}'
  ],
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
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            blockquote: {
              color: theme('colors.green.300')
            },
            'h1,h2,h3': {
              color: theme('colors.gray.800')
            },
            'h4,h5,h6': {
              color: theme('colors.grat.700')
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            blockquote: {
              color: theme('colors.red.500')
            },
            'h1,h2,h3': {
              color: theme('colors.gray.200')
            },
            'h4,h5,h6': {
              color: theme('colors.grat.300')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover'],
      backgroundOpacity: ['dark', 'hover'],
      margin: ['last'],
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
