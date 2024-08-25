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

// 與 課程列表頁 共用
const courseSwiper = new Swiper('.course-swiper', {
  modules: [Navigation],
  navigation,
  slidesPerView: 'auto',
  spaceBetween: 24,
});

const indexCategorySwiper = new Swiper('#indexCategorySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 24,
});

const indexTeacherSwiper = new Swiper('#indexTeacherSwiper', {
  modules: [Pagination],
  pagination: bulletPagination,
  slidesPerView: 'auto',
  spaceBetween: 24,
});
