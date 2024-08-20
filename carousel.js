document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  let currentIndex = 0;

  function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Move to the next slide every 5 seconds
  setInterval(moveToNextSlide, 5000);
});