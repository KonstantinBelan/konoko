const specials = new Swiper('.specials__wrapper', {
  loop: false,
  spaceBetween: 20,
  pagination: {
    el: '.specials__indicators',
    clickable: true,
  },
  navigation: {
    nextEl: '.specials__arrow--next',
    prevEl: '.specials__arrow--prev',
  },
})
const reviews = new Swiper('.reviews__wrapper', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  // pagination: {
  //   el: '.specials__indicators',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.reviews__arrow--next',
    prevEl: '.reviews__arrow--prev',
  },
  breakpoints: {
    240: {
      spaceBetween: 10,
    },
    640: {
      spaceBetween: 20,
    },
  },
})
const infoImg = new Swiper('.information__slider', {
  loop: true,
  spaceBetween: 0,
  navigation: {
    nextEl: '.information__arrow--next',
    prevEl: '.information__arrow--prev',
  },
})
