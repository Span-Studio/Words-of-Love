'use strict';

const Global = require('./global.js');
const Pages = require('./pages.js');
const Videos = require('./videos.js');
const Galeries = require('./galeries.js');
const Components = require('./components.js');

const _ = require('lodash');


let init = function () {


  $(document).ready(function () { // run as soon as the javascript is ready
    new Global();

    if ($('.about-page').length) {
      new Pages.About();
    }

    var iso = new Isotope($('.page-grid')[0], {
      itemSelector: '.item',
      layoutMode: 'fitRows'
    });

    console.log(iso);
  });

  $(window).on('load', function () { // run when all the assets have finished downloading
    $('.gallery').each(function () {
      new Galeries.Gallery(this);
    });
    $('.vimeo-video').each(function () {
      new Videos.Vimeo(this);
    });
    $('.youtube-video').each(function () {
      new Videos.Youtube(this);
    });
  });
};

module.exports = init();