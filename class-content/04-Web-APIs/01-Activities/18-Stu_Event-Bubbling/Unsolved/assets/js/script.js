// TODO: Which element is the following line of code selecting?
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "./assets/images/kitten-1.jpg",
  "./assets/images/kitten-2.png",
  "./assets/images/kitten-3.jpg",
  "./assets/images/kitten-4.jpg",
  "./assets/images/kitten-5.png",
];

carousel.style.backgroundImage = "url('./images/kitten-1.jpg')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
carousel.addEventListener("click", function () {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
next.addEventListener("click", function (event) {
  // TODO: What is the purpose of the following line of code?
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
prev.addEventListener("click", function (event) {
  // TODO: What would happen if we didn't add the following line of code?
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
