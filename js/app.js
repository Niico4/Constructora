document.addEventListener('DOMContentLoaded', () => {
    const elementCarousel = document.querySelectorAll('.carousel'); //* Selecciona todas las clases de la pagina
    M.Carousel.init(elementCarousel, {
        duration: 250,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: true,
    });
});