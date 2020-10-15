// Mobile menu

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
    $header.style.position = '';
  }
};
$toggleMenuBtn.addEventListener('click', mobileMenu);



// Закрытие мобильного меню при переходе по ссылке

$menu.addEventListener('click', event => {
  const target = event.target.closest('.menu__link');
  if (target) mobileMenu();
});



// Обработка скролла страницы

document.body.addEventListener('scroll', function () {
  let scrollTop = document.body.scrollTop;

  if (scrollTop >= 150) {
    $header.classList.add('header--scroll');
  } else {
    $header.classList.remove('header--scroll');
  }
});


