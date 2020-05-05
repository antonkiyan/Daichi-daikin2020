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
