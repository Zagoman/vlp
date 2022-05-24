const video = document.querySelector("#entry-video");
const buttonNext = document.querySelector(".button-next");
const buttonPrev = document.querySelector(".button-prev");
let videoId = 0;
let incremental = 0;
const vidAmount = 8;

video.addEventListener("ended", () => {
  if (!video.hasAttribute("loop")) {
    nextVid();
  }
});

buttonNext.addEventListener("click", nextVid);
buttonPrev.addEventListener("click", prevVid);

function nextVid() {
  video.toggleAttribute("loop");
  incremental++;
  videoId = incremental % vidAmount;
  switchSource(videoId);
}
function prevVid() {
  video.toggleAttribute("loop");
  incremental === 0 ? (incremental = vidAmount - 1) : incremental--;
  videoId = incremental % vidAmount;
  switchSource(videoId);
}
function switchSource(id) {
  video.src = `media/${id}_sequence.mp4`;
}
