
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