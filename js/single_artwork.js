const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get("id");
const url = `https://lucaszago.dk/vlp/wp-json/wp/v2/artworks?include=${query}`;

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
    hideLoader();
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProduct(product) {
  document.querySelector("#title_single_art").textContent =
    product.title.rendered;
  document.querySelector("#artists_name_single_art").textContent =
    product.artists;
  document.querySelector("#origin_single_art").textContent = product.origin;
  document.querySelector(
    "#material_single_art"
  ).textContent = `MATERIALS: ${product.materials}`;
  document.querySelector(
    "#dimensions_single_art"
  ).textContent = `DIMENSIONS: ${product.dimensions}`;
  document.querySelector(
    "#price_single_art"
  ).textContent = `Price: ${product.price}DKK`;
  document.querySelector(
    "#date_single_art"
  ).textContent = `YEAR: ${product.year_created}`;
  document.querySelector("#text_single_art").textContent = product.description;

  // document.querySelector("img").src = product.images[0].guid;
  // copy
  //   .querySelector("a")
  //   .setAttribute("href", `single_artwork.html?id=${product.id}`);
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
  // const parent = document.querySelector(".artworks_grid");
  // // append
  // parent.appendChild(copy);
}
