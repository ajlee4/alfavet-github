'use strict';

$(window).scroll(function () {
  var height = $(window).scrollTop();
  var width = $(window).innerWidth();

  if (height > 500 && width > 767) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
});