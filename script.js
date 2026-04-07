document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const scrollBtn = document.getElementById('scroll-to-story');
  const storySection = document.getElementById('story');
  if (scrollBtn && storySection) {
    scrollBtn.addEventListener('click', () => {
      storySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  const carousel = document.querySelector('.carousel');
  const controls = document.querySelectorAll('.carousel-controls button');
  if (carousel && controls.length) {
    controls.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.dataset.direction === 'next') {
          const first = carousel.firstElementChild;
          if (first) {
            carousel.appendChild(first);
          }
        } else {
          const last = carousel.lastElementChild;
          if (last) {
            carousel.insertBefore(last, carousel.firstElementChild);
          }
        }
      });
    });
  }
});
