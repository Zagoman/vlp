const images = [];
const cardsParent = document.querySelector(".cards");
const cardsChildren = cardsParent.children;
const cards = document.querySelectorAll(".card");
const btnNext = document.querySelector(".next-card");
const btnPrev = document.querySelector(".prev-card");
let cardsOnView;
updateView();
window.addEventListener("resize", updateView);
btnNext.addEventListener("click", nextCard);
btnPrev.addEventListener("click", prevCard);
for (let i = 0; i < 10; i++) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  images.push(`./media/logo_${i}.png`);
  img.src = images[i];
  card.append(img);
  card.classList.add("card");

  i < cardsOnView
    ? card.classList.add(`--card-${i}`)
    : card.classList.add(`--display-none`);
  cardsParent.appendChild(card);
}

function updateView() {
  if (window.innerWidth >= 800) {
    cardsOnView = 7;
  } else {
    cardsOnView = 4;
  }
}
function nextCard() {
  for (let i = 0; i < cardsChildren.length; i++) {
    let curChild = cardsChildren[i];
    if (i === 0) {
      curChild.classList.add(`--display-none`);
      curChild.classList.remove(`--card-${i}`);
    }
    if (i === cardsOnView) {
      curChild.classList.remove(`--display-none`);
      curChild.classList.add(`--card-${cardsOnView - 1}`);
    }
    if (i > 0 && i < cardsOnView) {
      curChild.classList.add(`--card-${i - 1}`);
      curChild.classList.remove(`--card-${i}`);
    }
  }
  let clone = cardsChildren[0].cloneNode(true);
  cardsParent.removeChild(cardsChildren[0]);
  document.querySelector("html").offsetHeight;
  cardsParent.append(clone);
}
function prevCard() {
  for (let i = 0; i < cardsChildren.length; i++) {
    let curChild = cardsChildren[i];
    if (i === cardsChildren.length - 1) {
      curChild.classList.remove(`--display-none`);
      curChild.classList.add(`--card-0`);
    }
    if (i === cardsOnView - 1) {
      curChild.classList.add(`--display-none`);
      curChild.classList.remove(`--card-${cardsOnView - 1}`);
    }
    if (i >= 0 && i < cardsOnView - 1) {
      curChild.classList.add(`--card-${i + 1}`);
      curChild.classList.remove(`--card-${i}`);
    }
  }
  let clone = cardsChildren[cardsChildren.length - 1].cloneNode(true);
  cardsParent.removeChild(cardsChildren[cardsChildren.length - 1]);
  document.querySelector("html").offsetHeight;
  cardsParent.prepend(clone);
}
