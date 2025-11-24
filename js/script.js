
document.addEventListener('DOMContentLoaded',function(){
  // Smooth scroll for intra-page (in case any hash links appear later)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      e.preventDefault();
      document.querySelector(a.getAttribute('href'))?.scrollIntoView({behavior:'smooth'});
    });
  });

  

// Hamburger toggle logic
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('nav ul');
  if(toggle && navMenu){
    toggle.addEventListener('click', ()=>{
      navMenu.classList.toggle('show');
    });
  }
});