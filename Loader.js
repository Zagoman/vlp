const preloader = document.createElement("div");
const bodyEl = document.querySelector("body");
const preloaderImage = document.createElement("img");
preloader.classList.add("preloader");
preloaderImage.src = "./media/vlp-logo.svg";
preloaderImage.alt = "Preloader";
bodyEl.classList.add("overflow--hidden");

preloader.append(preloaderImage);
bodyEl.append(preloader);
function hideLoader() {
  setTimeout(() => {
    preloader.classList.add("preloader--hide");
    bodyEl.classList.remove("overflow--hidden");
  }, 800);

  setTimeout(() => {
    preloader.remove();
  }, 1600);
}
