// import fslightbox
require('fslightbox');

// Import SwiperJs carousel/slider script
import Swiper from 'swiper/swiper-bundle';

var swiperHomepageSlider = new Swiper(".slider", {
  speed: 600,
  loop: true,
  effect: 'fade',
  
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiperTrainersSlider = new Swiper(".trainers__swiper", {
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 50,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 40,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      440: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
    }
});

var swiperTrainersSlider2 = new Swiper(".trainers__swiper-2", {
    grabCursor: true,
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      440: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40
      },
    }
});

var swiperTestimonialsSlider = new Swiper(".testimonials__swiper", {
    direction: 'horizontal',
    slidesPerView: 1,
    paginationClickable: true,
    loop: true,
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      440: {
      },
      768: {
      },
    }
});

var swiperGallery1 = new Swiper(".swiper-gallery-1", {
    slidesPerView: 1,
    loop: true,
    effect: 'coverflow',
    spaceBetween: 50,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 20,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      440: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 40
      }
    }
});

var swiperGallery2 = new Swiper(".swiper-gallery-2", {
  slidesPerView: 1,
  loop: true,
  effect: 'coverflow',
  spaceBetween: 50,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 20,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    440: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});

var swiperGallery3 = new Swiper(".swiper-gallery-3", {
  slidesPerView: 1,
  loop: true,
  effect: 'coverflow',
  spaceBetween: 50,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 20,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    440: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }
});

// Offer page - split container
const left = document.querySelector(".exercises__left");
const right = document.querySelector(".exercises__right");
const container = document.querySelector(".exercises");

if(left && right && container) {
  left.addEventListener("mouseenter", () => {
    container.classList.add("exercises__hover--left");
  });
  
  left.addEventListener("mouseleave", () => {
    container.classList.remove("exercises__hover--left");
  });
  
  right.addEventListener("mouseenter", () => {
    container.classList.add("exercises__hover--right");
  });
  
  right.addEventListener("mouseleave", () => {
    container.classList.remove("exercises__hover--right");
  });
}



// some bootstrap scripts needs popper
import '@popperjs/core';

// Import just what we need
// import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/button';
// import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/popover';
// import 'bootstrap/js/dist/scrollspy';
// import 'bootstrap/js/dist/tab';
// import 'bootstrap/js/dist/toast';
// import 'bootstrap/js/dist/tooltip';

// Custom scripts
import scrollTop from './modules/scrollTop';
import menuInDown from './modules/menuInDown';
import counterItems from './modules/counterItems';
import menuToggle from './modules/menuToggle';

// Menu handler
menuToggle();
menuInDown();

// Counter
counterItems();

// Scroll to top handler
scrollTop();

