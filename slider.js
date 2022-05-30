class Slider {
  constructor(parent) {
    this._images = [];
    this._parent = document.querySelector(parent);
    this._cardsOnView = 0;
    this._UpdateView();
    this._Init();
  }

  _Init() {
    for (let i = 0; i < 10; i++) {
      let card = document.createElement("div");
      let img = document.createElement("img");
      this._images.push(`./media/logo_${i}.png`);
      img.src = this._images[i];
      card.append(img);
      card.classList.add("card");

      i < this._cardsOnView
        ? card.classList.add(`--card-${i}`)
        : card.classList.add(`--display-none`);
      this._parent.appendChild(card);
    }
  }

  _UpdateView() {
    if (window.innerWidth >= 800) {
      this._cardsOnView = 7;
    } else {
      this._cardsOnView = 4;
    }
  }

  _NextCard() {
    for (let i = 0; i < this._parent.children.length; i++) {
      let curChild = this._parent.children[i];
      if (i === 0) {
        curChild.classList.add(`--display-none`);
        curChild.classList.remove(`--card-${i}`);
      }
      if (i === this._cardsOnView) {
        curChild.classList.remove(`--display-none`);
        curChild.classList.add(`--card-${this._cardsOnView - 1}`);
      }
      if (i > 0 && i < this._cardsOnView) {
        curChild.classList.add(`--card-${i - 1}`);
        curChild.classList.remove(`--card-${i}`);
      }
    }
    let clone = this._parent.children[0].cloneNode(true);
    this._parent.removeChild(this._parent.children[0]);
    document.querySelector("html").offsetHeight;
    this._parent.append(clone);
  }

  _PrevCard() {
    for (let i = 0; i < this._parent.children.length; i++) {
      let curChild = this._parent.children[i];
      if (i === this._parent.children.length - 1) {
        curChild.classList.remove(`--display-none`);
        curChild.classList.add(`--card-0`);
      }
      if (i === this._cardsOnView - 1) {
        curChild.classList.add(`--display-none`);
        curChild.classList.remove(`--card-${this._cardsOnView - 1}`);
      }
      if (i >= 0 && i < this._cardsOnView - 1) {
        curChild.classList.add(`--card-${i + 1}`);
        curChild.classList.remove(`--card-${i}`);
      }
    }
    let clone =
      this._parent.children[this._parent.children.length - 1].cloneNode(true);
    this._parent.removeChild(
      this._parent.children[this._parent.children.length - 1]
    );
    document.querySelector("html").offsetHeight;
    this._parent.prepend(clone);
  }

  _FindParent(parent) {
    return document.querySelector(parent);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const slider = new Slider(".cards");

  const btnNext = document.querySelector(".next-card");
  const btnPrev = document.querySelector(".prev-card");
  btnNext.addEventListener("click", () => {
    slider._NextCard();
  });
  btnPrev.addEventListener("click", () => {
    slider._PrevCard();
  });
  window.addEventListener("resize", () => {
    slider._UpdateView();
  });
});
