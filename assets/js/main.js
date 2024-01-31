const navBar = document.querySelector("header nav .navbar");
const Arrow = document.querySelector(".arrow");
function toggleMenu() {
  navBar.classList.toggle("active");
}

Arrow.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
  
});
const Nav = document.querySelector("header nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    Nav.classList.add("active");
  } else {
    Nav.classList.remove("active");
  }
});

var slideUp_1 = {
    distance: '200px',
    origin: 'bottom',
    opacity: 0,
    duration:1500,
    easing:'ease',
};
var slideUp_2 = {
    distance: '200px',
    origin: 'bottom',
    opacity: 0,
    delay:500,
    duration:1500,
    easing:'ease',
};
var slideUp_3 = {
    distance: '200px',
    origin: 'bottom',
    delay:1000,
    opacity: 0,
    duration:1500,
    easing:'ease',
};

var fade={
    opacity:0,
    easing:'ease',
    duration:2000,
}
var zoom_1={
    duration:1000,
    scale:0.5,
    easing:'ease',
    opacity:0,
}
var zoom_2={
    duration:1000,
    scale:0.4,
    easing:'ease',
    opacity:0,
    delay:500,
}
var zoom_3={
    duration:1000,
    scale:0.3,
    easing:'ease',
    opacity:0,
    delay:1000,
}
var zoom_4={
    duration:1000,
    scale:0.2,
    easing:'ease',
    opacity:0,
    delay:1500,
}
ScrollReveal().reveal('.slide-up-1', slideUp_1);
ScrollReveal().reveal('.slide-up-2', slideUp_2);
ScrollReveal().reveal('.slide-up-3', slideUp_3);
ScrollReveal().reveal('.fade', fade);
ScrollReveal().reveal('.zoom-1', zoom_1);
ScrollReveal().reveal('.zoom-2', zoom_2);
ScrollReveal().reveal('.zoom-3', zoom_3);
ScrollReveal().reveal('.zoom-4', zoom_4);