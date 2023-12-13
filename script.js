// main.js

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a'); // Seleciona todos os links no menu

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const sectionId = this.getAttribute('href'); // Obtém o ID da seção a ser exibida
            const sections = document.querySelectorAll('section'); // Seleciona todas as seções

            sections.forEach(function(section) {
                section.classList.remove('show'); // Remove a classe 'show' de todas as seções
            });

            document.querySelector(sectionId).classList.add('show'); // Adiciona a classe 'show' à seção correspondente ao link clicado
        });
    });
});