/*

      <section id="slider">
        <div class="cards-wrapper">
          <div class="cards"></div>
        </div>
        <button class="prev-card">Prev</button>
        <button class="next-card">Next</button>
      </section>

*/

class Slider {
  constructor(parent, images) {
    this._images = images;
    this._parent = document.querySelector(parent);
    this._cardsOnView = 0;
    this._UpdateView();
    this._Init();
  }

  _Init() {
    let counter = 0;
    if (this._images.length >= 7) {
      for (let i = 0; i < this._images.length; i++) {
        let card = document.createElement("div");
        let img = document.createElement("img");
        img.src = this._images[i];
        card.append(img);
        card.classList.add("card");

        i < this._cardsOnView
          ? card.classList.add(`--card-${i}`)
          : card.classList.add(`--display-none`);
        this._parent.appendChild(card);
      }
    } else if (this._images.length < 7) {
      for (let i = 0; i < 8; i++) {
        let card = document.createElement("div");
        let img = document.createElement("img");
        if (this._images[i]) {
          img.src = this._images[i];
          card.append(img);
          card.classList.add("card");
          i < this._cardsOnView
            ? card.classList.add(`--card-${i}`)
            : card.classList.add(`--display-none`);
          this._parent.appendChild(card);
          counter++;
        } else {
          img.src = this._images[i - counter];
          card.append(img);
          card.classList.add("card");
          i < this._cardsOnView
            ? card.classList.add(`--card-${i}`)
            : card.classList.add(`--display-none`);
          this._parent.appendChild(card);
          counter++;
        }
      }
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
