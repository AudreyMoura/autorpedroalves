document.addEventListener("DOMContentLoaded", () => {
    const miniCovers = document.querySelectorAll('.mini-cover');
    
    miniCovers.forEach(cover => {
        cover.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modalWrapper = document.getElementById(modalId);
            
            if(modalWrapper) {
                modalWrapper.style.display = 'flex'; 
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    const modalWrappers = document.querySelectorAll('.modal-wrapper');
    modalWrappers.forEach(wrapper => {
        wrapper.addEventListener('click', function(event) {
            // Fecha se clicar no fundo escuro
            if(event.target === this) {
                closeModal(this.id);
            }
        });
    });
});

window.closeModal = function(modalId) {
    const modalWrapper = document.getElementById(modalId);
    if(modalWrapper) {
        modalWrapper.style.display = 'none';
        document.body.style.overflow = 'auto'; 
    }
};

/* =========================================
   BOTÃO VOLTAR AO TOPO
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTopBtn");

    // Mostra o botão quando o usuário rolar 300px para baixo
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = "flex";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Quando clicar, rola suavemente para o topo
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Efeito de deslizamento fluido
        });
    });
});


/* =========================================
   pagina livros
   ========================================= */
   const livrosDatabase = {
    "modal1": {
        titulo: "PROJETO VALKYRIUS",
        sinopse: "Dalbert Kirian vislumbra o fim da humanidade...",
        cor: "#00e5ff"
    },
    "modal2": {
        titulo: "INDOMÁVEL DESEJO",
        sinopse: "Um romance intenso onde o coração desafia a lógica...",
        cor: "#ff4d6d"
    }
};

function openModal(id) {
    const data = livrosDatabase[id];
    // Aqui você altera o conteúdo do modal dinamicamente
    const modal = document.getElementById('modal-global');
    modal.style.borderColor = data.cor;
    // ... injeta os dados ...
}

// Filtro de Categorias
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        document.querySelectorAll('.book-card').forEach(card => {
            if(filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});