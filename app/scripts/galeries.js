require('flickity-fade');
require('flickity-imagesloaded');
var Flickity = require('flickity');

class Gallery {
  constructor(element, options) {
    this.flickity = new Flickity(element, Object.assign({
      wrapAround: true,
      autoPlay: true,
      imagesLoaded: true,
      fade: true,
      adaptiveHeight: $('body.mobile').length ? true : false,
      setGallerySize: $('body.mobile').length ? true : false,
      pageDots: $(element).find('img').length > 1 ? true : false,
      prevNextButtons: $(element).find('img').length > 1 ? true : false,
      cellSelector: '.slide',
      on: {
        ready: function() {
          $('.flickity-page-dots .dot').each(function(i) {
            $(this).prepend(`<span>${ i + 1 }</span>`);
          });
        },
        select: function(index) {
          const $el = $(this.cells[index].element);
          $(this.element).parent().find('.caption').text($el.data('caption'));
        }
      }
    }, options));
  }
}


module.exports = {
  Gallery
};