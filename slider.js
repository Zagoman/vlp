const queue = [];
const images = [];
const cardsParent = document.querySelector(".cards");
const cardsChildren = cardsParent.children;
const cards = document.querySelectorAll(".card");
const btnNext = document.querySelector(".next-card");
const btnPrev = document.querySelector(".prev-card");
btnNext.addEventListener("click", nextCard);
btnPrev.addEventListener("click", prevCard);
for (let i = 0; i < 10; i++) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  images.push(`./media/logo_${i}.png`);
  img.src = images[i];
  card.append(img);
  card.classList.add("card");

  i < 7
    ? card.classList.add(`--card-${i}`)
    : card.classList.add(`--display-none`);
  cardsParent.appendChild(card);
}

// function cardUpdate() {
//   for (let i = 0; i < 10; i++) {
//     cardsParent.children[i].querySelector("img").src = images[i];

//     document.querySelector("html").offsetHeight;
//     cardsParent.children[i].classList.add(`--card-${i}`);
//     console.log(cardsParent.children);
//   }
// }
function nextCard() {
  for (let i = 0; i < cardsChildren.length; i++) {
    let curChild = cardsChildren[i];
    if (i === 0) {
      curChild.classList.add(`--display-none`);
      curChild.classList.remove(`--card-${i}`);
    }
    if (i === 7) {
      curChild.classList.remove(`--display-none`);
      curChild.classList.add(`--card-6`);
    }
    if (i > 0 && i < 7) {
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
  // curImg = images.pop();
  // images.unshift(curImg);
  cardUpdate();
}
