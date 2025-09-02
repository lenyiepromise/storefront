// Slider
let currentSlide=0, slideInterval, delay=5000;
const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');

function showSlide(i){slides.forEach((s,j)=>{s.classList.toggle('active', j===i); dots[j].classList.toggle('active', j===i)}); currentSlide=i;}
function nextSlide(){showSlide((currentSlide+1)%slides.length);}
function startSlider(){slideInterval=setInterval(nextSlide, delay);}
function stopSlider(){clearInterval(slideInterval);}
dots.forEach((dot,i)=>{dot.addEventListener('click',()=>{showSlide(i); stopSlider(); startSlider();});});
document.querySelector(".slider")?.addEventListener("mouseenter", stopSlider);
document.querySelector(".slider")?.addEventListener("mouseleave", startSlider);
window.addEventListener("load",()=>{showSlide(0); startSlider();});

// Cart simulation
let cartCount=0;
function updateCartCount(){document.getElementById('cart-count')?.textContent=cartCount; document.getElementById('cart-count-store')?.textContent=cartCount;}
document.querySelectorAll('.add-to-cart').forEach(btn=>{btn.addEventListener('click',()=>{cartCount++; updateCartCount(); alert("Added to cart!");});});
document.querySelectorAll('.go-to-store').forEach(btn=>{btn.addEventListener('click',()=>{window.location.href='store.html';});});
updateCartCount();