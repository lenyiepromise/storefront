// Preload images
function preloadImages(imageList) {
  imageList.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Set image sources based on screen size
function setSlideImages() {
  const isMobile = window.innerWidth < 768;

  document.getElementById("slide1").src = isMobile
    ? "img/slider/mobile-top-online-store.webp"
    : "img/slider/desktop-top-online-store.webp";

  document.getElementById("slide2").src = isMobile
    ? "img/slider/mobile-secured-transaction.webp"
    : "img/slider/desktop-secured-transaction.webp";

  document.getElementById("slide3").src = isMobile
    ? "img/slider/mobile-affordable.webp"
    : "img/slider/desktop-affordable.webp";

  document.getElementById("slide4").src = isMobile
    ? "img/slider/mobile-delivery.webp"
    : "img/slider/desktop-delivery.webp";
}

// Preload all
preloadImages([
  "img/slider/mobile-top-online-store.webp",
  "img/slider/mobile-secured-transaction.webp",
  "img/slider/mobile-affordable.webp",
  "img/slider/mobile-delivery.webp",
  "img/slider/desktop-top-online-store.webp",
  "img/slider/desktop-secured-transaction.webp",
  "img/slider/desktop-affordable.webp",
  "img/slider/desktop-delivery.webp"
]);

// Slider logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let slideInterval;
const delay = 5000;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

function startSlider() {
  slideInterval = setInterval(nextSlide, delay);
}

function stopSlider() {
  clearInterval(slideInterval);
}

// Event Listeners
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    stopSlider();
    startSlider();
  });
});

document.getElementById("nextBtn").addEventListener("click", () => {
  nextSlide();
  stopSlider();
  startSlider();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  prevSlide();
  stopSlider();
  startSlider();
});

// Pause on hover
document.querySelector(".slider").addEventListener("mouseenter", stopSlider);
document.querySelector(".slider").addEventListener("mouseleave", startSlider);

// Initial setup
window.addEventListener("load", () => {
  setSlideImages();
  showSlide(0);
  startSlider();
});

window.addEventListener("resize", setSlideImages);