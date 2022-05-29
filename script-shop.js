window.addEventListener("DOMContentLoaded", init);

function init(event) {
  loadArtworks();
}

async function loadArtworks() {
  const response = await fetch(
    "https://themotelmellow.com/"
  );
  console.log("lacj-response", response);
  const thedata = await response.json();
  displayData(thedata);
}

function displayData(artworks) {
  console.log(artworks);
  artworks.forEach((artwork) => {
    console.log(artwork.title.rendered);
    const templateEl = document.querySelector("template").content;
    const cloneEl = templateEl.cloneNode(true);


    cloneEl.querySelector(".artworkimg").src =
      artwork._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium_large.source_url;
    cloneEl.querySelector("h2").textContent = artwork.title;
    cloneEl.querySelector("h4").textContent =
      artwork.artist;
    cloneEl.querySelector("h3").textContent = artwork.date_created;
    let priceEl = cloneEl.querySelector(".price span");
    let priceText = artwork.price;

    cloneEl.querySelector(".pricespan").textContent = artwork.price+' '+'DKK';
    cloneEl.querySelector(".instock span").textContent = artwork.in_stock;


    const parentEl = document.querySelector("main");
    parentEl.appendChild(cloneEl);
  });

}