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
