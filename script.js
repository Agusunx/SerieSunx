document.addEventListener("DOMContentLoaded", function() {

    // --- 🟢 TU BIBLIOTECA ---
    const BIBLIOTECA = [
        {
            titulo: "Red Social",
            desc: "Mark Zuckerberg crea una red social que cambia el mundo, pero pierde a sus únicos amigos en el proceso.",
            anio: "2010",
            imagen: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/90016aaa-2f1d-40d8-b214-2de30bccc99a/08f7e552360f80efa0cd86d5f8b197e4e53d080f.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
            esSerie: false,
            url: "https://www.dropbox.com/scl/fi/ki8wkec3iy1eec8snyt97/RedSocial.mp4?rlkey=q0o5i78amtl70sdmsn9hgza2t&st=bwjp2q9v&raw=1"
        },
        {
            titulo: "Piratas de Silicon Valley",
            desc: "La rivalidad épica entre Steve Jobs (Apple) y Bill Gates (Microsoft) que definió la era tecnológica.",
            anio: "1999",
            imagen: "https://m.media-amazon.com/images/S/pv-target-images/94ef23ac98f01b92c32e69dc0bb675dc5e68dcfd4a899cd9d49c24c5f6a32690.png",
            esSerie: false,
            url: "https://www.dropbox.com/scl/fi/sw2sccrl5n8x3f9gt7scf/Silicon.mp4?rlkey=al95uv95jkg4mh7zm7ohd9mv7&st=gsy9sm1i&raw=1"
        },
        {
            titulo: "La Hermanastra Fea",
            desc: "Doris, la regente de 'La Manzana Envenenada'. Una aliada inesperada con mucha personalidad.",
            anio: "2004",
            imagen: "https://static.wikia.nocookie.net/shrek/images/3/39/Doris.jpg",
            esSerie: false,
            url: "https://mega.nz/file/j7ATBJAD#NJI8boHjfUO0KGLRh9h0LNy9c8sje0RbXHDhQkE8dXU"
        },
        {
            titulo: "Death Note",
            desc: "Un estudiante encuentra un cuaderno que le permite matar a cualquiera escribiendo su nombre.",
            anio: "2006",
            imagen: "https://scontent.fepa4-1.fna.fbcdn.net/v/t39.30808-6/471669239_1174628054663065_2465406793693556236_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=OZB30El-lGgQ7kNvwHVDnLn&_nc_oc=AdnMDUpGRZxdtQFKqjb5h10PD1EUpqUdFzMLzEFTk8CbT0m_aGOZU5oGkz5b82hN_-g&_nc_zt=23&_nc_ht=scontent.fepa4-1.fna&_nc_gid=XTLOvppToyUmQR7a3UeyRA&oh=00_Afo2TNvriYcMJ5yvyjBtDbLHThxyNTLQZNgK_jVKpOdAmQ&oe=69678616",
            esSerie: true,
            episodios: [
                { nombre: "Cap 1: Renacimiento", url: "LINK_1" },
                { nombre: "Cap 2: Duelo", url: "LINK_2" },
                { nombre: "Cap 3: Negociación", url: "LINK_3" }
            ]
        }
    ];

    // --- ELEMENTOS ---
    const grid = document.getElementById('grid-peliculas');
    const videoHTML = document.getElementById('reproductor');
    const posterInicial = document.getElementById('poster-inicial');
    const btnPlay = document.getElementById('btn-play-grande');
    const heroTitulo = document.getElementById('hero-titulo');
    const heroDesc = document.getElementById('hero-desc');
    const zonaEpisodios = document.getElementById('zona-episodios');
    const listaCapitulos = document.getElementById('lista-capitulos');

    // Cargar portada por defecto
    if(BIBLIOTECA.length > 0) cargarHero(BIBLIOTECA[0], false);

    // Generar Grid
    BIBLIOTECA.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.style.backgroundImage = `url('${item.imagen}')`;
        card.innerHTML = `<div class="card-content"><div class="card-title">${item.titulo}</div></div>`;
        card.onclick = () => cargarHero(item, true);
        grid.appendChild(card);
    });

    function cargarHero(item, hacerScroll) {
        // Reset total del área de video
        detenerYLimpiarVideo();
        
        posterInicial.style.backgroundImage = `url('${item.imagen}')`;
        heroTitulo.innerText = item.titulo;
        heroDesc.innerText = item.desc;
        posterInicial.style.display = 'flex';

        if(hacerScroll) window.scrollTo({ top: 0, behavior: 'smooth' });

        if (item.esSerie) {
            btnPlay.style.display = 'none';
            zonaEpisodios.classList.remove('hidden');
            renderizarEpisodios(item.episodios);
        } else {
            btnPlay.style.display = 'inline-flex';
            zonaEpisodios.classList.add('hidden');
            btnPlay.onclick = () => reproducirVideo(item.url);
        }
    }

    function renderizarEpisodios(lista) {
        listaCapitulos.innerHTML = "";
        lista.forEach(cap => {
            const btn = document.createElement('button');
            btn.className = 'episode-btn';
            btn.innerText = cap.nombre;
            btn.onclick = () => reproducirVideo(cap.url);
            listaCapitulos.appendChild(btn);
        });
    }

    function detenerYLimpiarVideo() {
        // Pausar video de Dropbox
        videoHTML.pause();
        videoHTML.src = "";
        videoHTML.classList.add('hidden');
        
        // Eliminar cualquier iframe previo de MEGA
        const iframeViejo = document.getElementById('mega-iframe');
        if (iframeViejo) iframeViejo.remove();
    }

    function reproducirVideo(url) {
        if (!url || url.includes("LINK_")) return alert("⚠️ Link no disponible");

        detenerYLimpiarVideo();
        posterInicial.style.display = 'none';

        if (url.includes("mega.nz")) {
            // LÓGICA MEGA: Crear Iframe con Sandbox para evitar redirección/descarga
            const iframe = document.createElement('iframe');
            iframe.id = 'mega-iframe';
            // IMPORTANTE: Cambiar /file/ por /embed/
            iframe.src = url.replace("mega.nz/file/", "mega.nz/embed/");
            
            // Atributos de seguridad y visualización
            iframe.style.width = "100%";
            iframe.style.height = "100%";
            iframe.style.aspectRatio = "16/9";
            iframe.style.border = "none";
            iframe.setAttribute('allowfullscreen', 'true');
            // El sandbox permite que el video cargue pero bloquea que la página te saque de tu sitio
            iframe.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-presentation');

            videoHTML.parentElement.appendChild(iframe);
        } else {
            // LÓGICA DROPBOX
            videoHTML.classList.remove('hidden');
            videoHTML.src = url;
            videoHTML.play();
        }
    }
});
