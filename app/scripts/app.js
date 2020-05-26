"use strict";

const Global = require("./global.js");
const Videos = require("./videos.js");
const Galeries = require("./galeries.js");
const Isotope = require("isotope-layout");
const _ = require("lodash");
const $ = require("jquery");

let init = function() {
  $(document).ready(function() {
    // run as soon as the javascript is ready
    new Global();

    var iso = new Isotope($(".page-grid")[0], {
      itemSelector: ".item",
    });
  });

  $(window).on("load", function() {
    // run when all the assets have finished downloading
    $(".gallery").each(function() {
      new Galeries.Gallery(this);
    });
    $(".vimeo-video").each(function() {
      new Videos.VimeoPlayer(this);
    });
    $(".youtube-video").each(function() {
      new Videos.Youtube(this);
    });
  });
};

module.exports = init();
