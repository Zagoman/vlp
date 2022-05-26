const queue = [];
const images = [];
const cardsParent = document.querySelector(".cards");
const cards = document.querySelectorAll(".card");
const btnNext = document.querySelector(".next-card");
const btnPrev = document.querySelector(".prev-card");
btnNext.addEventListener("click", nextCard);
btnPrev.addEventListener("click", prevCard);
for (let i = 0; i < 10; i++) {
  let card = document.createElement("div");
  let img = document.createElement("img");
  images.push(`./media/logo_${i + 1}.png`);
  img.src = images[i];
  card.append(img);
  card.classList.add("card");

  i < 7 ? card.classList.add(`--card-${i + 1}`) : (card.style.display = "none");
  cardsParent.appendChild(card);
}

function cardUpdate() {
  for (let i = 0; i < 10; i++) {
    cardsParent.children[i].querySelector("img").src = images[i];
    console.log(cardsParent.children);
  }
}
// for (let i = 0; i < 7; i++) {
//   images.push(`./media/logo_${i}.png`);
// }
// console.log(images);
// for (let i = 0; i < images.length; i++) {
//   cards[i].querySelector("img").src = images[i];
//   queue.push(cards[i]);
// }

// function cardUpdate() {
//   for (let i = 0; i < images.length; i++) {
//     cards[i].querySelector("img").src = images[i];
//   }
// }
function nextCard() {
  curImg = images.shift();
  images.push(curImg);
  cardUpdate();
}
function prevCard() {
  curImg = images.pop();
  images.unshift(curImg);
  cardUpdate();
}
