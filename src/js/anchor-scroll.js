function onScrollHeader(px) {
    const screenSize = window.screen.width;
    if (screenSize >= px) {
      scrollY <= 70
        ? document.getElementById('header').classList.remove('header-scroll')
        : document.getElementById('header').classList.add('header-scroll');
    }
  }
  window.onscroll = function () {
    onScrollHeader(768);
  };