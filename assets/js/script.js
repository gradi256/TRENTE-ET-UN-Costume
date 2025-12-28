const headerTop = document.querySelector(".headerTop");
const headerBottom = document.querySelector(".headerBottom");
const boutonMenu = document.querySelector(".boutonMenu");
const navbar2 = document.querySelector(".navbar2");

window.addEventListener("scroll", () => {
    headerBottom.classList.toggle("changeBG", window.scrollY > 0);
});

boutonMenu.addEventListener("click", () => {
    navbar2.classList.toggle("active");
});