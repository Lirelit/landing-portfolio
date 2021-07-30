// header
const burgerEl = document.querySelector('.header__burger'); 
const menuWrapEl = document.querySelector('.header__menu-container');
const langEl = document.querySelector('.header__lang-switch');

burgerEl.addEventListener('click', function(event) {
  menuWrapEl.classList.toggle('header__menu-container_visible');
  burgerEl.classList.toggle('burger_closed');
  document.body.classList.toggle('content-hidden');
  langEl.classList.toggle('header__lang-switch_visible');
});
 