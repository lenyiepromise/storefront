// Preload slide img/slider
function preloadImgages(imageList) {
  imageList.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Set img/slider based on device size
function setSlideImages() {
  const isMobile = window.innerWidth < 768;

  document.getElementById("slide1").src = isMobile ? "img/slider/mobile-top-online-store.webp" : "img/slider/desktop-top-online-store.webp";
  document.getElementById("slide2").src = isMobile ? "img/slider/mobile-secured-transaction.webp" : "img/slider/desktop-secured-transaction.webp";
  document.getElementById("slide3").src = isMobile ? "img/slider/mobile-affordable.webp" : "img/slider/desktop-affordable.webp";
  document.getElementById("slide4").src = isMobile ? "img/slider/mobile-delivery.webp" : "img/slider/desktop-delivery.webp";
}

// Preload all img/slider
preloadImgages([
	"img/slider/mobile-top-online-store.webp", "img/slider/mobile-secured-transaction.webp", "img/slider/mobile-affordable.webp", "img/slider/mobile-delivery.webp",
	"img/slider/desktop-top-online-store.webp", "img/slider/desktop-secured-transaction.webp", "img/slider/desktop-affordable.webp", "img/slider/desktop-delivery.webp",
]);

// Slider logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

// Auto slide
setInterval(() => {
  const nextSlide = (currentSlide + 1) % slides.length;
  showSlide(nextSlide);
}, 5000);

// Dot click functionality
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Initial setup
window.addEventListener("load", () => {
  setSlideImages();
  showSlide(0); // Ensure first slide and dot are active on load
});
window.addEventListener("resize", setSlideImages);