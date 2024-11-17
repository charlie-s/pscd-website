module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#66a8a8',
        'brand-dark': '#2b2b2b'
      },
      fontFamily: {
        sans: ['roboto']
      },
      fontSize: {
        sm: '13px',
        base: '14px',
        lg: '26px'
      }
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700
    }
  },
  variants: {},
  plugins: [],
}
