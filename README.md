# 🎬 SerieSunx

Plataforma de streaming personal para ver series y películas directamente desde el navegador. Sin instalar nada, sin registrarse.

🔗 **Demo en vivo:** [agusunx.github.io/SerieSunx](https://agusunx.github.io/SerieSunx/)

---

## ✨ Features

- 📺 Reproductor de video HTML5 integrado
- 📚 Biblioteca personal de contenido
- 🗂️ Organización por temporadas y episodios
- ▶️ Reproducción directa desde el navegador
- 📱 Responsive — funciona en desktop y mobile

---

## 🚀 Cómo usar

1. Abrí el [sitio](https://agusunx.github.io/SerieSunx/)
2. Seleccioná una película o serie de tu biblioteca
3. Elegí el episodio si es una serie
4. Presioná **▶ REPRODUCIR AHORA**

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- Video API nativa del navegador
- GitHub Pages (hosting)

---

## 📁 Estructura del proyecto

```
SerieSunx/
├── index.html       # Página principal y reproductor
├── style.css        # Estilos
├── script.js        # Lógica de la biblioteca y reproductor
└── README.md
```

---

## ⚙️ Instalación local

```bash
git clone https://github.com/agusunx/SerieSunx.git
cd SerieSunx
# Abrí index.html en tu navegador
```

> No requiere servidor ni dependencias externas.

---

## 📝 Agregar contenido

Para sumar series o películas editá el array de contenido en `script.js`:

```js
{
  titulo: "Nombre de la serie",
  temporadas: [
    {
      numero: 1,
      episodios: [
        { titulo: "Episodio 1", src: "ruta/al/video.mp4" },
        // ...
      ]
    }
  ]
}
```

---

## 📄 Licencia

MIT — libre para usar y modificar.

---

*Hecho por [agusunx](https://github.com/agusunx)*
