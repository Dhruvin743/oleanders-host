// Initial load
document.addEventListener('DOMContentLoaded', async () => {
  const headerContainer = document.querySelector('.header-container');

  // Set up event delegation for header clicks
  headerContainer.addEventListener('click', (e) => {
    const dropdownToggle = e.target.closest('.dropdown-toggle');

    // If clicking on the dropdown toggle
    if (dropdownToggle) {
      e.preventDefault();
      e.stopPropagation();
      const parentItem = dropdownToggle.closest('.header-nav-item');
      const isActive = parentItem.classList.contains('open');

      // Toggle current dropdown
      parentItem.classList.toggle('open', !isActive);
      return;
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-nav-item.has-dropdown')) {
      document.querySelectorAll('.header-nav-item').forEach((item) => {
        if (item.classList.contains('has-dropdown')) {
          item.classList.remove('open');
        }
      });
    }
  });

  //  add accordion functionality
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', (e) => {
      // Close all other accordion items
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      if (!item.classList.contains('active')) {
        item.classList.add('active');

        const image = item.querySelector('img').src;
        const text = item.querySelector('span').textContent;
        const imageElement = document.querySelector('.accordion-display-image');
        imageElement.src = image;
        const textElement = document.querySelector('.accordion-display-text');
        textElement.textContent = text;
      }
    });
  });

  const backToTopButton = document.querySelector('.back-to-top');
  const pageContainer = document.querySelector('.container');

  backToTopButton.addEventListener('click', () => {
    pageContainer.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
