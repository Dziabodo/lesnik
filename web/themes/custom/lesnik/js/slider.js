const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 600,
  effect: 'slide',
  autoplay: {
    delay: 4000,
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    horizontalClass: 'swiper-pagination-horizontal',
    type: 'bullets'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//swiper.start();