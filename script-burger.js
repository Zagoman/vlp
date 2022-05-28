const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
const navLinks = document.querySelector("#nav-links");
let linksHidden = true;


menuBtn.addEventListener("click", () => {
    if(!menuOpen && linksHidden) {
        menuBtn.classList.add("open");
        navLinks.classList.remove("hidden");
        menuOpen = true;
        linksHidden = false;
    } else {
        menuBtn.classList.remove("open");
        navLinks.classList.add("hidden");
        menuOpen = false;
        linksHidden = true;
    }
});

