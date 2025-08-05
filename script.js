
const texts = [
  "Support Adlers TVs Mission",
  "Make a Difference Today",
  "Donate to a Noble Cause",
  "For Continuity of Creativity"
];

let index = 0;
const textElement = document.querySelector(".animated-text");

function changeText() {
  textElement.textContent = texts[index];
  index = (index + 1) % texts.length;
}
setInterval(changeText, 3000);
changeText();

// Slideshow
const images = [
  "E278C109-CD86-4A75-AD01-CA49588AB2EB.jpeg",
  "8983F37B-CEBB-4924-9769-5881D8535EB9.jpeg",
  "0F59827B-F82F-405A-AF1D-B2B0AA0E499C.jpeg",
  "17873287-BA51-47F4-9E8B-417CA09D5D21.jpeg",
  "E88B597B-BB68-4309-8EB7-78503F20AEC3.jpeg",
  "37A8EEDF-FEDD-4D4F-AA0F-6852C5AFDADA.jpeg",
  "2F618B96-095B-44CD-A710-4C383EDB0B19.png",
  "4F533DA2-5AD6-400D-8482-556282ED7C1A.jpeg",
  "83508DB7-5CEB-47EB-B532-9B5E020F89F7.png"
];

let slideIndex = 0;
const slideshowContainer = document.querySelector(".slideshow-container");

const imgTag = document.createElement("img");
slideshowContainer.appendChild(imgTag);

function showSlide() {
  imgTag.src = "images/" + images[slideIndex];
  imgTag.style.display = "block";
  slideIndex = (slideIndex + 1) % images.length;
}
setInterval(showSlide, 3000);
showSlide();
