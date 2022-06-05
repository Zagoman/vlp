const title = document.querySelector("#about-title");
const marquee1 = document.querySelector("#about-marquee");
const marquee2 = document.querySelector("#about-marquee2");
const aboutMarquee = new Marquee(title, marquee1, marquee2);

const pastTitle = document.querySelector("#past-title");
const pastMarquee1 = document.querySelector("#past-marquee");
const pastMarquee2 = document.querySelector("#past-marquee2");
const pastMarquee = new Marquee(pastTitle, pastMarquee1, pastMarquee2);

const splide = new Splide(".splide", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  gap: "1em",
  arrows: "slider",
  breakpoints: {
    600: {
      perPage: 1,
    },
    800: {
      perPage: 2,
    },
  },
});
document.addEventListener("DOMContentLoaded", dataLoad);
async function dataLoad() {
  const response = await fetch("https://lucaszago.dk/vlp/wp-json/wp/v2/event");
  const data = await response.json();
  dataAppend(data);
}
function dataAppend(data) {
  console.log(data);
  const parent = document.querySelector(".splide__list");
  data.forEach((el) => {
    console.log(el);
    el.images.forEach((ie) => {
      console.log(ie.guid);
      let liEl = document.createElement("li");
      let imgEl = document.createElement("img");

      liEl.classList.add("splide__slide");
      imgEl.src = ie.guid;

      liEl.append(imgEl);
      parent.append(liEl);
    });
  });

  splide.mount();
}
