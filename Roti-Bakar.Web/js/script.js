document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector("#hamburger-menu");
  const navbarNav = document.querySelector(".navbar-nav");

  hamburgerMenu.addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });
});

// Klik diluar sidebar untuk menghilangkan

const hamburger = document.querySelector("#humburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.container(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
