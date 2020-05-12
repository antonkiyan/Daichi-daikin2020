(function () {
  var tl = gsap.timeline();

  tl.from(".page-header__title div span", 1.8, {
    y: 110,
    ease: "power4.out",
    delay: 1,
    skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to(".page-header__overlay-item", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    })
    .to(".page-header__overlay", 0, {
      display: "none"
    })
    .to(".banner__overlay-item", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })
    .to(".banner__overlay", 0, {
      display: "none"
    })
    .from(".banner__item-image-box", 1.6, {
      scale: 1.4,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      }
    });

})();
