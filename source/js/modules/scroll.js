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

  let scrollSplitLinkBanner = document.querySelector(`.js-scroll-split-banner`);
  let scrollMultLinkBanner = document.querySelector(`.js-scroll-mult-banner`);
  let scrollAircleanerLinkBanner = document.querySelector(`.js-scroll-aircleaner-banner`);
  let scrollProgramLinkBanner = document.querySelector(`.js-scroll-program-banner`);

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

  scrollSplitLinkBanner.addEventListener(`click`, handleAnchorClick);
  scrollMultLinkBanner.addEventListener(`click`, handleAnchorClick);
  scrollAircleanerLinkBanner.addEventListener(`click`, handleAnchorClick);
  scrollProgramLinkBanner.addEventListener(`click`, handleAnchorClick);
})();
