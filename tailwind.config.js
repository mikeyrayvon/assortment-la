module.exports = {
  purge: [],
  theme: {
    colors: {
      gray: '#F5F5F5',
      black: '#424242',
      white: '#FFFFFF',
    },
    fontFamily: {
      'america': ['America', 'monospace'],
      'query': ['Query', 'sans-serif'],
    },
    extend: {
      screens: {
        'xxl': '1400px',
      },
      height: {
        '1/2': '50%',
        '3/4': '75%',
        '3/2': '150%',
        '6/5': '120%'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem'
      }
    },
  },
  variants: {},
  corePlugins: {
    container: false
  },
  plugins: [
  ]
}
