document.addEventListener("DOMContentLoaded", function () {

  // mobile menu

  const $body = document.body;
  const $toggleMenuBtn = document.querySelector('.nav__mobile-toggle');
  const $menu = document.querySelector('nav .menu');
  const $nav = document.querySelector('nav');
  const $header = document.querySelector('header.header');


  const mobileMenu = () => {
    $toggleMenuBtn.classList.toggle('open');
    $menu.classList.toggle('menu-mobile');
    $nav.classList.toggle('mobile-open');
    const headerPosition = getComputedStyle($header).position;

    const isBodyInner = $body.classList.contains('inner-page');
    console.log(isBodyInner);


    if (headerPosition === 'absolute') {
      $header.style.position = 'fixed'
    } else {
      if (isBodyInner) {
        $header.style.position = 'relative'
      } else {
        $header.style.position = 'absolute'
      }

    }
  };

  $toggleMenuBtn.addEventListener('click', mobileMenu);

});
