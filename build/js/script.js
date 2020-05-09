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

(function () {
  var navButton = document.querySelector('.page-header__nav-button');
  var underlayer = document.querySelector('.mobile-nav__underlayer');
  var nav = document.querySelector('.mobile-nav');
  var body = document.querySelector('body');

  var show = function () {
    nav.classList.add('js--show');
    body.classList.add('popup');
  };

  var hide = function () {
    nav.classList.remove('js--show');
    body.classList.remove('popup');
  }

  var onButtonClick = function () {
    show();
  }

  var onUnderlayerClick = function () {
    hide();
  }

  navButton.addEventListener('click', onButtonClick);
  underlayer.addEventListener('click', onUnderlayerClick);
})();

(function () {
  var navItemProducts = document.querySelector('.main-nav__item-name--products');
  var navItemPrograms = document.querySelector('.main-nav__item-name--programs');
  var products = document.querySelector('.main-nav__subnav-list--products');
  var programs = document.querySelector('.main-nav__subnav-list--programs');

  var onProductsClick = function () {
    var isNavVisible = window.getComputedStyle(products).visibility === 'visible';

    if (!isNavVisible && !navItemProducts.classList.contains('js--show')) {
      navItemProducts.classList.add('js--show');

      if (navItemPrograms.classList.contains('js--show')) {
        navItemPrograms.classList.remove('js--show');
      }
    }

    if (isNavVisible && navItemProducts.classList.contains('js--show')) {
      navItemProducts.classList.remove('js--show');
    }
  }

  var onProgramsClick = function () {
    var isNavVisible = window.getComputedStyle(programs).visibility === 'visible';

    if (!isNavVisible && !navItemPrograms.classList.contains('js--show')) {
      navItemPrograms.classList.add('js--show');

      if (navItemProducts.classList.contains('js--show')) {
        navItemProducts.classList.remove('js--show');
      }
    }

    if (isNavVisible && navItemPrograms.classList.contains('js--show')) {
      navItemPrograms.classList.remove('js--show');
    }
  }

  var onResize = function () {
    if (navItemProducts.classList.contains('js--show')) {
      navItemProducts.classList.remove('js--show');
    }

    if (navItemPrograms.classList.contains('js--show')) {
      navItemPrograms.classList.remove('js--show');
    }
  }

  var onOutsideClick = function (evt) {
    var target = evt.target;

    if (
      !target.classList.contains('main-nav__item-name')
      && !target.classList.contains('main-nav__subnav-list')
      && !target.classList.contains('main-nav__subnav-item')
      && !target.classList.contains('main-nav__subnav-link')
    ) {
      if (navItemProducts.classList.contains('js--show')) {
        navItemProducts.classList.remove('js--show');
      }

      if (navItemPrograms.classList.contains('js--show')) {
        navItemPrograms.classList.remove('js--show');
      }
    }
  }

  navItemProducts.addEventListener('click', onProductsClick);
  navItemPrograms.addEventListener('click', onProgramsClick);
  window.addEventListener('resize', onResize);
  document.addEventListener('click', onOutsideClick);
})();

(function () {
  var nav = document.querySelector('.mobile-nav');
  var body = document.querySelector('body');

  let scrollSplitLink = document.querySelector(`.js-scroll-split`);
  let scrollMultLink = document.querySelector(`.js-scroll-mult`);
  let scrollAircleanerLink = document.querySelector(`.js-scroll-aircleaner`);
  let scrollMyComfortLink = document.querySelector(`.js-scroll-my-comfort`);
  let scrollClimatOnlineLink = document.querySelector(`.js-scroll-climat-online`);
  let scrollMobileControlLink = document.querySelector(`.js-scroll-mobile-control`);

  let scrollSplitLinkMobile = document.querySelector(`.js-scroll-split-mobile`);
  let scrollMultLinkMobile = document.querySelector(`.js-scroll-mult-mobile`);
  let scrollAircleanerLinkMobile = document.querySelector(`.js-scroll-aircleaner-mobile`);
  let scrollMyComfortLinkMobile = document.querySelector(`.js-scroll-my-comfort-mobile`);
  let scrollClimatOnlineLinkMobile = document.querySelector(`.js-scroll-climat-online-mobile`);
  let scrollMobileControlLinkMobile = document.querySelector(`.js-scroll-mobile-control-mobile`);

  let handleAnchorClick = function () {
    event.preventDefault();
    let linkTarget = event.currentTarget.getAttribute(`href`);
    let id = linkTarget.substring(1, linkTarget.length);
    let aim = document.getElementById(id);
    aim.scrollIntoView({block: `start`, behavior: `smooth`});
  };

  let handleAnchorClickMobile = function () {
    event.preventDefault();

    nav.classList.remove('js--show');
    body.classList.remove('popup');

    let linkTarget = event.currentTarget.getAttribute(`href`);
    let id = linkTarget.substring(1, linkTarget.length);
    let aim = document.getElementById(id);
    //aim.scrollIntoView({block: `start`, behavior: `smooth`});

    setTimeout(function () {
      aim.scrollIntoView({block: `start`, behavior: `smooth`})
    }, 300);
  };

  scrollSplitLink.addEventListener(`click`, handleAnchorClick);
  scrollMultLink.addEventListener(`click`, handleAnchorClick);
  scrollAircleanerLink.addEventListener(`click`, handleAnchorClick);
  scrollMyComfortLink.addEventListener(`click`, handleAnchorClick);
  scrollClimatOnlineLink.addEventListener(`click`, handleAnchorClick);
  scrollMobileControlLink.addEventListener(`click`, handleAnchorClick);

  scrollSplitLinkMobile.addEventListener(`click`, handleAnchorClickMobile);
  scrollMultLinkMobile.addEventListener(`click`, handleAnchorClickMobile);
  scrollAircleanerLinkMobile.addEventListener(`click`, handleAnchorClickMobile);
  scrollMyComfortLinkMobile.addEventListener(`click`, handleAnchorClickMobile);
  scrollClimatOnlineLinkMobile.addEventListener(`click`, handleAnchorClickMobile);
  scrollMobileControlLinkMobile.addEventListener(`click`, handleAnchorClickMobile);
})();

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
