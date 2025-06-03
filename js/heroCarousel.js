// heroCarousel.js
document.addEventListener('DOMContentLoaded', () => {
  // Get carousel elements
  const carouselContainer = document.querySelector('.hero-crousel-container');
  const carouselItems = document.querySelectorAll('.hero-crousel-item');
  const prevButton = document.querySelector('.carousel-move.move-left');
  const nextButton = document.querySelector('.carousel-move.move-right');
  const dots = document.querySelectorAll('.hero-crousel-circle');

  let currentIndex = 0;
  const totalItems = carouselItems.length;

  if (totalItems === 0) return; // Exit if no carousel items found

  // Function to update carousel position
  function updateCarousel() {
    // Remove active class from all items and dots
    carouselItems.forEach((item) => item.classList.remove('active'));
    dots.forEach((dot) => dot.classList.remove('active'));

    // Add active class to current item and dot
    carouselItems[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');

    // Scroll to current item
    carouselItems[currentIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    if (index < 0) {
      currentIndex = totalItems - 1;
    } else if (index >= totalItems) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    updateCarousel();
  }

  // Event listeners for navigation buttons
  if (prevButton) {
    prevButton.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  }

  // Event listeners for dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });

  // Handle keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      goToSlide(currentIndex + 1);
    }
  });

  // Handle swipe events for touch devices
  let touchStartX = 0;
  let touchEndX = 0;

  carouselContainer.addEventListener(
    'touchstart',
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  carouselContainer.addEventListener(
    'touchend',
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  function handleSwipe() {
    const swipeThreshold = 25; // Minimum distance of swipe to trigger slide change
    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        // Swipe left - go to next slide
        if (currentIndex + 1 >= totalItems) return;
        goToSlide(currentIndex + 1);
      } else {
        // Swipe right - go to previous slide
        if (currentIndex - 1 < 0) return;
        goToSlide(currentIndex - 1);
      }
    }
  }

  window.addEventListener('resize', () => {
    updateCarousel();
  });
});
