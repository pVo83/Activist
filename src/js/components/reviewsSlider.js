import Swiper, { Navigation, Keyboard, Mousewheel } from "swiper";
Swiper.use([Navigation, Keyboard, Mousewheel]);
const swiper = new Swiper(".reviewsSlider", {
  slidesPerView: 1,
  spaceBetween: 24,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    forceToAxis: true,
  },
  freeMode: true,
  loop: true,
  speed: 700,
  navigation: {
    nextEl: ".reviews__slider-button--next",
    prevEl: ".reviews__slider-button--prev",
  },
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    575: {
      slidesPerView: 1.2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
  },
});
