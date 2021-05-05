'use strict';

function runMobileMenu() {
 const body = document.querySelector('body');
 const header = document.querySelector('.header');
 const btnHamburger = document.querySelector('.btn-hamburger');
 const overlay = document.querySelector('.overlay');
 const fadeEls = document.querySelectorAll('.has-fade');

 // Hamburger Menu

 function hamburgerToggle() {
  // Close burger
  if (header.classList.contains('open')) {
   body.classList.remove('no-scroll');
   header.classList.remove('open');
   fadeEls.forEach(function (el) {
    el.classList.remove('fade-in');
    el.classList.add('fade-out');
   });
  }
  // Open burger
  else {
   body.classList.add('no-scroll');
   header.classList.add('open');
   fadeEls.forEach(function (el) {
    el.classList.remove('fade-out');
    el.classList.add('fade-in');
   });
  }
 }

 btnHamburger.addEventListener('click', hamburgerToggle);
}
runMobileMenu();

export default runMobileMenu;
