'use strict';

$('.dropdown-header').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('opened');
});