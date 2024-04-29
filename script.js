let topSwiper = new Swiper(".swiper.is-top", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
      longSwipe: false,
    },
    loop: true,
    followFinger: false,
    navigation: {
      nextEl:".arrow.is-right",
      prevEl:".arrow.is-left"
    }
  });
  
  let bottomSwiper = new Swiper(".swiper.bottom", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl:".arrow.is-right",
      prevEl:".arrow.is-left"
    }
  });
  topSwiper.controller.control = bottomSwiper;
  bottomSwiper.controller.control = topSwiper;
  