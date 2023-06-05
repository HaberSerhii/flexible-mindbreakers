const reviewSwiper = new Swiper('.reviews-swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.reviews-swiper-pagination',
    clickable: true,
  },
  touchRatio: 1,
  loopedSlides: 3,
  grabCursor: true,

  loopFillGroupWithBlank: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
