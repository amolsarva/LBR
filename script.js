document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const scrollButtons = document.querySelectorAll('[data-scroll]');
  scrollButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-scroll');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const sticky = document.querySelector('.sticky-cta');
  const hero = document.getElementById('hero');
  if (sticky && hero && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            sticky.dataset.visible = 'false';
          } else {
            sticky.dataset.visible = 'true';
          }
        });
      },
      { threshold: [0, 0.4, 1] }
    );
    observer.observe(hero);
  } else if (sticky) {
    window.addEventListener('scroll', () => {
      const revealPoint = hero ? hero.offsetHeight / 2 : 200;
      sticky.dataset.visible = window.scrollY > revealPoint ? 'true' : 'false';
    });
  }
});
