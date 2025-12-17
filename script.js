
// Datos de Películas (Ahora con descripciones)
const movies = [
    { 
        id: '1', 
        title: 'Death Note', 
        category: 'Tendencias Ahora', 
        image: 'https://placehold.co/400x600/1e293b/ffffff?text=Death+Note', 
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Un brillante estudiante encuentra un cuaderno sobrenatural que le permite matar a cualquiera.'
    },
    { 
        id: '2', 
        title: 'El Silencio de los Corderos', 
        category: 'Películas de Terror', 
        image: 'https://placehold.co/400x600/334155/ffffff?text=Hannibal', 
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Una joven cadete del FBI busca la ayuda de un asesino caníbal encarcelado.'
    },
    { 
        id: '3', 
        title: 'The Witcher', 
        category: 'Tendencias Ahora', 
        image: 'https://placehold.co/400x600/475569/ffffff?text=The+Witcher', 
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Geralt de Rivia, un cazador de monstruos mutado, viaja hacia su destino en un mundo turbulento.'
    },
    { 
        id: '4', 
        title: 'El Resplandor', 
        category: 'Películas de Terror', 
        image: 'https://placehold.co/400x600/64748b/ffffff?text=Shining', 
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Una familia se dirige a un hotel aislado para el invierno donde una presencia maligna influye en el padre.'
    },
    { 
        id: '5', 
        title: 'The Office', 
        category: 'Para Maratón', 
        image: 'https://placehold.co/400x600/94a3b8/ffffff?text=The+Office', 
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Un falso documental sobre un grupo de oficinistas típicos, donde la jornada laboral consiste en choques de ego y comportamientos inapropiados.'
    },
    // Puedes agregar el resto de tus películas aquí...
    { id: '15', title: 'Game of Thrones', category: 'Para Maratón', image: 'https://placehold.co/400x600/1e40af/ffffff?text=GOT', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', description: 'Nueve familias nobles luchan por el control de las tierras de Westeros.' }
];

// Elementos del DOM
const carousels = {
    'Tendencias Ahora': document.getElementById('carousel-tendencias'),
    'Películas de Terror': document.getElementById('carousel-terror'),
    'Para Maratón': document.getElementById('carousel-maraton'),
};

const videoPlayerModal = document.getElementById('video-player-modal');
const videoPlayer = document.getElementById('video-player');
const closeVideoButton = document.getElementById('close-video');

// Elementos del Hero Section
const heroTitle = document.getElementById('hero-title');
const heroDesc = document.getElementById('hero-desc');
const heroImg = document.getElementById('hero-img');
const heroBtn = document.getElementById('hero-btn');

// --- Funciones ---

function renderMovies() {
    // Limpiar carruseles
    Object.values(carousels).forEach(c => { if(c) c.innerHTML = ''; });

    movies.forEach(movie => {
        const carousel = carousels[movie.category];
        if (!carousel) return;

        const card = document.createElement('div');
        card.className = 'movie-card flex-shrink-0 w-40 sm:w-48 h-60 sm:h-72 rounded-lg overflow-hidden cursor-pointer shadow-lg relative bg-gray-800';
        card.dataset.id = movie.id;

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}" class="w-full h-full object-cover">
        `;

        carousel.appendChild(card);
    });
}

function updateHero(movie) {
    heroTitle.textContent = movie.title;
    heroDesc.textContent = movie.description || 'Disfruta de este título exclusivo en SerieSunx.';
    // Usamos placehold.co con resolución alta para simular banner
    heroImg.src = movie.image.replace('400x600', '1920x1080'); 
    
    // Actualizar el botón principal para ver ESTA película
    heroBtn.onclick = () => showVideoPlayer(movie.videoUrl);
}

function showVideoPlayer(url) {
    videoPlayer.src = url;
    videoPlayerModal.classList.remove('hidden');
    videoPlayerModal.classList.add('flex');
    videoPlayer.play();
}

function hideVideoPlayer() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
    videoPlayerModal.classList.add('hidden');
    videoPlayerModal.classList.remove('flex');
    videoPlayer.src = '';
}

// --- Event Listeners ---

document.addEventListener('DOMContentLoaded', () => {
    renderMovies();

    // Delegación de eventos para las tarjetas (Optimización)
    document.querySelectorAll('.thumbnails-carousel').forEach(carousel => {
        carousel.addEventListener('click', (e) => {
            const card = e.target.closest('.movie-card');
            if (card) {
                const movie = movies.find(m => m.id === card.dataset.id);
                if (movie) {
                    // Actualiza el Hero y haz scroll suave hacia arriba
                    updateHero(movie);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }
        });
    });

    // Botón cerrar modal
    closeVideoButton.addEventListener('click', hideVideoPlayer);

    // Cerrar modal al hacer clic fuera del video
    videoPlayerModal.addEventListener('click', (e) => {
        if (e.target === videoPlayerModal) hideVideoPlayer();
    });

    // Tecla Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !videoPlayerModal.classList.contains('hidden')) {
            hideVideoPlayer();
        }
    });

    // Inicializar el botón del Hero con la primera película (Death Note) por defecto
    const firstMovie = movies[0];
    if(firstMovie) {
        heroBtn.onclick = () => showVideoPlayer(firstMovie.videoUrl);
    }
});
