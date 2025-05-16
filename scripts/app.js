// This script is for the slider functionality on the storefront page.

const slider = document.querySelector('.slider');

slider.addEventListener('mouseover', () => {
	slider.style.animationPlayState = 'paused';
});

slider.addEventListener('mouseout', () => {
	slider.style.animationPlayState = 'running';
});