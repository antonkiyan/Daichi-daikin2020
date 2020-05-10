(function () {
  function initPreviewSwiper() {
    return new Swiper('.aircleaner__container', {
      freeMode: true,
      slidesPerView: 'auto',
    });
  }

  var slider = {};

  var isTablet = function () {
    return window.matchMedia("(max-width: 1023px)").matches;
  };

  var isOutOfTablet = !isTablet();

  var onResize = function () {
    if (isOutOfTablet && isTablet()) {
      slider = initPreviewSwiper();
      isOutOfTablet = false;
    }

    if (!isOutOfTablet && !isTablet()) {
      slider.destroy(true, true);
      isOutOfTablet = true;
    }
  };

  if (isTablet()) {
    slider = initPreviewSwiper();
  }

  window.addEventListener('resize', onResize);
})();
