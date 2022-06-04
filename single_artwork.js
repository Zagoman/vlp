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
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function showProduct(product) {
  // // grab the template\
  // const template = document.querySelector("#template2").content;
  // // clone the template
  // const copy = template.cloneNode(true);
  // // change content
  document.querySelector("#title_single_art").textContent = product.origin;
  document.querySelector("#artists_name_single_art").textContent =
    product.materials;
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