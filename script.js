function showContent(id, url = '') {
    var sections = document.querySelectorAll('.content > div');
    sections.forEach(function(section) {
        section.classList.add('d-none');
    });
    document.getElementById(id).classList.remove('d-none');
    if (url) {
        var iframe = document.getElementById(id + '-iframe');
        iframe.src = url;
    }
}
function showContent(contentId, videoUrl = null) {
    // Oculta todas las secciones de contenido
    const allContentSections = document.querySelectorAll('.content-section');
    allContentSections.forEach(section => {
        section.classList.add('d-none');
        // También pausa los videos al ocultar la sección
        const iframe = section.querySelector('iframe');
        if (iframe) {
            iframe.src = ''; // Detiene la reproducción al limpiar el src
        }
    });

    // Muestra la sección deseada
    const targetSection = document.getElementById(contentId);
    if (targetSection) {
        targetSection.classList.remove('d-none');
        // Si se proporciona una URL de video, asignarla al iframe de la sección
        if (videoUrl) {
            const iframe = targetSection.querySelector('iframe');
            if (iframe) {
                iframe.src = videoUrl;
            }
        }
    }
}

// Opcional: Asegúrate de que solo la sección de inicio se muestre al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showContent('inicio');
});
