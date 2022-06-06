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
    data.forEach(showProduct);
    hideLoader();
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
  copy.querySelector("#artworks_artist").textContent = product.artists;
  copy.querySelector("#artworks_year").textContent = product.year_created;

  copy.querySelector("img").src = product.images[0].guid;
  copy
    .querySelector("a")
    .setAttribute("href", `single_artwork.html?id=${product.id}`);

  //   copy
  //     .querySelector(".bagname")
  //     .setAttribute("href", `product_view.html?id=${product.id}`);
  //   copy.querySelector(".price").textContent = "DKK " + product.price + ",00";

  //   copy.querySelector(".hoverImg").src = product.image.guid;

  //   console.log("yes");

  //   copy
  //     .querySelector("a")
  //     .setAttribute("href", `product_view.html?id=${product.id}`);

  // grab parent
  const parent = document.querySelector(".artworks_grid");
  // append
  parent.appendChild(copy);
}
