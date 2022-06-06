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
  const responseEx = await fetch(
    "https://lucaszago.dk/vlp/wp-json/wp/v2/exhibitions"
  );
  const dataEx = await responseEx.json();
  dataAppend(data);
  exhibitionAppend(dataEx);
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

/*

<template id="curExTemp">
        <div class="container">
          <h2 class="fs_largest">Tak Tak</h2>
          <span class="on-view">On View</span>
          <span class="view-dates">29.04.2022.-13.05.2022.</span>
          <span class="curated-tag">Curated by Marta Czyż and Vi Lever På Polsk</span>
          <a href="./exhibition.html" class="button">View the exhibition</a>
          <img src="./media/texture1.png" alt="texture" class="deco-texture">
        </div>
        <img src="./media/gallery-image.jpg" alt="Exhibition Poster">
      </template>


*/

function exhibitionAppend(data) {
  let bool = false;
  const parent = document.querySelector(".exhibition-wrapper");
  const temp = document.querySelector("#curExTemp").content;
  const clone = temp.cloneNode(true);
  data.forEach((el) => {
    if (Number(el["on-view"])) {
      clone.querySelector("h2").textContent = el.title.rendered;
      clone.querySelector(".curated-tag").textContent = el["curated_by"];
      clone.querySelector(
        ".view-dates"
      ).textContent = `${el["start-date"]} - ${el["end-date"]}`;

      parent.append(clone);
      bool = true;
    }
  });
  if (!bool) {
    document.querySelector("#curExhibition").remove();
  }
}
