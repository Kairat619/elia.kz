
module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets");


    eleventyConfig.addFilter("dateOnly", function (dateVal, locale = "en-us") {
        var theDate = new Date(dateVal);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return theDate.toLocaleDateString(locale, options);
      });

      module.exports = function(eleventyConfig) {
        eleventyConfig.addCollection("products", function(collectionApi) {
            return collectionApi.getFilteredByGlob("./src/products/*.md");
        });
    };

    module.exports = function(eleventyConfig) {
      eleventyConfig.addFilter("intersect", (arr1, arr2) => {
          if (!Array.isArray(arr1) || !Array.isArray(arr2)) return [];
          return arr1.filter(value => arr2.includes(value));
      });
  };
  

      return {

        // allows .html files to contain nunjucks templating language
        htmlTemplateEngine: "njk",
        htmlTemplateEngine: "liquid",
         dir: {
           input: "src",
           includes: "_includes",
           output: "public"
         }
         
       }
}