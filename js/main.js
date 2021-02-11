// Hamburger

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu"),
    menuItems = document.querySelectorAll(".header__nav-link"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});

// Slider

let currentSlideIndex = 0;
const slides = document.querySelectorAll(".testimonials-inner"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next"),
  dotsWrap = document.querySelector(".slider-dots"),
  dots = document.querySelectorAll(".dot");

function showSlides(n) {
  if (n > slides.length - 1) {
    currentSlideIndex = 0;
  }
  if (n < 0) {
    currentSlideIndex = slides.length - 1;
  }

  slides.forEach((item) => (item.style.display = "none"));

  dots.forEach((item) => item.classList.remove("dot-active"));

  slides[currentSlideIndex].style.display = "block";
  dots[currentSlideIndex].classList.add("dot-active");
}

showSlides(currentSlideIndex);

prev.addEventListener("click", function () {
  currentSlideIndex--;
  showSlides(currentSlideIndex);
});

next.addEventListener("click", function () {
  currentSlideIndex++;
  showSlides(currentSlideIndex);
});

dotsWrap.addEventListener("click", function (event) {
  for (let i = 0; i < dots.length; i++) {
    if (event.target.classList.contains("dot") && event.target == dots[i]) {
      currentSlideIndex = i;
      showSlides(currentSlideIndex);
    }
  }
});

new WOW().init();
