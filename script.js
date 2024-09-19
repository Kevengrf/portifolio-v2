const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const carrosselImagens = document.querySelector('.carrossel-imagens');
let index = 0;
const totalImagens = carrosselImagens.children.length;
const intervalTime = 3000; // 3 segundos

// Função para atualizar o carrossel
function updateCarrossel() {
    carrosselImagens.style.transform = `translateX(-${index * 100}%)`;
}

// Função para avançar para a próxima imagem
function nextImage() {
    if (index < totalImagens - 1) {
        index++;
    } else {
        index = 0; // Volta para a primeira imagem (loop)
    }
    updateCarrossel();
}

// Troca automática de imagem a cada 3 segundos
const autoPlay = setInterval(nextImage, intervalTime);

// Controle manual dos botões
prev.addEventListener('click', () => {
    clearInterval(autoPlay); // Para o autoplay
    if (index > 0) {
        index--;
    } else {
        index = totalImagens - 1;
    }
    updateCarrossel();
});

next.addEventListener('click', () => {
    clearInterval(autoPlay); // Para o autoplay
    if (index < totalImagens - 1) {
        index++;
    } else {
        index = 0;
    }
    updateCarrossel();
});
document.querySelector('.menu-hamburger').addEventListener('click', function() {
    document.querySelector('.dropdown-menu').classList.toggle('active');
});

