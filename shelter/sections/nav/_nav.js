// Mobile menu

const $toggleMenuBtn = document.querySelector('.nav__mobile-toggle');
const $menu = document.querySelector('nav .menu');
const $nav = document.querySelector('nav');
const $header = document.querySelector('header.header');
const $headerLogo = document.querySelector('.header__logo');

const mobileMenu = () => {
  $toggleMenuBtn.classList.toggle('open');
  $menu.classList.toggle('menu-mobile');
  $headerLogo.classList.toggle('header__logo--mobile-menu-open');

  if ($menu.classList.contains('menu-mobile')) {
    $menu.insertAdjacentHTML('beforebegin', '<div id="overlay"></div>');
  } else {
    $nav.removeChild(document.querySelector('#overlay'));
  }

  const headerPosition = getComputedStyle($header).position;

  if (headerPosition === 'absolute') {
    $header.style.position = 'fixed'
  } else {
    $header.style.position = '';
  }
};

// Обрабатываем клики для закрытия мобильного меню

document.body.addEventListener('click', event => {
  const target = event.target;

  // закрытие меню по нажатию на кнопку
  if (target.closest('.nav__mobile-toggle')) {
    mobileMenu();
  }

  // Закрытие меню на нажатие мимо поля меню, и не в самом меню
  if (!target.closest('.menu.menu-mobile')
    && !target.closest('.nav__mobile-toggle')
    && $menu.classList.contains('menu-mobile')) {
    mobileMenu();
  }

  // Закрытие мобильного меню при переходе по ссылке в модильном меню
  if (target.closest('.menu__link') && $menu.classList.contains('menu-mobile')) {
    mobileMenu();
  }

});

