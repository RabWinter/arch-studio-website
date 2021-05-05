'use strict';

function slider() {
 const heroSlider = document.querySelector('.hero__slider');
 const slides = Array.from(heroSlider.children);
 const heroBtnContainer = document.querySelector('.hero__buttons');
 const heroBtns = Array.from(heroBtnContainer.children);
 const currentSlide = heroSlider.querySelector('.current-slide');

 // Position slides in container
 slides.forEach((slide, index) => {
  slide.style.left = 100 * index + '%';
 });

 // Navigate slides
 function goToSlide(heroSlider, currentSlide, targetSlide) {
  heroSlider.style.transform = 'translateX(-' + targetSlide.style.left;
  heroSlider.style.transition = '.7s';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
 }

 heroBtnContainer.addEventListener('click', (e) => {
  const targetBtn = e.target.closest('button');
  const targetIndex = heroBtns.findIndex((btn) => btn === targetBtn);
  const targetSlide = slides[targetIndex];
  const currentBtn = heroBtnContainer.querySelector('.current-slide');
  currentBtn.classList.remove('current-slide');
  targetBtn.classList.add('current-slide');

  goToSlide(heroSlider, currentSlide, targetSlide);
 });
}
slider();

export default slider;
