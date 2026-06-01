document.addEventListener('DOMContentLoaded', () => {
    
    // Toggle Menu Mobile
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (Mobile)
    const navLinks = document.querySelectorAll('#nav-menu ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Rolagem Suave (Smooth Scroll)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                // Compensar a altura do header fixo (aprox 70px)
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
    // --- EFEITO SMART NAVBAR (Esconde ao descer, mostra ao subir) ---
    let ultimaPosicaoScroll = 0;
    const header = document.querySelector('header');
    
    // Pegar a altura exata do cabeçalho para saber o quanto esconder
    const alturaHeader = header.offsetHeight;

    window.addEventListener('scroll', () => {
        // Pega a posição atual da rolagem da tela
        let posicaoAtualScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Se a posição atual for maior que a última (está descendo) 
        // E a rolagem já passou da altura do próprio cabeçalho (para não bugar no topo)
        if (posicaoAtualScroll > ultimaPosicaoScroll && posicaoAtualScroll > alturaHeader) {
            // Rola para baixo: esconde o header jogando ele para cima da tela
            header.style.top = `-${alturaHeader}px`; 
        } else {
            // Rola para cima: traz o header de volta para a posição 0
            header.style.top = '0'; 
        }

        // Atualiza a última posição para a próxima checagem
        ultimaPosicaoScroll = posicaoAtualScroll;
    });
});