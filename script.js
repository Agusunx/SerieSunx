document.addEventListener("DOMContentLoaded", function() {

    // --- 🟢 TU BIBLIOTECA ---
    const BIBLIOTECA = [
        {
            titulo: "Ao Haru Ride", 
            desc: "Futaba se reencuentra con Kou, su primer amor de la infancia, solo para descubrir que él ha cambiado por completo.",
            anio: "2026",
            imagen: "https://m.media-amazon.com/images/M/MV5BMzNmNjQ3OTEtMjIzOS00ZDg2LWEwMTYtMzk1ZWEzNGFiMzVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
            esSerie: true,
            episodios: [
                { nombre: "Capítulo 1", url: "https://mega.nz/embed/hskljSDK#6foU1oDZ58gGQrpZecvSPjPRDazM99N7F6stPcln6nw" },
                { nombre: "Capítulo 2", url: "https://mega.nz/embed/I4lCUA4K#BOu959iGXGAzcSGA-LgZuUil8RWli75XU5f8FMGaWyk" },
                { nombre: "Capítulo 3", url: "https://mega.nz/embed/gwdBXACY#XrKk2u-JyGoj4Lx65U3fM_qj-ByW3GXP823cYhPLZhM" },
                { nombre: "Capítulo 4", url: "https://www.yourupload.com/embed/C68JclOyxdr4" },
                { nombre: "Capítulo 5", url: "https://www.yourupload.com/embed/jS842f0ggK3V" },
                { nombre: "Capítulo 6", url: "https://www.yourupload.com/embed/OL1kS88JBYgn" },
                { nombre: "Capítulo 7", url: "https://www.yourupload.com/embed/EePwowpU1odj" },
                { nombre: "Capítulo 8", url: "https://mega.nz/embed/r0tiDCaY#5DPYENqgbGuzrbNIQs2ya8T6MUDD9fhmtp4EnQSpf_I" },
                { nombre: "Capítulo 9", url: "https://www.yourupload.com/embed/Gjep1kQqs2he" },
                { nombre: "Capítulo 10", url: "https://www.yourupload.com/embed/Fmqu6sjR5005" },
                { nombre: "Capítulo 11", url: "https://www.yourupload.com/embed/KMrb2S0t8rqR" },
                { nombre: "Capítulo 12", url: "https://www.yourupload.com/embed/2UJ6TDUy4atg" },
                { nombre: "Capítulo 13", url: "https://www.yourupload.com/embed/lA2u8F7BBO8o" }
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
            imagen: "https://i1.whakoom.com/large/1b/23/f9fa310874944386bee15beb23990b6f.jpg",
            esSerie: true,
            episodios: [
                { nombre: "Cap 1: Renacimiento", url: "https://www.yourupload.com/embed/C25TFyQ5pnNs"},
                { nombre: "Cap 2: Duelo", url: "https://www.yourupload.com/embed/6LuJXvkW5DN0" },
                { nombre: "Cap 3: Negociación", url: "https://www.yourupload.com/embed/i4W5U6JKlQcx" }
            ]
        }
    ];

    const grid = document.getElementById('grid-peliculas');
    const reproductor = document.getElementById('reproductor');
    const posterInicial = document.getElementById('poster-inicial');
    const btnPlay = document.getElementById('btn-play-grande');
    const heroTitulo = document.getElementById('hero-titulo');
    const heroDesc = document.getElementById('hero-desc');
    const zonaEpisodios = document.getElementById('zona-episodios');
    const listaCapitulos = document.getElementById('lista-capitulos');

    // MUESTRA EL INICIO (PANORAMA GENERAL)
    function mostrarHome() {
        posterInicial.style.backgroundImage = "url('https://i.imgur.com/Ly4FH3A.png')";
        heroTitulo.innerText = "¡Bienvenido a SerieSunx!";
        heroDesc.innerText = "Seleccioná una película o serie de la cartelera para comenzar.";
        
        btnPlay.style.display = 'none'; 
        zonaEpisodios.classList.add('hidden');
        reproductor.classList.add('hidden');
        limpiarReproductor();
    }

    mostrarHome();

    // GENERAR CARTELERA
    if (grid) {
        BIBLIOTECA.forEach((item) => {
            const card = document.createElement('div');
            card.className = 'movie-card';
            card.style.backgroundImage = `url('${item.imagen}')`;
            card.innerHTML = `
                ${item.anio ? `<div class="year-badge">${item.anio}</div>` : ''}
                <div class="card-content">
                    <div class="card-title">${item.titulo}</div>
                </div>
            `;
            card.onclick = () => cargarHero(item, true);
            grid.appendChild(card);
        });
    }

    function cargarHero(item, hacerScroll) {
        posterInicial.style.backgroundImage = `url('${item.imagen}')`;
        heroTitulo.innerText = item.titulo;
        heroDesc.innerText = item.desc;
        limpiarReproductor();
        
        posterInicial.style.display = 'flex'; 
        reproductor.classList.add('hidden');

        if(hacerScroll) window.scrollTo({ top: 0, behavior: 'smooth' });

        if (item.esSerie) {
            btnPlay.style.display = 'none';
            zonaEpisodios.classList.remove('hidden');
            renderizarEpisodios(item.episodios);
        } else {
            btnPlay.style.display = 'flex'; // Forzamos visibilidad para películas
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
            btn.onclick = () => {
                document.querySelectorAll('.episode-btn').forEach(b => b.classList.remove('playing'));
                btn.classList.add('playing');
                reproducirVideo(cap.url);
            };
            listaCapitulos.appendChild(btn);
        });
    }

    function limpiarReproductor() {
        const iframeViejo = document.getElementById('iframe-externo');
        if (iframeViejo) iframeViejo.remove();
        if (reproductor) {
            reproductor.pause();
            reproductor.src = "";
        }
    }

    function reproducirVideo(url) {
        if (!url) return;
        limpiarReproductor();
        posterInicial.style.display = 'none'; 

        if (url.includes("mega.nz/embed") || url.includes("yourupload.com/embed")) {
            reproductor.classList.add('hidden');
            const iframe = document.createElement('iframe');
            iframe.id = 'iframe-externo';
            iframe.src = url;
            iframe.width = "100%";
            iframe.height = "100%";
            iframe.style.aspectRatio = "16/9";
            iframe.frameBorder = "0";
            iframe.allowFullscreen = true;
            reproductor.parentElement.appendChild(iframe);
        } else {
            reproductor.classList.remove('hidden');
            reproductor.src = url;
            reproductor.load();
            reproductor.play().catch(e => console.log("Play bloqueado:", e));
        }
    }
});
