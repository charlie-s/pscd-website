const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img')
  eleventyConfig.addShortcode('version', () => now)

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: 'inc'
    }
  }
};
