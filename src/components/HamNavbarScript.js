if (document) {
  document?.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navLinks = document.querySelector('.ham-nav-menu');

    menuBtn?.addEventListener('click', function () {
      navLinks.classList.add('show-menu');
    });

    closeBtn?.addEventListener('click', function () {
      navLinks.classList.remove('show-menu');
    });
  });

}
