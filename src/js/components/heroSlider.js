import Swiper, { Navigation, Pagination, Keyboard, Mousewheel } from "swiper";
Swiper.use([Navigation, Pagination, Keyboard, Mousewheel]);
const swiper = new Swiper(".heroSlider", {
  slidesPerView: 1,
  spaceBetween: 0,
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
    nextEl: ".hero__slider-button--next",
    prevEl: ".hero__slider-button--prev",
  },
  pagination: {
    el: ".hero__pagination",
    clickable: true,
  },
});