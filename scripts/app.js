// Preload images
function preloadImages(imageList) {
  imageList.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Set slide images based on screen size
function setSlideImages() {
  const isMobile = window.innerWidth < 768;
  const images = [
    isMobile ? "img/slider/mobile-top-online-store.webp" : "img/slider/desktop-top-online-store.webp",
    isMobile ? "img/slider/mobile-secured-transaction.webp" : "img/slider/desktop-secured-transaction.webp",
    isMobile ? "img/slider/mobile-affordable.webp" : "img/slider/desktop-affordable.webp",
    isMobile ? "img/slider/mobile-delivery.webp" : "img/slider/desktop-delivery.webp"
  ];

  images.forEach((src, i) => {
    const slide = document.getElementById(`slide${i + 1}`);
    if (slide) slide.src = src;
  });
}

// Preload all slider images
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
let slideInterval;
const delay = 5000;

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

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

function startSlider() {
  slideInterval = setInterval(nextSlide, delay);
}

function stopSlider() {
  clearInterval(slideInterval);
}

// Dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    stopSlider();
    startSlider();
  });
});

// Pause slider on hover
document.querySelector(".slider").addEventListener("mouseenter", stopSlider);
document.querySelector(".slider").addEventListener("mouseleave", startSlider);

// Initial setup
window.addEventListener("load", () => {
  setSlideImages();
  showSlide(0);
  startSlider();
});

window.addEventListener("resize", setSlideImages);