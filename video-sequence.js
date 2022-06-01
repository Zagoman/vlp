const btnNext = document.querySelector(".button-next");
const btnPrev = document.querySelector(".button-prev");
const btnEnter = document.querySelector(".button-enter");
const parent = document.querySelector(".hero-section");
const pages = {
  home: "./index.html",
  about: "./about.html",
  exhibitions: "./exhibitions.html",
  contact: "./contact.html",
};
let canvas;
let video;
let videoSrcs = ["1_video.mp4"];
let curId = 0;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent(parent);
  background(110);
  video = createVideo("./media/" + videoSrcs[0], vidLoad);
  for (let i = 2; i <= 7; i++) {
    videoSrcs.push(`${i}_video.mp4`);
  }
  video.hide();
  updateUI();
}

function draw() {
  image(video, 0, 0, width, height);
}
function vidLoad() {
  video.size(window.innerWidth, window.innerHeight);
  video.mute = true;
  if (!video.src.includes(videoSrcs[1])) {
    video.volume(0);
    video.loop();
  } else {
    video.play();
    video.onended(nexVid);
  }
}
function nexVid() {
  if (curId < 6) {
    curId++;
  } else {
    curId = 2;
  }
  video.remove();
  video = createVideo("./media/" + videoSrcs[curId], vidLoad);
  video.hide();
  updateUI();
}
function prevVid() {
  if (curId > 2) {
    curId--;
  } else {
    curId = 6;
  }
  video.remove();
  video = createVideo("./media/" + videoSrcs[curId], vidLoad);
  video.hide();
  updateUI();
}
function updateUI() {
  switch (curId) {
    case 0:
      // btnEnter.href = pages.home
      btnPrev.classList.add("--display-none");
      btnNext.classList.add("--display-none");
      btnEnter.addEventListener("click", nexVid);
      break;
    case 1:
      btnEnter.removeEventListener("click", nexVid, false);
      btnEnter.classList.add("--display-none");
      break;
    case 2:
      if (btnPrev.classList.contains("--display-none")) {
        btnPrev.classList.remove("--display-none");
        btnNext.classList.remove("--display-none");
        btnEnter.classList.remove("--display-none");
      }
      btnEnter.href = pages.contact;
      btnEnter.textContent = "Enter Contact";
      break;
    case 3:
      btnEnter.href = pages.exhibitions;
      btnEnter.textContent = "Enter Exhibitions";
      break;
    case 4:
      btnEnter.href = pages.about;
      btnEnter.textContent = "Enter About";
      break;
    case 5:
      btnEnter.href = pages.home;
      btnEnter.textContent = "Enter About";
      break;
    case 6:
      btnEnter.href = pages.home;
      btnEnter.textContent = "Enter About";
  }
}
btnPrev.addEventListener("click", prevVid);
btnNext.addEventListener("click", nexVid);
