  const carousel = document.getElementById("videoCarousel");

let startX;
let scrollLeft;

carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.2;  
    carousel.scrollLeft = scrollLeft - walk;
});

const carrousel = document.getElementById("videoCarousel");
const arrowLeft = document.getElementById("arrowLeft");
const arrowRight = document.getElementById("arrowRight");

// Quantidade de px que o carrossel vai mover
const scrollAmount = 320; // ajuste se quiser

arrowRight.addEventListener("click", () => {
    carousel.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

arrowLeft.addEventListener("click", () => {
    carousel.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});


const carousel2 = document.getElementById("videoCarousel2");
const arrowLeft2 = document.getElementById("arrowLeft2");
const arrowRight2 = document.getElementById("arrowRight2");

arrowLeft2.addEventListener("click", () => {
    carousel2.scrollBy({
        left: -300,
        behavior: "smooth"
    });
});

arrowRight2.addEventListener("click", () => {
    carousel2.scrollBy({
        left: 300,
        behavior: "smooth"
    });
});
