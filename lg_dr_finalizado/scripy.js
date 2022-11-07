const hamburger = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const hD = document.querySelector(".hd");

hamburger.addEventListener("click", () => {
     hamburger.classList.toggle('active');
     navMenu.classList.toggle('active');
     hD.classList.toggle('active');

})