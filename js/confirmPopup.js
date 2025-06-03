// confirmPopup.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize confirm popup
  function initConfirmPopup() {
    const confirmPopup = document.querySelector('.confirm-popup');
    const closeBtn = document.querySelector('.confirm-popup-close-btn');
    const backBtn = document.querySelector('.confirm-popup-back-btn');
    const background = document.querySelector('.confirm-popup-background');

    // Function to open popup
    function openPopup() {
      confirmPopup.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    // Function to close popup
    function closePopup() {
      confirmPopup.classList.remove('open');
      document.body.style.overflow = '';
    }

    // Close popup when clicking close button
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closePopup();
      });
    }

    // Close popup when clicking background
    if (background) {
      background.addEventListener('click', closePopup);
    }

    // Handle back to homepage button
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        closePopup();
        window.location.href = '/oleanders-host/index.html';
      });
    }

    // Close popup when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && confirmPopup.classList.contains('open')) {
        closePopup();
      }
    });

    // Make the openPopup function available globally
    window.openConfirmPopup = openPopup;
  }

  // Initialize the confirm popup
  initConfirmPopup();

  // Handle footer form submission
  const footerForm = document.querySelector('.footer-form-box-content');
  if (footerForm) {
    footerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (window.openConfirmPopup) {
        window.openConfirmPopup();
      }
      footerForm.reset();
    });
  }

  // Handle contact form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (window.openConfirmPopup) {
        window.openConfirmPopup();
      }
      contactForm.reset();
    });
  }
});
