const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js("app/scripts/app.js", "web/scripts")
  .extract(["jquery", "objectFitPolyfill"]);

mix.copy("node_modules/flickity/dist/flickity.min.css", "web/styles");
mix.copy("node_modules/normalize.css/normalize.css", "web/styles");
mix.copy("node_modules/pace-js/pace.min.js", "web/scripts");
mix.copy(
  "node_modules/objectFitPolyfill/dist/objectFitPolyfill.basic.min.js",
  "web/scripts"
);

mix.sass("app/styles/main.scss", "web/styles");
mix.sass("app/styles/cp.scss", "web/styles");

// mix.copy("src/images", "public/images").copy("src/fonts", "public/fonts");

// https://browsersync.io/docs/options/
mix.browserSync({
  proxy: "love.test",
  files: ["templates", "web/styles", "web/scripts"],
  open: false,
});
