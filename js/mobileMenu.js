// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenu = document.querySelector('.mobile-menu');

  const menuOpenBtn = document.querySelector('.header-nav-toggle');
  const menuCloseBtn = document.querySelector('.mobile-menu-close-btn');
  const mobileMenuBackground = document.querySelector(
    '.mobile-menu-background'
  );

  // Function to open menu
  function openMenu() {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  // Function to close menu
  function closeMenu() {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Toggle menu when clicking the menu toggle button
  if (menuOpenBtn) {
    menuOpenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openMenu();
    });
  }

  // Close menu when clicking the close button
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  // Close menu when clicking on the background
  if (mobileMenuBackground) {
    mobileMenuBackground.addEventListener('click', closeMenu);
  }

  // Close menu when clicking on menu links (optional)
  const menuLinks = document.querySelectorAll('.mobile-menu-link');
  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize mobile menu
  initMobileMenu();
});
