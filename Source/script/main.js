
import Swiper, { Navigation, Pagination } from '../../Gulp/node_modules/swiper/swiper-bundle.esm.js';

const homeSwiper = new Swiper(".section-home-carousel", {
    navigation: {
        nextEl: '.home-banner-right',
        prevEl: '.home-banner-left',
    
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 10,
      loop: false,
      grabCursor: true,
    
        breakpoints: {
          320: {
            slidesPerView: 1,
            //slidesPerGroup: 1,
            watchOverflow: false, 
    
          },
          1440: {
            //loopedSlides: 9,
            slidesPerView: 1,
            watchOverflow: false,
    
            //slidesPerGroup: 1,
            //slidesPerColumn: 2,
            autoHeight: false,
          }
        },
})