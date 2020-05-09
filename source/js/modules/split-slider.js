(function () {
  function initPreviewSwiper(name) {
    return new Swiper(name, {
      navigation: {
        nextEl: '.split-slider__next',
        prevEl: '.split-slider__prev',
      },
      freeMode: true,
      slidesPerView: 'auto',
    });
  }

  var slplitSlider = initPreviewSwiper('.split-slider__container');
})();
