'use strict';

const _ = require('lodash');
require('intersection-observer');
const Scrollama = require('scrollama');
const Mapbox = require('mapbox-gl');
const L = require('leaflet');

// https://leafletjs.com/index.html
class Floorplan {

  createMap() {
    this.map = L.map(this.el[0], {
      crs: L.CRS.Simple,
      center: [0, 0],
      maxBounds: [0, 0],
      zoomControl: false,
      zoom: 0,
      zoomSnap: 0.01,
      maxZoom: 1,
      minZoom: -10, // make sure there is enough space to see the whole map
      zoomDelta: $('body.mobile').length ? 0.5 : 0.5,
      scrollWheelZoom: $('body.mobile').length ? false : true,
    });
  }

  addImage(image) {
    this.currentLayer = L.imageOverlay(image, this.bounds).addTo(this.map);
    this.currentLayer.on('load', function() {
      $('.floorplan-popup .loading').addClass('hidden');
    });
  }

  addZoomControls() {
    const zoom = L.control.zoom({
      position: 'topright'
    });
    this.map.addControl(zoom);
  }

  setMapPosition() {
    this.bounds = [
      [0, 0],
      [this.height, this.width]
    ];
    this.map.setMaxBounds(this.bounds);

    this.center = [this.height / 2, this.width / 2];
    this.map.setView(this.center);
  }

  addResizeHandler() {
    const self = this;
    function calc() {
      const minZoom = self.map.getBoundsZoom(self.bounds, true);
      self.map.setZoom(minZoom);
      self.map.setMinZoom(minZoom - 1);
      self.map.setMaxZoom(minZoom + 3);
      self.map.setView(self.center);
    }

    $(window).resize(_.throttle(calc, 100));
    calc();
  }

  constructor(el, img) {
    const self = this;

    this.el = $(el);
    this.width = this.el.innerWidth();
    this.height = this.el.innerHeight();

    this.createMap();
    this.addZoomControls();
    this.setMapPosition();
    this.addImage(img);
    this.addResizeHandler();
  }
}

// https://github.com/russellgoldenberg/scrollama
class ScrollReveal {
  runProgram() {
    this.els.addClass(this.hiddenClass);

    const scroller = Scrollama();
    scroller
      .setup({
        step: this.els.toArray(),
        offset: this.offsetStart,
        debug: false
      })
      .onStepEnter(response => {
        $(response.element).removeClass(this.hiddenClass).addClass(this.finishedClass);
      });

    // setup resize event
    window.addEventListener("resize", scroller.resize);
  }

  constructor(classes, offset) {
    this.offsetStart = offset || 0.75;
    // the advantage of classes is we can attach them to parents and apply styles to children
    this.hiddenClass = 'fade-in-hidden';
    this.finishedClass = 'fade-in-finished';
    this.classesString = classes.join(', ');
    this.allEls = $(this.classesString);
    this.els = this.allEls.not('.' + this.finishedClass);
    if (this.els.length == 0) {
      return;
    } else {
      this.runProgram();
    }
  }
}

class Map {
  constructor(el) {
    Mapbox.accessToken = 'pk.eyJ1IjoidGhpcnN0IiwiYSI6ImNpcjd5bWd3bzAwd25nYW05dDNidGlrbGYifQ.LrGqviBMxmi5v4a4HI2RaQ';
    this.el = $(el);
    this.canvas = this.el.find('.canvas');
    new Mapbox.Map({
      container: this.canvas[0],
      style: ''
    });
  }
}

module.exports = {
  Floorplan,
  ScrollReveal,
  Map
};