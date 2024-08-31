import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const navigation = {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
};

const bulletPagination = {
  el: '.swiper-pagination',
  type: 'bullets',
};

// 課程卡片列表
const courseSwiper = new Swiper('.course-swiper', {
  modules: [Navigation],
  navigation,
  slidesPerView: 'auto',
  spaceBetween: 24,
});

// 一探究竟分類
const categorySwiper = new Swiper('#categorySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
});

/* ----- index ------ */
const indexHeaderSwiper = new Swiper('#indexHeaderSwiper', {
  modules: [Navigation, Pagination, Autoplay],
  navigation,
  pagination: bulletPagination,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
});

const indexFundraisingCategory = new Swiper('#indexFundraisingCategory', {
  modules: [Navigation],
  navigation,
  slidesPerView: 'auto',
  spaceBetween: 8,
});

const indexFundraisingList = new Swiper('#indexFundraisingList', {
  modules: [Navigation, Pagination],
  navigation,
  pagination: bulletPagination,
  slidesPerView: 'auto',
  spaceBetween: 24,
});

const indexTeacherSwiper = new Swiper('#indexTeacherSwiper', {
  modules: [Pagination],
  pagination: bulletPagination,
  slidesPerView: 'auto',
  spaceBetween: 24,
});

/* ----- course ------ */
const courseCategorySwiper = new Swiper('#courseCategorySwiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.course-list-header .button-next',
  },
  slidesPerView: 'auto',
  spaceBetween: 8,
});

const courseHotThemeSwiper = new Swiper('#courseHotThemeSwiper', {
  modules: [Navigation],
  navigation: {
    prevEl: '.course-hot-theme .button-prev',
    nextEl: '.course-hot-theme .button-next',
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    992: {
      spaceBetween: 24,
    },
  },
});
