const urlParams = new URLSearchParams(window.location.search);
const url = `https://lucaszago.dk/vlp/wp-json/wp/v2/artworks`;
const query = urlParams.get("category");

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach(showProduct);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProduct(product) {
  // grab the template\
  const template = document.querySelector("#template").content;
  // clone the template
  const copy = template.cloneNode(true);
  // change content

  copy.querySelector(".artworks_piece_name").textContent =
    product.title.rendered;

  // copy.querySelector("#artworks_artist").textContent =
  // product.;

  // grab parent
  const parent = document.querySelector(".artworks_grid");
  // append
  parent.appendChild(copy);
}
