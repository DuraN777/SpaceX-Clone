const btn = document.getElementById('menu-btn');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', navToggle);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
}
