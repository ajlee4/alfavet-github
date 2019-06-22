'use strict';

$('.js-menu-open').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('burger-close');
  $('.menu').toggleClass('menu_active');
  $('body').toggleClass('menu-opened');
  $('.mobile-menu').toggleClass('visible');
});
$('.js-menu-tel-open').on('click', function (e) {
  e.preventDefault();
  $('.phone-list__mobile').toggleClass('opened');
});
$(document).on('click', function (e) {
  var block = $(".js-menu-tel-open");
  var menu = $('.menu-btn');

  if (!block.is(e.target)) {
    $('.phone-list').removeClass('opened');
  }
});