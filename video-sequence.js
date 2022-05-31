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
  updateLink();
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
  updateLink();
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
  updateLink();
}
function updateLink() {
  console.log(btnEnter);
  switch (curId) {
    case 0:
      // btnEnter.href = pages.home
      break;
    case 1:
      // btnEnter.href = pages.about
      break;
    case 2:
      btnEnter.href = pages.contact;
      break;
    case 3:
      btnEnter.href = pages.exhibitions;
      break;
    case 4:
      btnEnter.href = pages.about;
      break;
    case 5:
      btnEnter.href = pages.home;
      break;
    case 6:
      btnEnter.href = pages.home;
  }
}
btnPrev.addEventListener("click", prevVid);
btnNext.addEventListener("click", nexVid);
