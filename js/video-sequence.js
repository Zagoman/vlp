const btnNext = document.querySelector(".button-next");
const btnPrev = document.querySelector(".button-prev");
const btnEnter = document.querySelector(".button-enter");
const parent = document.querySelector(".hero-section");
const pages = {
  home: "./index.html",
  about: "./about.html",
  exhibitions: "./exhibition.html",
  contact: "./contact.html",
  artworks: "./artworks.html",
};

let canvas;
let video;
let videoSrcs = [
  ["./media/1_video.webm", "./media/1_video.mp4", "./media/1_video.mov"],
];
let curId = 0;
let aspectRatio = 16 / 9;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.parent(parent);
  background(110);
  video = createVideo(videoSrcs[0], vidGo);
  video.size(width, height);
  video.pause();
  for (let i = 2; i <= 7; i++) {
    videoSrcs.push([
      `./media/${i}_video.webm`,
      `./media/${i}_video.mp4`,
      `./media/${i}_video.mov`,
    ]);
  }
  imageMode(CENTER);
  video.hide();
  updateUI();
}

function draw() {
  image(video, width / 2, height / 2, innerHeight * aspectRatio, innerHeight);
}
function vidGo() {
  hideLoader();
  vidLoad();
}
function vidLoad() {
  // video.size(window.innerWidth, window.innerHeight);
  video.size(width, height);
  video.mute = true;
  if (!video.src.includes("2_video")) {
    video.volume(0);
    video.loop();
  } else {
    // video.pause();
    video.play();
    video.onended(nexVid);
  }
  video.elt.classList.add("placeholder-video");
}

function nexVid() {
  if (curId < 6) {
    curId++;
  } else {
    curId = 2;
  }
  video.remove();
  video = createVideo(videoSrcs[curId], vidLoad);
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
  video = createVideo(videoSrcs[curId], vidLoad);
  video.hide();
  updateUI();
}

function updateUI() {
  switch (curId) {
    case 0:
      // btnEnter.href = pages.home
      btnPrev.classList.add("is--display-none");
      btnNext.classList.add("is--display-none");
      btnEnter.addEventListener("click", nexVid);
      break;
    case 1:
      btnEnter.removeEventListener("click", nexVid, false);
      btnEnter.classList.add("is--display-none");
      break;
    case 2:
      if (btnPrev.classList.contains("is--display-none")) {
        btnPrev.classList.remove("is--display-none");
        btnNext.classList.remove("is--display-none");
        btnEnter.classList.remove("is--display-none");
      }
      btnEnter.href = pages.about;
      btnEnter.textContent = "Enter About";
      break;
    case 3:
      btnEnter.href = pages.exhibitions;
      btnEnter.textContent = "Enter Events";
      break;
    case 4:
      btnEnter.href = pages.artworks;
      btnEnter.textContent = "Enter Artworks";
      break;
    case 5:
      btnEnter.href = pages.contact;
      btnEnter.textContent = "Enter Contact";
      break;
    case 6:
      btnEnter.href = pages.home;
      btnEnter.textContent = "Sign Up";
  }
}
btnPrev.addEventListener("click", prevVid);
btnNext.addEventListener("click", nexVid);
