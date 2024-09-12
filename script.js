document.querySelector('.menu-hamburger').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').classList.toggle('active');
});
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carrosselImagens = document.querySelector('.carrossel-imagens');
let index = 0;

prev.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = carrosselImagens.children.length - 1;
    }
    updateCarrossel();
});

next.addEventListener('click', () => {
    if (index < carrosselImagens.children.length - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarrossel();
});

function updateCarrossel() {
    carrosselImagens.style.transform = `translateX(-${index * 100}%)`;
}
