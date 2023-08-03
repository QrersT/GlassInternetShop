/* // import Swiper JS
import Swiper from "swiper";
// import Swiper styles
import "swiper/css"; */
/* import "swiper/css/effect-fade"; */

/* const swiper_second = new Swiper(".swiper-main_second", {
  loop: true,
  slidesPerView: 1,
  allowTouchMove: false,
  effect: "fade",
  crossFade: true,
});

const swiper = new Swiper(".swiper-main", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "fade",
  crossFade: true,
  thumbs: {
    swiper: swiper_second,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
}); */
/* import "swiper/css"; */
/* import "swiper/css/effect-fade"; */

const swiper = new Swiper(".main-slider__slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 1,
  effect: "fade",
  crossFade: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//-----------------------------------------------------------------
