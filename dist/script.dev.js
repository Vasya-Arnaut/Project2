"use strict";

new Splide('.splide').mount();
var splide = new Splide('.splide1', {
  type: 'loop',
  perPage: 1,
  breakpoints: {
    768: {
      perPage: 1
    }
  }
});
splide.mount();

(function () {
  var burgerItem = document.querySelector('.burger');
  var menu = document.querySelector('.header_nav');
  var menuCloseItem = document.querySelector('.header_nav-close');
  burgerItem.addEventListener('click', function () {
    menu.classList.add('header_nav_active');
  });
  menuCloseItem.addEventListener('click', function () {
    menu.classList.remove('header_nav_active');
  });
})();

(function () {
  var header = document.querySelector('.header');

  window.onscroll = function () {
    if (window.pageYOffset > 40) {
      header.classList.add('header_active');
    } else {
      header.classList.remove('header_active');
    }
  };
})();