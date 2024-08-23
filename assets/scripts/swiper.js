import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const indexHeaderSwiper = new Swiper('#indexHeaderSwiper', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
});
