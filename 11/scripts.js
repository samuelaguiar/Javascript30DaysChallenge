// Elements
const player = document.querySelector(".player"),
  video = player.querySelector(".viewer"),
  progress = player.querySelector(".progress"),
  progressBar = player.querySelector(".progress__filled"),
  toggle = player.querySelector(".toggle"),
  fullScreen = player.querySelector(".full-screen"),
  skipButtons = player.querySelectorAll("[data-skip]"),
  ranges = player.querySelectorAll(".player__slider");
let mousedown = false;

// Functions
function togglePlay() {
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
  video.paused ? video.play() : video.pause();
}

function toggleFullScreen() {
  video.requestFullscreen();
}

function updatePlayButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function skip() {
  video.currentTime += parseInt(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event Listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
fullScreen.addEventListener("click", toggleFullScreen);
skipButtons.forEach(btn => btn.addEventListener("click", skip));
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", e => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
