// Aguarde o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", function () {
    // Função para esconder todas as seções
    function hideAllSections() {
        const sections = document.querySelectorAll('main section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Função para mostrar a seção correspondente ao link clicado
    function showSection(sectionId) {
        hideAllSections();
        const section = document.querySelector(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }

    // Adicione eventos de clique aos links do cabeçalho
    document.getElementById('link-home').addEventListener('click', function (e) {
        e.preventDefault();
        showSection('#home');
    });

    document.getElementById('link-gallery').addEventListener('click', function (e) {
        e.preventDefault();
        showSection('#gallery');
    });

    document.getElementById('link-services').addEventListener('click', function (e) {
        e.preventDefault();
        showSection('#services');
    });

    document.getElementById('link-contact').addEventListener('click', function (e) {
        e.preventDefault();
        showSection('#contact');
    });

    // Exiba a seção inicial (Tela Inicial) ao carregar a página
    showSection('#home');
});
