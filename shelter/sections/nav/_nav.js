// Mobile menu
const isInnerPage = document.body.classList.contains('inner-page');
const $toggleMenuBtn = document.querySelector('.nav__mobile-toggle');
const $menu = document.querySelector('nav .menu');
const $nav = document.querySelector('nav');
const $header = document.querySelector('header.header');

const mobileMenu = () => {
  $toggleMenuBtn.classList.toggle('open');
  $menu.classList.toggle('menu-mobile');
  $nav.classList.toggle('mobile-open');

  const headerPosition = getComputedStyle($header).position;

  if (headerPosition === 'absolute') {
    $header.style.position = 'fixed'
  } else {
    $header.style.position = isInnerPage ? 'relative' : 'absolute';
  }
};

$toggleMenuBtn.addEventListener('click', mobileMenu);
