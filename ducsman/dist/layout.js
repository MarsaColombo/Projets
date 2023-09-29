let Navbar = document.getElementById("navbar");

function changeNavbar() {
  window.addEventListener("resize", () => {
    if (innerWidth >= "640px") {
      Navbar.classList.add("nav-trabsform");
    } else {
      Navbar.classList.remove("nav-transform");
    }
    console.log(screen.width);
  });
}
changeNavbar();
