const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
const navBarSection = document.querySelector("#navbar-section");
const navLinks = document.querySelector("#navbar");
let linksHidden = true;

menuBtn.addEventListener("click", () => {
  if (!menuOpen && linksHidden) {
    menuBtn.classList.add("open");
    navLinks.classList.remove("hidden");
    navLinks.classList.add("visible");
    navBarSection.classList.toggle("nav-opacity");
    menuOpen = true;
    linksHidden = false;
  } else {
    navBarSection.classList.toggle("nav-opacity");
    menuBtn.classList.remove("open");
    navLinks.classList.remove("visible");
    navLinks.classList.add("hidden");
    menuOpen = false;
    linksHidden = true;
  }
});
