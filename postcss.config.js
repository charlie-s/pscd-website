module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
    requre('cssnano')({ preset: 'default' })
  ]
};
