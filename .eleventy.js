// .eleventy.js
module.exports = function(eleventyConfig) {
  // --- 1. Passthrough copy for static assets ---
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");

  // --- 2. Ignore drafts ---
  eleventyConfig.ignores.add("src/content/drafts/**");

  // --- 3. Add filters (optional / placeholders) ---
  eleventyConfig.addFilter("upper", str => str.toUpperCase());

  // --- 4. Add collections ---
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/blog/*.md").sort((a,b) => b.date - a.date);
  });

  eleventyConfig.addCollection("notes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/notes/*.md");
  });

  eleventyConfig.addCollection("media", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/media/**/*.md");
  });

  eleventyConfig.addCollection("essays", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/content/essays/*.md");
  });

  // --- 5. Watch for changes in CSS/JS ---
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  // --- 6. Return directory config ---
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"]
  };
};
