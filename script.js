
// Subtitle animation
const subtitles = [
  "Support Adlers TV's mission",
  "Make a difference today",
  "Donate to a noble cause",
  "For continuity of creativity"
];

let subtitleIndex = 0;
const subtitleElement = document.getElementById("animated-subtitle");

function rotateSubtitles() {
  subtitleIndex = (subtitleIndex + 1) % subtitles.length;
  subtitleElement.textContent = subtitles[subtitleIndex];
}

setInterval(rotateSubtitles, 3000);

// Image Slideshow
const images = [
  "images/1.jpeg", "images/2.jpeg", "images/3.jpeg",
  "images/4.jpeg", "images/5.jpeg", "images/6.jpeg",
  "images/7.jpeg", "images/8.jpeg", "images/9.jpeg"
];

let imgIndex = 0;
const slideshow = document.getElementById("slideshow");

function showNextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  slideshow.src = images[imgIndex];
}

setInterval(showNextImage, 4000);
