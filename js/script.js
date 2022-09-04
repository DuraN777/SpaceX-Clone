// Hamburger Menu elements
const btn = document.getElementById('menu-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.mobile-main-menu');

// Inner section elements
const h4 = document.querySelectorAll('.animateH4');
const h2 = document.querySelectorAll('h2');
const aBtn = document.querySelectorAll('.btn');

// toggle hamburger menu and hide on scroll
btn.addEventListener('click', navToggle);
window.addEventListener('scroll', scrollFunction);

// Animation on inner-section elements
window.addEventListener('scroll', ()=> addStyle(h4, 'show'));
addStyle(h4, 'show');

window.addEventListener('scroll', () => addStyle(h2, 'show'));
addStyle(h2, 'show');

window.addEventListener('scroll', () => addStyle(aBtn, 'show'));
addStyle(aBtn, 'show');

      /* Functions */

//Toggle hamburger menu
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

  /* Reusable func, iterates through node list
     and adds a style-class */
// tags =  nodeList of html elements (tags)
// style = a css class name to add to HTML element.
function addStyle(tags, style) {
  const triggerBottom = window.innerHeight * 1.1;

  tags.forEach(tag => {
    let top = tag.getBoundingClientRect().top;
    if (top < triggerBottom){
      tag.classList.add(style);
    }
  })
}

        /*  OLDER FUNCTIONS BEFORE OPTIMIZATION*/

      //Section-Inner fadeIn Animation

          // function for each tag group
// window.addEventListener('scroll', animateH4);
// animateH4();
// window.addEventListener('scroll', animateH2);
// animateH2();
// window.addEventListener('scroll', animateBtn);
// animateBtn();

  // h4 animation
// function animateH4() {
//   const triggerBottom = window.innerHeight * 1.1;

//   h4.forEach(h => {
//   const hTop = h.getBoundingClientRect().top;
//     if(hTop < triggerBottom) {
//     h.classList.add('show');
//     }
//   })
// }

  // h2 animation
// function animateH2() {
//   const triggerBottom = window.innerHeight * 1.1;

//   h2.forEach(h => {
//   const hTop = h.getBoundingClientRect().top;
//     if(hTop < triggerBottom) {
//     h.classList.add('show');
//     }
//   })
// }

  // a-tag animation
// function animateBtn() {
//   const triggerBottom = window.innerHeight * 1.1;

//   aBtn.forEach(btn => {
//   const btnTop = aBtn.getBoundingClientRect().top;
//     if(btnTop < triggerBottom) {
//     aBtn.classList.add('show');
//     }
//   })
// }

    /* A WORK IN PROGRESS */
// one function to rule them all

