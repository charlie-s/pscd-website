const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addShortcode('version', () => now)

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'inc'
    }
  }
};
