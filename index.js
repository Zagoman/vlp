const title = document.querySelector("#about-title");
const marquee1 = document.querySelector("#about-marquee");
const marquee2 = document.querySelector("#about-marquee2");
const aboutMarquee = new Marquee(title, marquee1, marquee2);

const pastTitle = document.querySelector("#past-title");
const pastMarquee1 = document.querySelector("#past-marquee");
const pastMarquee2 = document.querySelector("#past-marquee2");
const pastMarquee = new Marquee(pastTitle, pastMarquee1, pastMarquee2);

/* const loader = document.querySelector(".loader");
window.addEventListener("load", disappear);

function disappear() {
  loader.classList.add(".disappear");
  console.log("disappearworking");
} */
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.classList.add("#deletethis");
  console.log("working");
});
