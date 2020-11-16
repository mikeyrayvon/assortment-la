module.exports = {
  purge: [],
  theme: {
    colors: {
      gray: '#F5F5F5',
      black: '#424242',
      white: '#FFFFFF',
    },
    extend: {
      screens: {
        'xxl': '1400px',
      }
    },
  },
  variants: {},
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '96%',
          '@screen sm': {
            width: '580px',
          },
          '@screen md': {
            width: '720px',
          },
          '@screen lg': {
            width: '960px',
          },
          '@screen xl': {
            width: '1100px',
          },
          '@screen xxl': {
            width: '1380px',
          },
        }
      })
    }
  ]
}
