// Array de objetos con la información de cada película
const movies = [
    {
        id: 'encanto',
        title: 'Encanto',
        imageUrl: 'https://c.files.bbci.co.uk/A91F/production/_121759234_1encanto_group.jpg',
        videoUrl: 'https://www.tokyvideo.com/es/embed/670478'
    },
    {
        id: 'culpa-mia',
        title: 'Culpa Mia',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDc9xlS1eaIX-E3ZrnMA2Lwl-ns33AS-VvMg&s',
        videoUrl: 'https://www.tokyvideo.com/es/embed/553493'
    },
    {
        id: 'extrano-mundo-de-jack',
        title: 'El Extraño Mundo De Jack',
        imageUrl: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/96EBE200B57B23A030F6CFF088EDBAA0AABE7F23F871E30B13A584FE9B098BB1/scale?width=1200&aspectRatio=1.78&format=webp',
        videoUrl: 'https://drive.google.com/file/d/1e8XhJoly6iOLzHS6v0pzEYQPwoHkPlhL/preview'
    },
    {
        id: 'shrek',
        title: 'Shrek',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/39/Shrek.jpg',
        videoUrl: 'https://drive.google.com/file/d/1-6OZPTFXANhEF1YfElMUoMXl84SBEatp/preview'
    },
    {
        id: 'tn-en-vivo',
        title: 'TN EN VIVO',
        imageUrl: 'https://www.5900.tv/wp-content/uploads/2020/12/tn-vivo.jpg',
        videoUrl: 'https://www.youtube.com/embed/aC3y0rC0f1U?autoplay=1'
    },
    {
        id: 'mortal-kombat',
        title: 'Mortal Kombat Legends',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFsdnpA-y5utCH55hWDx_tmYSGbz7WYZfdw&s',
        videoUrl: 'https://www.tokyvideo.com/embed/296950'
    },
    {
        id: 'john-wick',
        title: 'John Wick',
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg',
        videoUrl: 'https://www.tokyvideo.com/embed/459643'
    },
    {
        id: 'light-shop',
        title: 'Light shop',
        imageUrl: 'https://0.soompi.io/wp-content/uploads/2024/11/05210110/light-shop-01.jpeg',
        videoUrl: 'https://www.tokyvideo.com/es/embed/631455'
    },
    {
        id: 'death-note',
        title: 'Death Note',
        imageUrl: 'https://i0.wp.com/www.septimacaja.com/wp-content/uploads/3048628-4726801454-death_ya2w.jpg?fit=1680%2C1050&ssl=1',
        videoUrl: 'https://www.tokyvideo.com/es/embed/193673'
    },
    {
        id: 'uqload-movie',
        title: 'El Ángel',
        imageUrl: 'https://encuestadecineargentino.com/wp-content/uploads/2022/10/elangel.jpg',
        videoUrl: 'https://uqload.net/embed-t5s2adh8c7oi.html'
    }
];

// Función para generar las tarjetas de películas y sus reproductores
function generateMovieContent() {
    const moviesContainer = document.getElementById('movies-container');
    const videoPlayersContainer = document.getElementById('video-players-container');

    movies.forEach(movie => {
        // Crear la tarjeta de la película en la sección de inicio
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-3', 'mb-4');
        colDiv.innerHTML = `
            <div class="nav-item">
                <img src="${movie.imageUrl}" alt="${movie.title}" class="img-thumbnail">
                <a class="nav-link" href="#" onclick="showContent('${movie.id}')">${movie.title}</a>
            </div>
        `;
        moviesContainer.appendChild(colDiv);

        // Crear el reproductor de video para cada película
        const videoSectionDiv = document.createElement('div');
        videoSectionDiv.id = movie.id;
        videoSectionDiv.classList.add('content-section', 'd-none');
        videoSectionDiv.innerHTML = `
            <h3 class="text-center">${movie.title}</h3>
            <div class="embed-responsive embed-responsive-16by9 mx-auto" style="max-width: 640px;">
                <iframe id="${movie.id}-iframe" class="embed-responsive-item" src="${movie.videoUrl}" frameborder="0" scrolling="no" allowfullscreen webkitallowfullscreen mozallowfullscreen allowtransparency></iframe>
            </div>
            <button class="btn btn-primary mt-3" onclick="showContent('inicio')">Volver a Inicio</button>
        `;
        videoPlayersContainer.appendChild(videoSectionDiv);
    });
}

// Función para mostrar/ocultar secciones de contenido
function showContent(id) {
    // Ocultar todas las secciones de contenido
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.add('d-none');
    });

    // Mostrar la sección seleccionada
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.remove('d-none');
    }
}

// Llamar a la función para generar las tarjetas cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', generateMovieContent);
