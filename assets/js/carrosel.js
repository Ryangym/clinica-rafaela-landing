const track = document.querySelector('.slider-track');
const originalSlides = [...track.children]; 

// Duplica os itens para garantir o efeito infinito
// 2 ou 3 cópias já são suficientes com essa lógica
for (let i = 0; i < 3; i++) {
    originalSlides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
    });
}

let isPaused = false;
let scrollSpeed = 1; // Velocidade do carrossel (aumente se quiser mais rápido)

function autoScroll() {
    if (!isPaused) {
        track.scrollLeft += scrollSpeed;
        
        // Calcula a largura total do pacote original de imagens
        // Pega a largura do primeiro slide + o gap (1rem = 16px)
        const slideWidth = originalSlides[0].offsetWidth;
        const gap = 16; 
        const totalOriginalWidth = (slideWidth + gap) * originalSlides.length;

        // Quando o scroll ultrapassar o primeiro pacote de imagens, ele reseta imperceptivelmente
        if (track.scrollLeft >= totalOriginalWidth) {
            track.scrollLeft -= totalOriginalWidth;
        }
    }
    requestAnimationFrame(autoScroll);
}

// Inicia a animação
autoScroll();

// Pausa o carrossel no mobile quando o usuário toca na tela
track.addEventListener('touchstart', () => isPaused = true, { passive: true });
track.addEventListener('touchend', () => isPaused = false);

// Bônus: Pausa o carrossel no PC quando o usuário passa o mouse por cima
track.addEventListener('mouseenter', () => isPaused = true);
track.addEventListener('mouseleave', () => isPaused = false);