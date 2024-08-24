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

const courseSwiper = new Swiper('.course-swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 'auto',
});

let cardMobileSwiper = null;
function handleResize() {
  const screenWidth = window.innerWidth;

  if (!cardMobileSwiper && screenWidth < 992) {
    cardMobileSwiper = new Swiper('.card-mobile-swiper', {
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
    });
  }

  if (cardMobileSwiper?.length > 0 && screenWidth > 992) {
    cardMobileSwiper.forEach((swiper) => {
      swiper.slideTo(0);
      swiper.destroy(true, true);
      cardMobileSwiper = null;
    });
  }
}

window.addEventListener('load', handleResize);
window.addEventListener('resize', handleResize);
