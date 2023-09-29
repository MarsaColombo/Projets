// Menu show and hidden
const navMenu = document.getElementById("navbar"),
  toogleMenu = document.getElementById("toogleMenu"),
  closeMenu = document.getElementById("nav-close");

// Load without the navbar
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth <= 648) {
    navMenu.classList.add("hide");
  } else {
    navMenu.classList.remove("hide");
    toogleMenu.classList.add("hide");
    closeMenu.classList.add("hide");
  }
});
// Show

toogleMenu.addEventListener("click", () => {
  navMenu.classList.remove("hide");
  toogleMenu.classList.add("hide");
});
// Hidden
closeMenu.addEventListener("click", () => {
  navMenu.classList.add("hide");
  toogleMenu.classList.remove("hide");
});
// Active and Remove Menu

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  if (window.innerWidth >= 648) {
    return;
  }
  // Active link
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  // Remove menu mobile
  navMenu.classList.add("hide");
  toogleMenu.classList.remove("hide");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
