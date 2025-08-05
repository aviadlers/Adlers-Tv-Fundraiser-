
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
  "images/2F618B96-095B-44CD-A710-4C383EDB0B19.png", "images/IMG_3686", "images/IMG_3687",
  "images/0F59827B-F82F-405A-AF1D-B2B0AA0E499C", "images/4F533DA2-5AD6-400D-8482-556282ED7C1A", "images/17873287-BA51-47F4-9E8B-417CA09D5D21",
  "images/E278C109-CD86-4A75-AD01-CA49588AB2EB", "images/E88B597B-BB68-4309-8EB7-78503F20AEC3", "images/Thank you"
];

let imgIndex = 0;
const slideshow = document.getElementById("slideshow");

function showNextImage() {
  imgIndex = (imgIndex + 1) % images.length;
  slideshow.src = images[imgIndex];
}

setInterval(showNextImage, 4000);
