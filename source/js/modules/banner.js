(function () {
  var slider = {};

  function initFreeSwiper() {
    return new Swiper('.banner__container', {
      freeMode: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.banner__next',
        prevEl: '.banner__prev',
      }
    });
  }

  function initSingleSwiper() {
    return new Swiper('.banner__container', {
      navigation: {
        nextEl: '.banner__next',
        prevEl: '.banner__prev',
      }
    });
  }

  var isTablet = function () {
    return window.matchMedia("(min-width: 768px)").matches
      && window.matchMedia("(max-width: 1023px)").matches;
  };

  var isMobile = function () {
    return window.matchMedia("(max-width: 767px)").matches;
  }

  var isOutOfTablet = !isTablet();
  var isOutOfMobile = !isMobile();

  //var slider = isTablet()
    // ? initFreeSwiper()
    // : initSingleSwiper();


  var onResize = function () {
    if (isOutOfTablet && isTablet()) {
      //slider.destroy(true, true);
      //slider = initFreeSwiper();
      isOutOfTablet = false;
      console.log('inTablet');
      slider.destroy(true, true);
      slider = initFreeSwiper();
    }

    if (!isOutOfTablet && !isTablet()) {
      //slider.destroy(true, true);
      //slider = initSingleSwiper();
      isOutOfTablet = true;
      console.log('outTablet');
      slider.destroy(true, true);
    }

    if (isOutOfMobile && isMobile()) {
      //slider.destroy(true, true);
      //slider = initFreeSwiper();
      isOutOfMobile = false;
      console.log('inMobile');
      slider = initSingleSwiper();
    }

    if (!isOutOfMobile && !isMobile()) {
      //slider.destroy(true, true);
      //slider = initSingleSwiper();
      isOutOfMobile = true;
      console.log('outMobile');
      //slider.destroy(true, true);
    }
  }

  if (isTablet()) {
    slider = initFreeSwiper();
  }

  if (isMobile()) {
    slider = initSingleSwiper();
  }

  window.addEventListener('resize', onResize);
})();
