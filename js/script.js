document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for intra-page (in case any hash links appear later)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Hamburger toggle logic
  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
});
