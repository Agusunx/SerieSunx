const HERO_INTERVAL = 5000;

const BIBLIOTECA = [
    {
        titulo: "Ao Haru Ride",
        tipo: "anime",
        desc: "Futaba se reencuentra con Kou, su primer amor de la infancia, solo para descubrir que él ha cambiado por completo.",
        anio: "2014",
        imagen: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/247773b95ec27c45db5cf7239240e29a.jpg",
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
        titulo: "Death Note",
        tipo: "anime",
        desc: "Un estudiante superdotado encuentra un cuaderno sobrenatural que le permite matar a cualquier persona escribiendo su nombre.",
        anio: "2006",
        imagen: "https://i0.wp.com/www.septimacaja.com/wp-content/uploads/3048628-4726801454-death_ya2w.jpg",
        esSerie: true,
        episodios: [
            { nombre: "Cap 1: Renacimiento", url: "https://www.yourupload.com/embed/C25TFyQ5pnNs" },
            { nombre: "Cap 2: Duelo", url: "https://www.yourupload.com/embed/6LuJXvkW5DN0" },
            { nombre: "Cap 3: Negociación", url: "https://www.yourupload.com/embed/i4W5U6JKlQcx" },
            { nombre: "Cap 4: Persecución", url: "https://www.yourupload.com/embed/sWEL12h7u8bb" },
            { nombre: "Cap 5: Táctica", url: "https://www.yourupload.com/embed/Jmjc1fgwLsW4" },
            { nombre: "Cap 6: Herida abierta", url: "https://www.yourupload.com/embed/i4A7XK8Wme1M" },
            { nombre: "Cap 7: Tentación", url: "https://www.yourupload.com/embed/5T87FC3lQ03W" },
            { nombre: "Cap 8: Horizonte", url: "https://www.yourupload.com/embed/NyMTFxp3a4iQ" },
            { nombre: "Cap 9: Contacto", url: "https://www.yourupload.com/embed/0cXOU3hk82Pk" },
            { nombre: "Cap 10: Sospecha", url: "https://www.yourupload.com/embed/A2DUfW2q7eYJ" },
            { nombre: "Cap 11: Asalto", url: "https://www.yourupload.com/embed/3oJE2hQed52Y" },
            { nombre: "Cap 12: Amor", url: "https://www.yourupload.com/embed/Ax8NcA7tLRwc" },
            { nombre: "Cap 13: Confesión", url: "https://www.yourupload.com/embed/3GkH1G3qV5K6" },
            { nombre: "Cap 14: Amistad", url: "https://www.yourupload.com/embed/tr6R751Y76W7" },
            { nombre: "Cap 15: Apuesta", url: "https://www.yourupload.com/embed/qRSYB3qsTdP0" },
            { nombre: "Cap 16: Decisión", url: "https://www.yourupload.com/embed/fbEc35E5UgPu" },
            { nombre: "Cap 17: Ejecución", url: "https://www.yourupload.com/embed/roKi5Y4ysW4b" },
            { nombre: "Cap 18: Aliados", url: "https://www.yourupload.com/embed/6a1105Y8IH1e" },
            { nombre: "Cap 19: Matzuda", url: "https://www.yourupload.com/embed/1oPEfCW61nW8" },
            { nombre: "Cap 20: Improvisación", url: "https://www.yourupload.com/embed/8iVxv4hUW760" },
            { nombre: "Cap 21: Actividad", url: "https://www.yourupload.com/embed/5PdbCg4b0DuG" },
            { nombre: "Cap 22: Inducción", url: "https://www.yourupload.com/embed/gGSmfUC3rbsv" },
            { nombre: "Cap 23: Frenesí", url: "https://www.yourupload.com/embed/ex2eq33IRqYb" },
            { nombre: "Cap 24: Resurrección", url: "https://www.yourupload.com/embed/5Fin6EKu7s46" },
            { nombre: "Cap 25: Silencio", url: "https://www.yourupload.com/embed/p63nOBRGe8X0" },
            { nombre: "Cap 26: Regeneración", url: "https://www.yourupload.com/embed/tRvB78Bie70k" },
            { nombre: "Cap 27: Secuestro", url: "https://www.yourupload.com/embed/N8tCFX6HC7JJ" },
            { nombre: "Cap 28: Impaciencia", url: "https://www.yourupload.com/embed/1TO5K66o018y" },
            { nombre: "Cap 29: Padre", url: "https://www.yourupload.com/embed/Oa32y5YeEFEM" },
            { nombre: "Cap 30: Justicia", url: "https://www.yourupload.com/embed/mo3Kd4XN8DHc" },
            { nombre: "Cap 31: Transferencia", url: "https://www.yourupload.com/embed/3Kj7M850H8G3" },
            { nombre: "Cap 32: Selección", url: "https://www.yourupload.com/embed/gb8eAR3uIKPl" },
            { nombre: "Cap 33: Desprecio", url: "https://www.yourupload.com/embed/quhayLyvj5cY" },
            { nombre: "Cap 34: Vigilancia", url: "https://www.yourupload.com/embed/CriOcv8U2E8O" },
            { nombre: "Cap 35: Intento", url: "https://www.yourupload.com/embed/pUeEpB38sxXa" },
            { nombre: "Cap 36: 28 de enero", url: "https://www.yourupload.com/embed/pUeEpB38sxXa" },
            { nombre: "Cap 37: Nuevo Mundo", url: "https://www.yourupload.com/embed/n50l3d7H507i" }
        ]
    },
    {
        titulo: "Elfen Lied",
        tipo: "anime",
        desc: "Terror y ciencia ficción sobre Lucy, una mutante con poderes telequinéticos y doble personalidad que escapa de un laboratorio.",
        anio: "2004",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/2df46d72b94fb81c262786afb9776206de0fae8ad22c80fb290b5854c8f5e60e.jpg",
        esSerie: true,
        episodios: [
            { nombre: "Capítulo 1", url: "https://www.yourupload.com/embed/fEx3Q5F44n4w" },
            { nombre: "Capítulo 2", url: "https://mega.nz/embed/9DMjzQhB#WzKpvkOabugPzWKZ_wlmCHqW1ZvRkMda1qNXmAZto7" },
            { nombre: "Capítulo 3", url: "https://www.yourupload.com/embed/sNftS74nv7pt" },
            { nombre: "Capítulo 4", url: "https://mega.nz/embed/xe1C2ILB#2ys7J1zZedpXQA9Skm78rhuh35nCZrfb2XFMb5cvVYs" },
            { nombre: "Capítulo 5", url: "https://www.yourupload.com/embed/HwjR6AP8TSAh" },
            { nombre: "Capítulo 6", url: "https://mega.nz/embed/9DMjzQhB#WzKpvkOabugPzWKZ_wlmCHqW1ZvRkMda1qNXmAZto7I" },
            { nombre: "Capítulo 7", url: "https://mega.nz/embed/wL9GiLbC#UeOrzdhOlP_MISBs1AAhrW5VDghY1hRMrUkM9aLodaU" },
            { nombre: "Capítulo 8", url: "https://mega.nz/embed/lWtkQZoC#nid2Jm_Ny60Cfwk_kFS-ZxkfLklO-wGtC3BB5dUZGbg" },
            { nombre: "Capítulo 9", url: "https://mega.nz/embed/gX1kRRRR#DKXILlVuayprrfbi5L5V6DJrXeB-VIsvAbSp1zKTT9I" },
            { nombre: "Capítulo 10", url: "https://mega.nz/embed/EblmWIJA#0F68U0jH1U4iZQtv-KVu9rlNMWZjugM1p8GAaxwMYhY" },
            { nombre: "Capítulo 11", url: "https://mega.nz/embed/JDFQwCRA#joEYHBT6_g1GESpc14wwoeOyqAxiYhkc53hgIIKDgFo" },
            { nombre: "Capítulo 12", url: "https://mega.nz/embed/Qlpk3SZS#FsJ3vWF_gEUxqtA1WZkKIpPoSIcFz8O6ot8SuLOrxLo" },
            { nombre: "Capítulo 13", url: "https://mega.nz/embed/Ehp0DYzA#EbQZV60QAkv6MPA_pzkKzyBiCVGP6J2Sw2x51EYYtgw" }
        ]
    },
    {
        titulo: "Romantic Killer",
        tipo: "anime",
        desc: "Anzu Hoshino disfruta de su soltería hasta que un ser mágico aparece para convertir su vida en un cliché de comedia romántica.",
        anio: "2022",
        imagen: "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABf8Zu33riJQI2nwjNEv7O5bYfKTTBuDuPTbCv4-u6I8xhTk4qDM1XeocgHSth903-nBiPnKTwOlj5kLRZuzuSjFdWzM6o1Z2sUti.jpg",
        esSerie: true,
        episodios: [
            { nombre: "Capítulo 1", url: "https://mega.nz/embed/sb8F1bAZ#ashOuZV9nO4udFa_ghlsaVK8rEWlIwe8Ima6CuM_y0E" },
            { nombre: "Capítulo 2", url: "https://mega.nz/embed/xaEDSJ7Z#DyVIQyQAzDXRMwOJpPouRJfPkYUJiKqlB1mManv4csQ" },
            { nombre: "Capítulo 3", url: "https://mega.nz/embed/sCNBCBKJ#1yOU3UxCAqq_k60WeI37GFhrco-5eKm2LvM2h7Od1t" },
            { nombre: "Capítulo 4", url: "https://mega.nz/embed/dGFg2RYZ#YKWcaTUgs3uN1xkxkISfJcICkbWDJcTYoAT--87dItg" },
            { nombre: "Capítulo 5", url: "https://mega.nz/embed/ELUjwDhS#QlC4nd1KJ9PxfGbHPbqiW8yYpAS9zBq4UF8kI9Eqlso" },
            { nombre: "Capítulo 6", url: "https://mega.nz/embed/pa8ikbyL#lJDPtKT6uL79MVPhj6QIfAVqtO1p_KAb-bkX-jcI41s" },
            { nombre: "Capítulo 7", url: "https://mega.nz/embed/4CkzjZIQ#QXdiwRQfeBxc9afW89PX9kMivBCdNcsIvUetxuZ90vs" },
            { nombre: "Capítulo 8", url: "https://mega.nz/embed/8H9iwZ7a#6fMqlids2Y2mKiyIYV_ARflfq0smEwpP4Arct0765zg" },
            { nombre: "Capítulo 9", url: "https://mega.nz/embed/FLU1XK7Z#Zniy74UfAAd0s1xnyJbJ0BVeTjUKxQUnDqkcnxkMKfA" },
            { nombre: "Capítulo 10", url: "https://mega.nz/embed/IGF11LAD#AEPQUKEgxzC2NmKYigZ67p10FOIxwzYbqEAZwsdWsXM" },
            { nombre: "Capítulo 11", url: "https://mega.nz/embed/5XcCmDzT#IgqMpzCzueHoE2cvDwKVGuOMjkcWL92DGzQxRuaSvxE" },
            { nombre: "Capítulo 12", url: "https://mega.nz/embed/ZT93lKbA#2rbFS8zF_fp3PnZS5qIQefqE1654vVHpI1EkRdtL_0o" }
        ]
    },
    {
        titulo: "Red Social",
        tipo: "pelicula",
        desc: "Mark Zuckerberg crea Facebook y cambia el mundo, pero pierde a sus únicos amigos en el proceso.",
        anio: "2010",
        imagen: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/90016aaa-2f1d-40d8-b214-2de30bccc99a/08f7e552360f80efa0cd86d5f8b197e4e53d080f.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom",
        esSerie: false,
        url: "https://www.dropbox.com/scl/fi/ki8wkec3iy1eec8snyt97/RedSocial.mp4?rlkey=q0o5i78amtl70sdmsn9hgza2t&st=bwjp2q9v&raw=1"
    },
    {
        titulo: "Piratas de Silicon Valley",
        tipo: "pelicula",
        desc: "La rivalidad épica entre Steve Jobs y Bill Gates que definió la era tecnológica moderna.",
        anio: "1999",
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/94ef23ac98f01b92c32e69dc0bb675dc5e68dcfd4a899cd9d49c24c5f6a32690.png",
        esSerie: false,
        url: "https://www.dropbox.com/scl/fi/sw2sccrl5n8x3f9gt7scf/Silicon.mp4?rlkey=al95uv95jkg4mh7zm7ohd9mv7&st=gsy9sm1i&raw=1"
    },
    // __ADMIN_INJECT__
];

/* ─── STORAGE ─── */
const S = {
    get: (k, d) => { try { const v = localStorage.getItem(k); return v !== null ? JSON.parse(v) : d; } catch { return d; } },
    set: (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} }
};

function getBibliotecaCompleta() {
    const extras = S.get('sx_extras', []);
    if (!extras.length) return BIBLIOTECA;
    const base = new Set(BIBLIOTECA.map(b => b.titulo.toLowerCase()));
    return [...BIBLIOTECA, ...extras.filter(e => !base.has(e.titulo.toLowerCase()))];
}

/* ─── ESTADO ─── */
let BLIB = [];
let catActiva = 'Todo';
let heroItems = [];
let heroIdx = 0;
let heroTimer = null;
let itemActual = null;

/* ─── INIT ─── */
document.addEventListener('DOMContentLoaded', () => {
    BLIB = getBibliotecaCompleta();
    setupTabs();
    setupBuscador();
    renderHero();
    renderGrid(BLIB);
    renderContinuar();
    renderFavs();
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') { cerrarModal(); cerrarAdmin(); } });
});

/* ─── TABS ─── */
function setupTabs() {
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            catActiva = btn.dataset.cat;
            filtrar();
        });
    });
}

function filtrar() {
    const q = document.getElementById('buscador').value.toLowerCase().trim();
    const mapa = { Anime: 'anime', Series: 'serie', 'Películas': 'pelicula' };
    let items = BLIB;
    if (catActiva !== 'Todo') items = items.filter(i => i.tipo === mapa[catActiva]);
    if (q) items = items.filter(i => i.titulo.toLowerCase().includes(q));
    renderGrid(items);
    document.getElementById('sin-resultados').classList.toggle('hidden', items.length > 0);
}

function setupBuscador() {
    let t;
    document.getElementById('buscador').addEventListener('input', () => { clearTimeout(t); t = setTimeout(filtrar, 200); });
}

/* ─── HERO ─── */
function renderHero() {
    heroItems = BLIB.slice(0, 8);
    const dots = document.getElementById('hero-dots');
    dots.innerHTML = '';
    heroItems.forEach((_, i) => {
        const d = document.createElement('button');
        d.className = 'hero-dot' + (i === 0 ? ' active' : '');
        d.onclick = () => { clearInterval(heroTimer); mostrarHero(i); heroTimer = setInterval(() => mostrarHero((heroIdx + 1) % heroItems.length), HERO_INTERVAL); };
        dots.appendChild(d);
    });
    mostrarHero(0);
    clearInterval(heroTimer);
    heroTimer = setInterval(() => mostrarHero((heroIdx + 1) % heroItems.length), HERO_INTERVAL);
}

function mostrarHero(idx) {
    const item = heroItems[idx];
    if (!item) return;
    heroIdx = idx;
    const bd = document.getElementById('hero-backdrop');
    bd.style.opacity = '0';
    setTimeout(() => { bd.style.backgroundImage = item.imagen ? `url('${item.imagen}')` : 'none'; bd.style.opacity = '1'; }, 300);
    document.getElementById('hero-titulo').textContent = item.titulo;
    document.getElementById('hero-desc').textContent = item.desc || '';
    document.getElementById('hero-anio').textContent = item.anio || '';
    const tipoMap = { anime: '🎌 Anime', serie: '📺 Serie', pelicula: '🎬 Película' };
    document.getElementById('hero-tipo').textContent = tipoMap[item.tipo] || '';
    const prog = S.get('sx_prog', {});
    const progEl = document.getElementById('hero-prog');
    if (prog[item.titulo] && item.esSerie) { progEl.textContent = `▶ Continuar · ${prog[item.titulo].epNom}`; progEl.style.display = 'inline-block'; }
    else { progEl.style.display = 'none'; }
    const bPlay = document.getElementById('btn-hero-play');
    const bEps = document.getElementById('btn-hero-eps');
    if (item.esSerie) { bPlay.classList.add('hidden'); bEps.classList.remove('hidden'); bEps.onclick = () => abrirModal(item); }
    else { bPlay.classList.remove('hidden'); bEps.classList.add('hidden'); bPlay.onclick = () => abrirModal(item); }
    document.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
}

/* ─── GRID ─── */
function renderGrid(items) {
    const grid = document.getElementById('grid-peliculas');
    grid.innerHTML = '';
    items.forEach(item => grid.appendChild(crearCard(item)));
}

function crearCard(item) {
    const favs = S.get('sx_favs', []);
    const prog = S.get('sx_prog', {});
    const esFav = favs.includes(item.titulo);
    const p = prog[item.titulo];
    const pct = (p && item.esSerie && item.episodios?.length > 1) ? Math.round((p.epIdx / (item.episodios.length - 1)) * 100) : 0;
    const tipoMap = { anime: ['ta', 'Anime'], serie: ['ts', 'Serie'], pelicula: ['tp', 'Film'] };
    const [tc, tl] = tipoMap[item.tipo] || ['', ''];
    const safeTitle = item.titulo.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img class="card-poster" src="${item.imagen || ''}" alt="${item.titulo}" loading="lazy" onerror="this.style.background='#1a1a24';this.removeAttribute('src')">
        <div class="ctb ${tc}">${tl}</div>
        ${item.anio ? `<div class="cyb">${item.anio}</div>` : ''}
        ${pct > 0 ? `<div class="cpb"><div class="cpf" style="width:${pct}%"></div></div>` : ''}
        <div class="card-overlay">
            <button class="cfb ${esFav ? 'on' : ''}" onclick="toggleFav(event,'${safeTitle}')">${esFav ? '♥' : '♡'}</button>
            <div class="cpc">▶</div>
            <div class="card-title">${item.titulo}</div>
            <div class="card-sub">${item.esSerie ? `${item.episodios?.length || 0} eps` : 'Película'}${p && item.esSerie ? ` · <span style="color:#ff6b8a">Ep ${p.epIdx + 1}</span>` : ''}</div>
        </div>`;
    card.addEventListener('click', e => { if (e.target.closest('.cfb')) return; abrirModal(item); });
    return card;
}

/* ─── FAVS ─── */
function toggleFav(e, titulo) {
    e.stopPropagation();
    const favs = S.get('sx_favs', []);
    const idx = favs.indexOf(titulo);
    if (idx === -1) { favs.push(titulo); toast('♥ Favorito agregado'); }
    else { favs.splice(idx, 1); toast('Quitado de favoritos'); }
    S.set('sx_favs', favs);
    filtrar(); renderFavs();
    if (itemActual?.titulo === titulo) actualizarBtnFav();
}

function actualizarBtnFav() {
    const favs = S.get('sx_favs', []);
    const btn = document.getElementById('modal-fav');
    if (!btn || !itemActual) return;
    const on = favs.includes(itemActual.titulo);
    btn.innerHTML = on ? '♥ En favoritos' : '♡ Favorito';
    btn.className = 'btn-fav' + (on ? ' on' : '');
}

function renderFavs() {
    const favs = S.get('sx_favs', []);
    const sec = document.getElementById('sec-favs');
    const grid = document.getElementById('grid-favs');
    if (!favs.length) { sec.classList.add('hidden'); return; }
    sec.classList.remove('hidden');
    grid.innerHTML = '';
    favs.forEach(t => { const item = BLIB.find(b => b.titulo === t); if (item) grid.appendChild(crearCard(item)); });
}

/* ─── CONTINUAR ─── */
function renderContinuar() {
    const h = S.get('sx_hist', []);
    const sec = document.getElementById('sec-continuar');
    const grid = document.getElementById('grid-continuar');
    if (!h.length) { sec.classList.add('hidden'); return; }
    sec.classList.remove('hidden');
    grid.innerHTML = '';
    h.slice(0, 8).forEach(t => { const item = BLIB.find(b => b.titulo === t); if (item) grid.appendChild(crearCard(item)); });
}

function guardarHist(titulo) {
    let h = S.get('sx_hist', []);
    h = [titulo, ...h.filter(t => t !== titulo)].slice(0, 12);
    S.set('sx_hist', h);
    renderContinuar();
}

/* ─── RANDOM ─── */
function verRandom() {
    const item = BLIB[Math.floor(Math.random() * BLIB.length)];
    if (item) abrirModal(item);
}

/* ─── MODAL ─── */
function abrirModal(item) {
    itemActual = item;
    guardarHist(item.titulo);
    document.getElementById('modal-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('modal-titulo').textContent = item.titulo;
    document.getElementById('modal-desc').textContent = item.desc || '';
    document.getElementById('modal-anio').textContent = item.anio || '';
    document.getElementById('modal-tipo').textContent = { anime: '🎌 Anime', serie: '📺 Serie', pelicula: '🎬 Película' }[item.tipo] || '';
    document.getElementById('modal-eps-n').textContent = item.esSerie ? `${item.episodios?.length || 0} episodios` : '';
    document.getElementById('modal-backdrop').style.backgroundImage = item.imagen ? `url('${item.imagen}')` : 'none';
    actualizarBtnFav();
    
  function limpiarPlayer(item = null) {
    const wrap = document.getElementById('player-wrap');
    const video = document.getElementById('reproductor');
    wrap.querySelectorAll('iframe').forEach(f => f.remove());
    if (video) { video.pause(); video.src = ''; video.classList.add('hidden'); }
    
    let ph = wrap.querySelector('.player-ph');
    if (!ph) {
        ph = document.createElement('div'); ph.className = 'player-ph';
        wrap.appendChild(ph);
    }
    
    if (item && item.esSerie) {
        // Fondo con blur del póster de la serie
        ph.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${item.imagen}')`;
        ph.innerHTML = `
            <div class="ph-content">
                <span style="font-size:3.5rem;display:block;margin-bottom:15px;filter:drop-shadow(0 0 10px var(--accent))">▶</span>
                <span style="font-weight:700;letter-spacing:2px;color:#fff;text-transform:uppercase;font-size:1rem;display:block">Seleccioná un episodio</span>
                <span style="color:var(--muted);font-size:0.8rem;margin-top:5px;display:block">${item.titulo} está lista para ver</span>
            </div>`;
        ph.style.display = 'flex';
    } else {
        ph.style.backgroundImage = 'none';
        ph.innerHTML = '<span style="font-size:4rem;opacity:0.2">🎬</span>';
        ph.style.display = 'flex';
    }
}

function cerrarModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    document.body.style.overflow = '';
    limpiarPlayer();
    itemActual = null;
}

function toggleFavModal() { if (itemActual) toggleFav({ stopPropagation: () => {} }, itemActual.titulo); }

/* ─── EPISODIOS ─── */
function renderEps(item) {
    const lista = document.getElementById('lista-eps');
    lista.innerHTML = '';
    const progIdx = S.get('sx_prog', {})[item.titulo]?.epIdx ?? -1;
    item.episodios.forEach((ep, i) => {
        const btn = document.createElement('button');
        btn.className = 'ep-btn' + (i === progIdx ? ' playing' : '');
        btn.innerHTML = `<span class="ep-n">EP ${i + 1}</span><span class="ep-nm">${ep.nombre}</span>`;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.ep-btn').forEach(b => b.classList.remove('playing'));
            btn.classList.add('playing');
            reproducir(ep.url);
            const p = S.get('sx_prog', {}); p[item.titulo] = { epIdx: i, epNom: ep.nombre }; S.set('sx_prog', p);
            filtrar(); renderFavs();
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
        lista.appendChild(btn);
    });
}

/* ─── PLAYER UNIVERSAL ─── */
function esDirecto(url) {
    try { return /\.(mp4|webm|ogg|mov|m4v)(\?|#|$)/i.test(new URL(url).pathname); }
    catch { return false; }
}

function reproducir(url) {
    if (!url) return;
    const wrap = document.getElementById('player-wrap');
    const video = document.getElementById('reproductor');
    wrap.querySelectorAll('iframe').forEach(f => f.remove());
    const ph = wrap.querySelector('.player-ph');
    if (ph) ph.style.display = 'none';
    if (esDirecto(url)) {
        video.classList.remove('hidden');
        video.src = url; video.load(); video.play().catch(() => {});
    } else {
        video.classList.add('hidden');
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;';
        iframe.allow = 'autoplay; fullscreen; picture-in-picture';
        iframe.allowFullscreen = true;
        wrap.appendChild(iframe);
    }
}

function limpiarPlayer(item = null) {
    const wrap = document.getElementById('player-wrap');
    const video = document.getElementById('reproductor');
    wrap.querySelectorAll('iframe').forEach(f => f.remove());
    if (video) { video.pause(); video.src = ''; video.classList.add('hidden'); }
    
    let ph = wrap.querySelector('.player-ph');
    if (!ph) {
        ph = document.createElement('div'); ph.className = 'player-ph';
        ph.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#000;background-size:cover;background-position:center;position:relative;';
        wrap.appendChild(ph);
    }
    
    if (item && item.esSerie) {
        ph.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${item.imagen}')`;
        ph.innerHTML = '<div style="text-align:center"><span style="font-size:3rem;display:block;margin-bottom:10px;opacity:0.6">📺</span><span style="font-weight:600;letter-spacing:1px;color:#fff;text-transform:uppercase;font-size:0.9rem">Seleccioná un episodio para comenzar</span></div>';
        ph.style.display = 'flex';
    } else {
        ph.style.backgroundImage = 'none';
        ph.innerHTML = '<span style="font-size:3rem;opacity:0.12">▶</span>';
        ph.style.display = 'flex';
    }
}

/* ─── TOAST ─── */
function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg; el.classList.remove('hidden');
    clearTimeout(el._t); el._t = setTimeout(() => el.classList.add('hidden'), 2400);
}

/* ══════════════════════════════════════════
   ADMIN PANEL 
══════════════════════════════════════════ */
const ADMIN_USER = 'agusunx';
const ADMIN_PASS = '1234';

function abrirAdmin() {
    document.getElementById('admin-overlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('admin-login').classList.remove('hidden');
    document.getElementById('admin-panel').classList.add('hidden');
    document.getElementById('login-err').style.display = 'none';
    document.getElementById('l-user').value = '';
    document.getElementById('l-pass').value = '';
}

function cerrarAdmin() {
    document.getElementById('admin-overlay').classList.add('hidden');
    document.body.style.overflow = '';
}

function adminLogin() {
    const u = document.getElementById('l-user').value.trim();
    const p = document.getElementById('l-pass').value.trim();
    if (u === ADMIN_USER && p === ADMIN_PASS) {
        document.getElementById('admin-login').classList.add('hidden');
        document.getElementById('admin-panel').classList.remove('hidden');
        adminRenderLista();
    } else {
        document.getElementById('login-err').style.display = 'block';
        document.getElementById('l-pass').value = '';
    }
}

function adminSetTipo(tipo, btn) {
    document.querySelectorAll('.atipo-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    btn.dataset.tipo = tipo;
    document.getElementById('admin-sec-peli').style.display = tipo === 'pelicula' ? 'block' : 'none';
    document.getElementById('admin-sec-serie').style.display = tipo !== 'pelicula' ? 'block' : 'none';
    document.getElementById('admin-tipo-val').value = tipo;
}

function adminPosterPreview(url) {
    const img = document.getElementById('admin-poster-img');
    const ph = document.getElementById('admin-poster-ph');
    const wrap = document.getElementById('admin-poster-wrap');
    if (url && url.startsWith('http')) {
        img.src = url; img.style.display = 'block'; ph.style.display = 'none'; wrap.classList.add('ok');
        img.onerror = () => { img.style.display = 'none'; ph.style.display = 'flex'; wrap.classList.remove('ok'); };
    } else { img.style.display = 'none'; ph.style.display = 'flex'; wrap.classList.remove('ok'); }
}

function adminContarLinks() {
    const raw = document.getElementById('admin-links').value.trim();
    const el = document.getElementById('admin-link-count');
    if (!raw) { el.style.display = 'none'; return; }
    const n = raw.split('\n').map(l => l.trim()).filter(l => l).length;
    el.textContent = `✓ ${n} episodio${n !== 1 ? 's' : ''} detectado${n !== 1 ? 's' : ''}`;
    el.style.display = 'block';
}

function adminAgregar() {
    const err = document.getElementById('admin-form-err');
    err.style.display = 'none';
    const titulo = document.getElementById('admin-titulo').value.trim();
    const imagen = document.getElementById('admin-imagen').value.trim();
    const anio = document.getElementById('admin-anio').value.trim();
    const tipo = document.getElementById('admin-tipo-val').value;
    const desc = document.getElementById('admin-desc').value.trim();

    if (!titulo) { err.textContent = '⚠ El título es obligatorio.'; err.style.display = 'block'; return; }

    const item = { titulo, tipo, anio, imagen, desc };

    if (tipo === 'pelicula') {
        const url = document.getElementById('admin-url-peli').value.trim();
        if (!url) { err.textContent = '⚠ El link del video es obligatorio.'; err.style.display = 'block'; return; }
        item.esSerie = false; item.url = url;
    } else {
        const raw = document.getElementById('admin-links').value.trim();
        if (!raw) { err.textContent = '⚠ Pegá al menos un link de episodio.'; err.style.display = 'block'; return; }
        const links = raw.split('\n').map(l => l.trim()).filter(l => l);
        const namesRaw = document.getElementById('admin-names').value.trim();
        const names = namesRaw ? namesRaw.split('\n').map(n => n.trim()).filter(n => n) : [];
        item.esSerie = true;
        item.episodios = links.map((url, i) => ({ nombre: names[i] || `Episodio ${i + 1}`, url }));
    }

    const extras = S.get('sx_extras', []);
    if (extras.find(e => e.titulo.toLowerCase() === titulo.toLowerCase())) {
        err.textContent = `⚠ "${titulo}" ya existe.`; err.style.display = 'block'; return;
    }
    extras.push(item); S.set('sx_extras', extras);
    BLIB = getBibliotecaCompleta();
    filtrar(); renderContinuar(); renderFavs(); renderHero();
    adminResetForm(); adminRenderLista();
    toast(`✓ "${titulo}" agregado`);
}

function adminResetForm() {
    ['admin-titulo', 'admin-imagen', 'admin-anio', 'admin-desc', 'admin-url-peli', 'admin-links', 'admin-names'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
    document.getElementById('admin-link-count').style.display = 'none';
    document.getElementById('admin-form-err').style.display = 'none';
    adminPosterPreview('');
}

function adminEliminar(idx) {
    const extras = S.get('sx_extras', []);
    const t = extras[idx]?.titulo || '';
    if (!confirm(`¿Eliminar "${t}"?`)) return;
    extras.splice(idx, 1); S.set('sx_extras', extras);
    BLIB = getBibliotecaCompleta();
    filtrar(); renderContinuar(); renderFavs(); renderHero();
    adminRenderLista();
    toast(`"${t}" eliminado`);
}

function adminRenderLista() {
    const extras = S.get('sx_extras', []);
    const lista = document.getElementById('admin-lista');
    const empty = document.getElementById('admin-empty');
    lista.innerHTML = '';
    if (!extras.length) { empty.style.display = 'block'; return; }
    empty.style.display = 'none';
    [...extras].reverse().forEach(item => {
        const realIdx = extras.findIndex(e => e.titulo === item.titulo);
        const tc = { anime: 'ta', serie: 'ts', pelicula: 'tp' }[item.tipo] || '';
        const tl = { anime: 'Anime', serie: 'Serie', pelicula: 'Film' }[item.tipo] || '';
        const row = document.createElement('div'); row.className = 'admin-row';
        row.innerHTML = `
            <img class="admin-thumb" src="${item.imagen || ''}" alt="" onerror="this.src='';this.style.background='#1c1c28'">
            <div class="admin-info">
                <div class="admin-row-title">${item.titulo} ${item.anio ? `<span style="color:#555;font-size:0.72rem">${item.anio}</span>` : ''}</div>
                <div style="display:flex;gap:7px;align-items:center;flex-wrap:wrap">
                    <span class="ctb ${tc}" style="position:static;font-size:0.62rem;padding:2px 7px">${tl}</span>
                    <span style="font-size:0.72rem;color:#555">${item.esSerie ? `${item.episodios?.length || 0} eps` : 'Película'}</span>
                </div>
            </div>
            <button class="admin-del" onclick="adminEliminar(${realIdx})">🗑</button>`;
        lista.appendChild(row);
    });
}

function adminDescargar() {
    const extras = S.get('sx_extras', []);
    if (!extras.length) { toast('No hay extras para descargar'); return; }

    const SCRIPT_TEXT = document.getElementById('script-base-data').textContent;
    const lines = extras.map(item => {
        const L = ['    {'];
        L.push(`        titulo: ${JSON.stringify(item.titulo)},`);
        L.push(`        tipo: ${JSON.stringify(item.tipo)},`);
        if (item.desc) L.push(`        desc: ${JSON.stringify(item.desc)},`);
        if (item.anio) L.push(`        anio: ${JSON.stringify(item.anio)},`);
        if (item.imagen) L.push(`        imagen: ${JSON.stringify(item.imagen)},`);
        if (item.esSerie) {
            L.push('        esSerie: true,');
            L.push('        episodios: [');
            item.episodios.forEach(ep => L.push(`            { nombre: ${JSON.stringify(ep.nombre)}, url: ${JSON.stringify(ep.url)} },`));
            L.push('        ]');
        } else {
            L.push('        esSerie: false,');
            L.push(`        url: ${JSON.stringify(item.url)}`);
        }
        L.push('    },');
        return L.join('\n');
    }).join('\n');

    const updated = SCRIPT_TEXT.replace('    // __ADMIN_INJECT__', '\n' + lines + '\n');
    const blob = new Blob([updated], { type: 'text/javascript' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'script.js'; a.click();
    toast('✓ script.js descargado — reemplazalo en tu carpeta / GitHub');
}

