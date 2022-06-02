{
  /* <section>
    <div class="marquee-wrapper">
        <h2 class="marquee" id="about-marquee"></h2>
        <div class="marquee2" id="about-marquee2"></div>
        <div class="marquee-title" id="about-title">About</div>
    </div>
   </section> 
*/
}

class Marquee {
  constructor(title, marquee1, marquee2) {
    this._title = title;
    this._marquee = marquee1;
    this._marquee2 = marquee2;
    this._Init();
  }

  _Init() {
    for (
      let i = 0;
      i < Math.floor(window.innerWidth / this._title.offsetWidth);
      i++
    ) {
      let newSpan = document.createElement("span");
      let newSpan2 = document.createElement("span");
      newSpan.textContent = this._title.textContent;
      newSpan2.textContent = this._title.textContent;
      this._marquee.append(newSpan);
      this._marquee2.append(newSpan2);
    }
  }
}
