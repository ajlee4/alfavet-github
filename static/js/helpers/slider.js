"use strict";

$(document).ready(function () {
  $('.main-slider').slick({
    dots: true,
    infinite: true,
    autoplay: true
  });
});
$(document).ready(function () {
  $('.actions-slider').slick({
    infinite: true,
    // autoplay:true,
    slidesToScroll: 1
  });
});