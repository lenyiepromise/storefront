// Setting the image to each slide
let slide1 = document.getElementById("slide1");
let slide2 = document.getElementById("slide2");
let slide3 = document.getElementById("slide3");
let slide4 = document.getElementById("slide4");

slide1.src = "img/slider/slide1.png";
slide2.src = "img/slider/slide2.png";
slide3.src = "img/slider/slide3.png";
slide4.src = "img/slider/slide4.png";

let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
	slides.forEach((slide, i) => {
		slide.classList.toggle('active', i === index);
		dots[i].classList.toggle('active', i === index);
	});
	current = index;
}

dots.forEach((dot, i) => {
	dot.addEventListener('click', () => showSlide(i));
});

setInterval(() => {
	let next = (current + 1) % slides.length;
	showSlide(next);
}, 5000);
