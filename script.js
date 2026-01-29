document.addEventListener("DOMContentLoaded", function() {

    // --- 🟢 TU BIBLIOTECA (Actualizada con la serie de Flo) ---
    const BIBLIOTECA = [
        {
            titulo: "Ao Haru Ride ", 
            desc: "Capítulo 1.",
            anio: "2026",
            imagen: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop", // Puedes cambiar esta imagen
            esSerie: true,
            episodios: [
                { 
                    nombre: "Capítulo 1", 
                    url: "https://mega.nz/embed/hskljSDK#6foU1oDZ58gGQrpZecvSPjPRDazM99N7F6stPcln6nw" 
                },
                { 
                    nombre: "Capitulo 2",
                    url: "https://mega.nz/embed/I4lCUA4K#BOu959iGXGAzcSGA-LgZuUil8RWli75XU5f8FMGaWyk"
                 }
            ]
        },
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
            titulo: "Death Note",
            desc: "Un estudiante superdotado encuentra un cuaderno que le permite matar a cualquiera escribiendo su nombre.",
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

    // -------------------------------------

    const grid = document.getElementById('grid-peliculas');
    const reproductor = document.getElementById('reproductor');
    const posterInicial = document.getElementById('poster-inicial');
    const btnPlay = document.getElementById('btn-play-grande');
    
    const heroTitulo = document.getElementById('hero-titulo');
    const heroDesc = document.getElementById('hero-desc');
    
    const zonaEpisodios = document.getElementById('zona-episodios');
    const listaCapitulos = document.getElementById('lista-capitulos');

    // 1. CARGAR PRIMERA PELI POR DEFECTO
    if(BIBLIOTECA.length > 0) {
        cargarHero(BIBLIOTECA[0], false);
    }

    // 2. GENERAR GRID
    BIBLIOTECA.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        
        if(item.imagen) {
            card.style.backgroundImage = `url('${item.imagen}')`;
        } else {
            card.style.background = '#333';
        }

        card.innerHTML = `
            ${item.anio ? `<div class="year-badge">${item.anio}</div>` : ''}
            <div class="card-content">
                <div class="card-title">${item.titulo}</div>
            </div>
        `;

        card.onclick = () => cargarHero(item, true);
        grid.appendChild(card);
    });

    // 3. FUNCIÓN PARA MOSTRAR LA INFO EN EL BANNER GIGANTE
    function cargarHero(item, hacerScroll) {
        posterInicial.style.backgroundImage = `url('${item.imagen}')`;
        heroTitulo.innerText = item.titulo;
        heroDesc.innerText = item.desc;
        
        // Resetear estado del player y quitar iframe si existía
        const iframeViejo = document.getElementById('iframe-mega');
        if (iframeViejo) iframeViejo.remove();

        posterInicial.style.display = 'flex'; 
        reproductor.classList.add('hidden');  
        reproductor.pause();

        if(hacerScroll) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (item.esSerie) {
            btnPlay.style.display = 'none';
            zonaEpisodios.classList.remove('hidden');
            renderizarEpisodios(item.episodios);
        } else {
            btnPlay.style.display = 'inline-flex';
            zonaEpisodios.classList.add('hidden');
            
            btnPlay.onclick = () => {
                reproducirVideo(item.url);
            };
        }
    }

    // 4. GENERAR BOTONES DE EPISODIOS
    function renderizarEpisodios(lista) {
        listaCapitulos.innerHTML = "";
        lista.forEach(cap => {
            const btn = document.createElement('button');
            btn.className = 'episode-btn';
            btn.innerText = cap.nombre;
            btn.onclick = () => {
                document.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('playing'));
                btn.classList.add('playing');
                reproducirVideo(cap.url);
            };
            listaCapitulos.appendChild(btn);
        });
    }

    // 5. REPRODUCIR VIDEO (SOPORTA DROPBOX Y MEGA)
    function reproducirVideo(url) {
        if (!url || url.includes("LINK_")) {
            alert("⚠️ Link no disponible");
            return;
        }

        const contenedorPadre = reproductor.parentElement;
        posterInicial.style.display = 'none'; 

        // Eliminar iframe previo si existe
        const iframeViejo = document.getElementById('iframe-mega');
        if (iframeViejo) iframeViejo.remove();

        if (url.includes("mega.nz/embed")) {
            // Lógica para MEGA
            reproductor.classList.add('hidden');
            reproductor.pause();

            const iframe = document.createElement('iframe');
            iframe.id = 'iframe-mega';
            iframe.src = url;
            iframe.width = "100%";
            iframe.height = "100%";
            iframe.style.aspectRatio = "16/9"; // Mantiene la forma
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            
            contenedorPadre.appendChild(iframe);
        } else {
            // Lógica para Dropbox / Directo
            reproductor.classList.remove('hidden');
            reproductor.src = url;
            reproductor.play().catch(e => console.log("Error al reproducir: ", e));
        }
    }
});



