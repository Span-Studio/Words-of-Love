"use strict";

// require('intersection-observer');
// var Scrollama = require('scrollama');
const _ = require("lodash");
const $ = require("jquery");

class Global {
  scrollTo(target) {
    $("html,body").animate(
      {
        scrollTop: target,
      },
      1000
    );
  }

  // prevent a cross-site hack where they can impersonate your website
  addNoopener() {
    $('a[target="_blank"]').each(function() {
      $(this).attr("rel", "noopener");
    });
  }

  // when the user starts to press the tab key
  // we add a class to the website which will help
  // clearly highlight what is currently active
  checkForTab() {
    $("body").keydown(function(e) {
      if (e.originalEvent.keyCode === 9) {
        $("body").addClass("outlines");
      }
    });
  }

  forms() {
    $("form input").focus(function() {
      const $this = $(this);
      $this.parent().addClass("active");
    });
    $("form input").blur(function() {
      const $this = $(this);
      if ($this.val() === "") {
        $this.parent().removeClass("active");
      }
    });

    const $form = $("form");
    $form.submit(function(event) {
      if (!$form.data("default")) {
        event.preventDefault();
        const data = $form.serialize();
        const action = $form.attr("action");
        $.ajax({
          type: "post",
          url: action ? action : "",
          data: data,
          crossDomain: true,
          headers: {
            accept: "application/javascript",
          },
          complete: function(response, textStatus) {
            console.log("Status: " + textStatus, response);
            if (response.status === 302 || response.status === 200) {
              $form.hide();
              $(".success-message").fadeIn();
            }
          },
        });
      }
    });
  }

  navigation() {
    $(".hamburger").click(function() {
      $("body").toggleClass("nav-active");
    });
  }

  jumpToTop() {
    const _this = this;
    $('a[href^="#"]').click(function(event) {
      event.preventDefault();
      const href = $(this).attr("href");
      if (href == "#jump-to-top") {
        _this.scrollTo(0);
      } else {
        const target = $(href).offset().top;
        _this.scrollTo(target);
      }
    });
  }

  clearLast() {
    $(".clear-last").each(function() {
      const $q = $(this).find("> *");
      $q.eq($q.length - 1).addClass("last");
    });
  }

  constructor() {
    this.checkForTab();
    this.addNoopener();
    this.navigation();
    this.forms();
    this.jumpToTop();
    this.clearLast();
  }
}

module.exports = Global;
