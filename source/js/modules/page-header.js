(function () {
  let vh = window.innerHeight * 0.01;

  // var debounce = function (onDelay, delay) {
  //   var timeoutId = 0;
  //   return function () {
  //     var params = arguments;

  //     if (timeoutId > 0) {
  //       clearTimeout(timeoutId);
  //     }

  //     var onTimeout = function () {
  //       onDelay.apply(null, params);
  //     };

  //     timeoutId = setTimeout(onTimeout, delay);
  //   };
  // };

  // var onResize = function () {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty('--vh', `${vh}px`);
  // };

  document.documentElement.style.setProperty('--vh', `${vh}px`);
  //window.addEventListener('resize', onResize);
})();
