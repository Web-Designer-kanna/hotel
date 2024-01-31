const navBar = document.querySelector("header nav .navbar");
const Arrow = document.querySelector(".arrow");

function toggleMenu() {
  navBar.classList.toggle("active");
}

Arrow.addEventListener("click",()=>{
    window.scrollTo(0,0);
   Arrow.style.scrollBehavior="smooth";
});
const Nav = document.querySelector("header nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    Nav.classList.add("active");
  } else {
    Nav.classList.remove("active");
  }
});
