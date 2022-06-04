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

splide.mount();
