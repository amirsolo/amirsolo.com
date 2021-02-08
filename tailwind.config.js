const { fontFamily } = require('tailwindcss/defaultTheme')

// Customized @tailwind/typography properties
const prose = (theme) => ({
  DEFAULT: {
    css: {
      color: theme('colors.gray.700'),
      a: {
        color: theme('colors.primary-color'),
        textDecoration: 'none',
        '&:hover': {
          // color: theme('colors.blue.500'),
          textDecoration: 'underline'
        }
      },
      'h1,h2,h3,h4,h5,h6': {
        color: theme('colors.gray.700')
      },
      h2: {
        marginBottom: theme('spacing.4')
      },
      blockquote: {
        borderLeftColor: theme('colors.gray.300'),
        color: theme('colors.gray.700')
      },
      'blockquote p:first-of-type::before': false,
      'blockquote p:last-of-type::after': false
    }
  },
  dark: {
    css: {
      color: theme('colors.gray.300'),
      'h1,h2,h3,h4,h5,h6': {
        color: theme('colors.gray.300')
      },
      strong: { color: theme('colors.gray.200') },
      blockquote: {
        borderLeftColor: theme('colors.gray.600'),
        color: theme('colors.gray.300')
      },
      hr: { borderColor: theme('colors.gray.800') },
      ul: {
        li: {
          '&:before': { backgroundColor: theme('colors.gray.600') }
        }
      },
      ol: {
        li: {
          '&:before': { color: theme('colors.gray.500') }
        }
      }
    }
  }
})

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
        sans: ['Inter', ...fontFamily.sans]
      },
      typography: prose
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
