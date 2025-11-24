document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll (optional)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Hamburger toggle logic
  var toggle = document.getElementById('menu-toggle');
  var navMenu = document.querySelector('nav ul');
  if (toggle && navMenu) {
    toggle.addEventListener('click', function () {
      navMenu.classList.toggle('show');
    });
  }
});
