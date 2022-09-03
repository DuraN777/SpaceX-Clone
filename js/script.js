// Hamburger Menu elements
const btn = document.getElementById('menu-btn');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.mobile-main-menu');

// Inner section elements
const h4 = document.querySelectorAll('.animateH4');
const h2 = document.querySelectorAll('h2');
const newBtn = document.querySelectorAll('.btn');

// toggle hamburger menu and hide on scroll
btn.addEventListener('click', navToggle);
window.addEventListener('scroll', scrollFunction);

    // function for each tag group
// window.addEventListener('scroll', animateH4);
// animateH4();
// window.addEventListener('scroll', animateH2);
// animateH2();
// window.addEventListener('scroll', animateBtn);
// animateBtn();

// one function to rule them all
window.addEventListener('scroll', animateTag(h4));
animateTag(h4);
window.addEventListener('scroll', animateTag(h2));
animateTag(h2);
window.addEventListener('scroll', animateTag(newBtn));
animateTag(newBtn);

function animateTag(tags) {
  const triggerBottom = window.innerHeight * 1.1;

  tags.forEach((tag) => {
  let tagTop = tag.getBoundingClientRect().top;
    if(tagTop < triggerBottom) {
      tag.classList.add('show');
    }
  })
}

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

      //Section-Inner fadeIn Animation
// h4 animation
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
function animateH2() {
  const triggerBottom = window.innerHeight * 1.1;

  h2.forEach(h => {
  const hTop = h.getBoundingClientRect().top;
    if(hTop < triggerBottom) {
    h.classList.add('show');
    }
  })
}

// a-tag animation
function animateBtn() {
  const triggerBottom = window.innerHeight * 1.1;

  newBtn.forEach(btn => {
  const btnTop = btn.getBoundingClientRect().top;
    if(btnTop < triggerBottom) {
    btn.classList.add('show');
    }
  })
}


// function animateTag(tags) {
//   const triggerBottom = window.innerHeight * 1.1;

//   tags.forEach((tag) => {
//   let tagTop = tag.getBoundingClientRect().top;
//     if(tagTop < triggerBottom) {
//       tag.classList.add('show');
//     }
//   })
// }
