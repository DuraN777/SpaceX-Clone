const btn = document.getElementById('menu-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.mobile-main-menu');

btn.addEventListener('click', navToggle);

window.addEventListener('scroll', scrollFunction);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  menu.classList.toggle('show-menu');
}

// Hide Menu on Scroll
function scrollFunction() {
  btn.classList.remove('open');
  overlay.classList.remove('overlay-show');
  menu.classList.remove('show-menu');
}
