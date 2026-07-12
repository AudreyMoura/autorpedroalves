<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedro Alves | Autor</title>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>

<style>
/* =========================================
   PÁGINA: books
   ========================================= */

.page-title-section {
    padding: 60px 20px 20px;
    text-align: center;
}

.page-title-section h1 {
    font-size: 2.5rem;
    font-family: 'Space Mono', monospace;
    letter-spacing: 4px;
    margin-bottom: 10px;
}

.saga-section {
    padding: 60px 20px;
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-family: 'Space Mono', monospace;
    font-size: 2rem;
}

.decorative-line {
    display: block;
    width: 60px;
    height: 3px;
    margin: 0 auto 20px;
}

.saga-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .saga-grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }
}

/* Cards e Imagens de Capa */
.book-card {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: transform 0.3s ease;
}

.book-card:hover {
    transform: translateY(-5px);
}

/* CONTAINER DA CAPA: TAMANHO FIXO */
.book-cover {
    width: 250px;       /* Largura fixa */
    height: 395px;      /* Altura fixa */
    margin: 0 auto 20px; /* Centraliza o card e dá margem inferior */
    border-radius: 5px;
    overflow: hidden;    /* Esconde o que sobrar da imagem */
    box-shadow: 0 5px 15px rgba(0,0,0,0.6);
    display: flex;       /* Garante alinhamento interno */
    align-items: center;
    justify-content: center;
}

/* IMAGEM: FORÇA O PREENCHIMENTO DO CONTAINER */
.book-cover-img {
    width: 100%;
    height: 100%;       /* Força a mesma altura do container */
    object-fit: cover;  /* Corta a imagem mantendo a proporção para preencher o bloco */
    object-position: center; /* Centraliza o foco da capa */
    display: block;
    transition: transform 0.4s ease;
}

/* Opcional: Garante que todos os cards tenham a mesma altura mínima */
.book-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Mantém o botão alinhado na parte inferior */
    height: 100%;
}

.book-card:hover .book-cover-img {
    transform: scale(1.0);
}

.book-info h3 { font-size: 1.3rem; margin: 0 0 10px; }
.book-info p { font-size: 0.95rem; margin-bottom: 20px; opacity: 0.8; }

.btn-saga {
    background: transparent;
    border: 1px solid;
    padding: 10px 20px;
    font-family: 'Space Mono', monospace;
    cursor: pointer;
    transition: all 0.3s ease;
}

/* Temas Sci-Fi & Romance */
.theme-scifi { background-color: var(--bg-blue-dark); }
.theme-scifi .scifi-line { background-color: var(--scifi-primary); box-shadow: 0 0 10px var(--scifi-primary); }
.theme-scifi .book-card { border-color: rgba(0, 229, 255, 0.2); }
.theme-scifi .btn-saga { color: var(--scifi-primary); border-color: var(--scifi-primary); }
.theme-scifi .btn-saga:hover { background: var(--scifi-primary); color: #000; }

.theme-romance {
    background: #9365DB; /* Fundo papel creme, mais acolhedor */
    color: #333; /* Texto escuro para leitura confortável */
    padding: 80px 20px;
}

.theme-romance .section-header h2 {
    color: #252243; /* Vermelho escuro elegante */
    font-family: 'Libre Baskerville', serif; /* Fonte mais clássica */
}

.theme-romance .book-card {
    background: #fff;
    border: 1px solid #e0d5ce;
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    border-radius: 2px; /* Cantos menos agressivos */
    transition: transform 0.4s ease;
}

.theme-romance .book-info h3 {
    color: #4a3728;
    font-family: 'Libre Baskerville', serif;
}

.theme-romance .btn-saga {
    background: #4a3728;
    color: #fff;
    border: none;
    padding: 12px 25px;
    font-family: 'Libre Baskerville', serif;
}

.theme-romance .btn-saga:hover {
    background: #8b0000;
}
/* =========================================
   MODAL
   ========================================= */

.modal-wrapper { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background-color: rgba(0, 0, 0, 0.9); z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px; box-sizing: border-box; opacity: 1; transition: opacity 0.3s ease; }
.modal-wrapper.hidden { opacity: 0; pointer-events: none; }
.modal-card { background-color: #111; width: 100%; max-width: 700px; border-radius: 8px; position: relative; max-height: 90vh; overflow-y: auto; }
.modal-content { padding: 40px; border-top: 4px solid var(--scifi-primary); }
.close-btn { position: absolute; top: 15px; right: 20px; font-size: 30px; color: #888; cursor: pointer; }
.close-btn:hover { color: #fff; }
#modal-title { font-family: 'Space Mono', monospace; font-size: 1.8rem; margin-top: 0; text-transform: uppercase; }
#modal-book-list { list-style-type: square; padding-left: 20px; font-family: 'Space Mono', monospace; }
.btn-buy { display: inline-block; padding: 10px 20px; background: #222; color: #fff; text-decoration: none; border: 1px solid #444; margin-top: 10px; font-family: 'Space Mono', monospace;}
.btn-buy:hover { background: #fff; color: #000; }
</style>

<body>
    <!--  Section Header -->
    <header class="main-header">
        <div class="nav-container">
            <a href="/" class="author-name">PEDRO ALVES</a>
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html#home">INÍCIO</a></li>
                    <li><a href="books.html">LIVROS</a></li>
                    <li><a href="sobre.html">SOBRE</a></li>
                    <li><a href="contato.html">CONTATO</a></li>
                </ul>
            </nav>
            <!-- Nova seção de redes sociais HUD -->
           <div class="social-hud">
               <a href="https://www.instagram.com/p.alves1998" class="social-link" title="Instagram">IG</a>
               <a href="https://www.amazon.com.br/stores/Pedro-Alves/author/B08WKQ65VJ" class="social-link" title="Amazon">Amazon</a>
               <a href="https://www.facebook.com/literagenesis" class="social-link" title="Facebook">Facebook</a>
           </div>
        </div>
    </header>

<main>
        <section class="page-title-section">
            <div class="title-container">
                <h1>Sagas e Obras</h1>
                <p>Navegue pelos universos literários. Da ficção científica distópica aos romances apaixonantes.</p>
            </div>
        </section>

        <!-- SEÇÃO SCI-FI -->
        <section class="saga-section theme-scifi" id="scifi-section">
            <div class="section-header">
                <h2>UNIVERSO SCI-FI & FANTASIA</h2>
                <span class="decorative-line scifi-line"></span>
                <p>Explorando a fronteira entre a tecnologia avançada, a inteligência artificial e a essência da humanidade.</p>
            </div>
            
            <div class="saga-grid" id="scifi-grid">
                <!-- Preenchido via JS com as Capas em Imagem -->
            </div>
        </section>

        <!-- SEÇÃO ROMANCE -->
        <section class="saga-section theme-romance" id="romance-section">
            <div class="section-header">
                <h2>UNIVERSO DOS ROMANCES</h2>
                <span class="decorative-line romance-line"></span>
                <p>Obras com tons de vermelho e néon que exploram o amor intenso, intrigas e destinos cruzados.</p>
            </div>
            
            <div class="saga-grid" id="romance-grid">
                <!-- Preenchido via JS com as Capas em Imagem -->
            </div>
        </section>

        <!-- MODAL DAS SAGAS -->
        <div id="saga-modal" class="modal-wrapper hidden">
            <div class="modal-card">
                <span class="close-btn">&times;</span>
                <div class="modal-content">
                    <h2 id="modal-title">Título da Saga</h2>
                    <p id="modal-desc" class="modal-body">Descrição da saga...</p>
                    
                    <div class="modal-books-container">
                        <h3>Obras da Saga:</h3>
                        <ul id="modal-book-list">
                            <!-- Injetado via JS -->
                        </ul>
                    </div>
                    
                    <div class="modal-buy-section">
                        <h4>Onde Comprar</h4>
                        <div class="buy-buttons">
                            <a href="https://www.amazon.com.br/stores/Pedro-Alves/author/B08WKQ65VJ" target="_blank" class="btn-buy">Ver na Amazon</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <script>

        /* =========================================
       2. BANCO DE DADOS DAS SAGAS & IMAGENS
       ========================================= */
    const sagasDb = {
        "scifi-genesis": { title: "Saga Gênesis", genre: "scifi", description: "Em um universo em colapso...", books: ["Gênesis: Parte I", "Gênesis: A Falha Temporal", "Gênesis: O Paradoxo Final"] },
        "scifi-infuture": { title: "Saga Infuture", genre: "scifi", description: "Um futuro cyberpunk visceral...", books: ["Infuture: O Despertar", "Infuture: Além da Metrópole"] },
        "scifi-milenio": { title: "Saga O Milênio", genre: "scifi", description: "A resistência humana contra as máquinas...", books: ["O Milênio: A Queda", "O Milênio: Resistência", "O Milênio: O Último Horizonte"] },
        "romance-indomavel": { title: "Indomável Desejo", genre: "romance", description: "Um romance arrebatador...", books: ["Indomável Desejo: Livro 1", "A Força do Querer (Livro 2)", "Minha Indomável Paixão"] },
        "romance-destinados": { title: "Saga Destinados", genre: "romance", description: "Duas almas amaldiçoadas...", books: ["Destinados: O Encontro", "Destinados: A Promessa"] },
        "romance-neon": { title: "Corações de Néon", genre: "romance", description: "Na megacidade de Nova Babel...", books: ["Luzes Rubras (Livro 1)", "Sombras de Néon (Livro 2)", "Coração de Androide"] }
    };

    /* AQUI VOCÊ EDITA OS NOMES DAS IMAGENS DA SUA PASTA SRC */
    const displayBooks = [
        {
            title: "Inverno Tecnologico",
            sagaId: "scifi-genesis",
            genre: "scifi",
            summary: "O primeiro capítulo da sobrevivência galáctica onde o tempo está quebrado.",
            image: "src/capa1.png" // Troque pelo nome real da sua imagem
        },
        {
            title: "Confronto dos Deuses",
            sagaId: "scifi-infuture",
            genre: "scifi",
            summary: "Corporações e andróides em um embate existencial nas ruínas do futuro.",
            image: "src/capa10.png" 
        },
        {
            title: "Filhas da Deusa",
            sagaId: "scifi-milenio",
            genre: "scifi",
            summary: "O Simbolo das Bruxas é o primeiro de uma série de livros que em breve poderá introduzir o conceito de multiverso do autor Pedro.",
            image: "src/capa7.png" 
        },
        {
            title: "Indomável Desejo",
            sagaId: "romance-indomavel",
            genre: "romance",
            summary: "Um romance poderoso onde paixão e poder colidem irrevogavelmente.",
            image: "src/cap16.jpg" 
        },
        {
            title: "Saga Destinados",
            sagaId: "romance-destinados",
            genre: "romance",
            summary: "Almas amaldiçoadas encontrando o amor através de múltiplas eras.",
            image: "src/capa5.png" 
        },
        {
            title: "Corações de Néon",
            sagaId: "romance-neon",
            genre: "romance",
            summary: "Um romance perigoso no submundo cyberpunk da cidade de Nova Babel.",
            image: "src/capa6.png" 
        }
    ];

    /* =========================================
       2. RENDERIZAÇÃO DOS LIVROS (Verificação de Segurança)
       ========================================= */
    const scifiGrid = document.getElementById('scifi-grid');
    const romanceGrid = document.getElementById('romance-grid');
    
    // O IF ABAIXO impede que o script dê erro (conflito) em páginas como "Sobre" ou "Contato" que não tem a grade de livros.
    if (scifiGrid && romanceGrid) {
        
        displayBooks.forEach(book => {
            const card = document.createElement('div');
            card.className = 'book-card';
            
            // Usando TAG IMG real apontando para src configurado no array
            card.innerHTML = `
                <div class="book-cover">
                    <img src="${book.image}" alt="Capa de ${book.title}" class="book-cover-img" onerror="this.src='https://via.placeholder.com/220x320/222/00e5ff?text=SEM+CAPA'">
                </div>
                <div class="book-info">
                    <h3>${book.title}</h3>
                    <p>${book.summary}</p>
                    <button class="btn-saga" data-saga="${book.sagaId}">Ver Saga Completa</button>
                </div>
            `;
            
            if (book.genre === 'scifi') {
                scifiGrid.appendChild(card);
            } else {
                romanceGrid.appendChild(card);
            }
        });

        /* =========================================
           3. LÓGICA DO MODAL
           ========================================= */
        const modal = document.getElementById('saga-modal');
        const closeBtn = document.querySelector('.close-btn');
        const modalTitle = document.getElementById('modal-title');
        const modalDesc = document.getElementById('modal-desc');
        const modalBookList = document.getElementById('modal-book-list');
        const modalContent = document.querySelector('.modal-content');

        document.querySelectorAll('.btn-saga').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const sagaId = e.target.getAttribute('data-saga');
                const sagaData = sagasDb[sagaId];
                
                if (sagaData) {
                    modalTitle.textContent = sagaData.title;
                    modalDesc.textContent = sagaData.description;
                    
                    modalBookList.innerHTML = '';
                    sagaData.books.forEach(bookTitle => {
                        const li = document.createElement('li');
                        li.textContent = bookTitle;
                        modalBookList.appendChild(li);
                    });

                    if(sagaData.genre === 'scifi') {
                        modalContent.style.borderTopColor = 'var(--scifi-primary)';
                        modalTitle.style.color = 'var(--scifi-primary)';
                    } else {
                        modalContent.style.borderTopColor = 'var(--romance-primary)';
                        modalTitle.style.color = 'var(--romance-primary)';
                    }

                    modal.classList.remove('hidden');
                    document.body.style.overflow = 'hidden'; 
                }
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
    }

    </script>

    <!-- Section Footer (Idêntico ao restante do site) -->
    <footer class="site-footer">
        <div class="footer-content">
            <p class="copyright-text">
                &copy; Todo o conteúdo é propriedade de Pedro A. Pereira, 2026. Todos os direitos reservados. Site desenvolvido por <span class="footer-highlight">Audrey R. Moura</span>.
            </p>
            <nav class="footer-nav">
                <a href="index.html">Início</a>
                <span class="separator">|</span>
                <a href="index.html#books">Livros</a>
                <span class="separator">|</span>
                <a href="#">Blog</a>
                <span class="separator">|</span>
                <a href="sobre.html">Sobre Pedro</a>
                <span class="separator">|</span>
                <a href="contato.html">Contato</a>
            </nav>
        </div>



        <button id="backToTopBtn" class="back-to-top" title="Voltar ao topo">
            &#8963;
        </button>
    </footer>
</body>
</html>
