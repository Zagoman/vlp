const btnNext = document.querySelector(".button-next");
const btnPrev = document.querySelector(".button-prev");
const btnEnter = document.querySelector(".button-enter");
const parent = document.querySelector(".hero-section");
let canvas;
let video;
let videoSrcs = [];
let curId = 0;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent(parent);
  background(110);
  for (let i = 1; i <= 7; i++) {
    videoSrcs.push(`${i}_video.mp4`);
  }
  video = createVideo("./media/" + videoSrcs[0], vidLoad);
  video.hide();
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
}
btnPrev.addEventListener("click", prevVid);
btnNext.addEventListener("click", nexVid);
