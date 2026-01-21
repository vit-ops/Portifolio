document.addEventListener('DOMContentLoaded', () => {
    
    // Configuração do Intersection Observer para animações ao rolar
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Dispara quando 15% do elemento está visível
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Se o elemento entrou na tela
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: parar de observar após aparecer a primeira vez
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Seleciona todos os blocos que devem ser animados
    const animatedBlocks = document.querySelectorAll('.animate-block');
    
    animatedBlocks.forEach(block => {
        observer.observe(block);
    });

    // Efeito extra para a imagem carregar suavemente
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.style.opacity = '0';
        profileImg.style.transition = 'opacity 1s ease-in-out';
        setTimeout(() => {
             profileImg.style.opacity = '1';
        }, 300);
    }
});