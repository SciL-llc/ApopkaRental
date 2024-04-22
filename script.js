let topSwiper = new Swiper(".swiper.is-top", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
      longSwipe: false,
    },
    loop: true,
    followFinger: false,
  });
  
  let bottomSwiper = new Swiper(".swiper.bottom", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",
    pagination: {
      el: ".swiper-pagination",
    },
  });
  topSwiper.controller.control = bottomSwiper;
  bottomSwiper.controller.control = topSwiper;
  