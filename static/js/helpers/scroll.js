'use strict';

$(window).scroll(function () {
  var height = $(window).scrollTop();

  if (height > 500) {
    $('header').addClass('fixed');
  } else {
    $('header').removeClass('fixed');
  }
});