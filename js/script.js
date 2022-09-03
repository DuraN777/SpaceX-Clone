      // Hamburger Menu
const btn = document.getElementById('menu-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.mobile-main-menu');

const h4 = document.querySelectorAll('h4');
const h2 = document.querySelectorAll('h2');
const newBtn = document.querySelectorAll('.btn')

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

      //Section-Inner fadeIn Animation

// h4 animation
window.addEventListener('scroll', animateH4);

function animateEelement(tags) {
  const triggerBottom = window.innerHeight / 1;

  tags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top;
    if(tagTop < triggerBottom){
      tag.classList.add('show')
    } 
  })
}

animateH4();
function animateH4() {
  const triggerBottom = window.innerHeight * 1.1;

  h4.forEach(h => {
  const hTop = h.getBoundingClientRect().top;
    if(hTop < triggerBottom) {
    h.classList.add('show');
    }
  })
}

// h2 animation
window.addEventListener('scroll', animateH2);
animateH2();
function animateH2() {
  const triggerBottom = window.innerHeight * 1.1;

  h2.forEach(h => {
  const hTop = h.getBoundingClientRect().top;
    if(hTop < triggerBottom) {
    h.classList.add('show');
    }
  })
}

// rewatch
window.addEventListener('scroll', animateBtn);
animateBtn();
function animateBtn() {
  const triggerBottom = window.innerHeight * 1.1;

  newBtn.forEach(btn => {
  const btnTop = btn.getBoundingClientRect().top;
    if(btnTop < triggerBottom) {
    btn.classList.add('show');
    }
  })
}