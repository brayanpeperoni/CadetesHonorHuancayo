/* ============================= */
/* MENÚ MÓVIL */
/* ============================= */

const btnMenu = document.getElementById("btnMenu");
const navLinks = document.getElementById("navLinks");

if (btnMenu && navLinks) {
  btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("abierto");

    if (navLinks.classList.contains("abierto")) {
      btnMenu.textContent = "×";
    } else {
      btnMenu.textContent = "☰";
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("abierto");
      btnMenu.textContent = "☰";
    });
  });
}


/* ============================= */
/* LISTA DE FOTOS Y VIDEO */
/* ============================= */

const fotos = [
  /* FIESTA */
  { src: "Fiesta/IMG-20260512-WA0126.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Fiesta de quince años" },
  { src: "Fiesta/IMG-20260512-WA0127.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Entrada de honor" },
  { src: "Fiesta/IMG-20260512-WA0128.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Evento especial" },
  { src: "Fiesta/IMG-20260512-WA0129.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Presentación formal" },
  { src: "Fiesta/IMG-20260512-WA0130.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Cadetes en evento" },
  { src: "Fiesta/IMG-20260512-WA0131.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Celebración XV" },
  { src: "Fiesta/IMG-20260512-WA0132.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Evento elegante" },
  { src: "Fiesta/IMG-20260512-WA0133.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Acompañamiento especial" },
  { src: "Fiesta/IMG-20260512-WA0134.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Noche especial" },
  { src: "Fiesta/IMG-20260512-WA0135.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Presentación de cadetes" },
  { src: "Fiesta/IMG-20260512-WA0136.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Fiesta elegante" },
  { src: "Fiesta/IMG-20260512-WA0137.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "XV años" },
  { src: "Fiesta/IMG-20260512-WA0138(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Evento XV" },
  { src: "Fiesta/IMG-20260512-WA0139(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Cadetes de honor" },
  { src: "Fiesta/IMG-20260512-WA0140(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Momento especial" },
  { src: "Fiesta/IMG-20260512-WA0141(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Celebración" },
  { src: "Fiesta/IMG-20260512-WA0142(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Baile y presentación" },
  { src: "Fiesta/IMG-20260512-WA0143(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Recuerdo especial" },
  { src: "Fiesta/IMG-20260512-WA0144.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Ceremonia" },
  { src: "Fiesta/IMG-20260512-WA0145.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Cadetes Huancayo" },
  { src: "Fiesta/IMG-20260512-WA0146(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Evento familiar" },
  { src: "Fiesta/IMG-20260512-WA0147.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Presentación" },
  { src: "Fiesta/IMG-20260512-WA0148.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Noche inolvidable" },
  { src: "Fiesta/IMG-20260512-WA0149.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Servicio de cadetes" },
  { src: "Fiesta/IMG-20260512-WA0150.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Fiesta XV" },
  { src: "Fiesta/IMG-20260512-WA0151.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Evento de quince años" },
  { src: "Fiesta/IMG-20260512-WA0152.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Acompañamiento elegante" },
  { src: "Fiesta/IMG-20260512-WA0153.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Ceremonia especial" },

  /* SESIÓN DE FOTOS */
  { src: "SesionDeFotos/IMG-20260512-WA0124(2).jpg.jpeg", tipo: "sesion", media: "imagen", titulo: "Sesión de fotos" },
  { src: "SesionDeFotos/IMG-20260512-WA0154.jpg.jpeg", tipo: "sesion", media: "imagen", titulo: "Fotografía especial" },
  { src: "SesionDeFotos/IMG-20260512-WA0155.jpg.jpeg", tipo: "sesion", media: "imagen", titulo: "Recuerdo fotográfico" },
  { src: "SesionDeFotos/IMG-20260512-WA0156.jpg.jpeg", tipo: "sesion", media: "imagen", titulo: "Sesión elegante" },
  { src: "SesionDeFotos/IMG-20260512-WA0157.jpg.jpeg", tipo: "sesion", media: "imagen", titulo: "Foto con cadetes" },
  { src: "SesionDeFotos/IMG-20260512-WA0158.jpg.jpeg", tipo: "sesion", media: "imagen", titulo: "Momento fotográfico" },
  { src: "SesionDeFotos/IMG-20260512-WA0159.jpg.jpeg", tipo: "sesion", media: "imagen", titulo: "Sesión XV" },
  { src: "SesionDeFotos/IMG-20260512-WA0160.jpg.jpeg", tipo: "sesion", media: "imagen", titulo: "Fotografía de recuerdo" },
  { src: "SesionDeFotos/VID-20260512-WA0161.mp4", tipo: "sesion", media: "video", titulo: "Video de sesión" },

  /* SORPRESA */
  { src: "Sorpresa/IMG-20260512-WA0162.jpg.jpeg", tipo: "sorpresa", media: "imagen", titulo: "Sorpresa especial" },
  { src: "Sorpresa/IMG-20260512-WA0163.jpg.jpeg", tipo: "sorpresa", media: "imagen", titulo: "Momento sorpresa" },
  { src: "Sorpresa/IMG-20260512-WA0164.jpg.jpeg", tipo: "sorpresa", media: "imagen", titulo: "Detalle para quinceañera" },
  { src: "Sorpresa/IMG-20260512-WA0165.jpg.jpeg", tipo: "sorpresa", media: "imagen", titulo: "Sorpresa XV" }
];


/* ============================= */
/* GALERÍA */
/* ============================= */

const galeriaGrid = document.getElementById("galeriaGrid");

function crearMedia(item, modoLightbox = false) {
  let elemento;

  if (item.media === "video") {
    elemento = document.createElement("video");
    elemento.src = item.src;
    elemento.preload = "metadata";
    elemento.playsInline = true;

    if (modoLightbox) {
      elemento.controls = true;
      elemento.autoplay = true;
    } else {
      elemento.muted = true;
      elemento.loop = true;
    }
  } else {
    elemento = document.createElement("img");
    elemento.src = item.src;
    elemento.alt = item.titulo || "Cadetes de Honor Huancayo";
    elemento.loading = "lazy";
    elemento.decoding = "async";
  }

  elemento.onerror = () => {
    const contenedor = elemento.closest(".galeria-item");

    if (contenedor) {
      contenedor.innerHTML = `
        <div class="error-media">
          No se pudo cargar:<br>
          ${item.src}
        </div>
      `;
    }

    console.error("No se pudo cargar:", item.src);
  };

  return elemento;
}

function cargarGaleria(filtro = "todo") {
  if (!galeriaGrid) return;

  galeriaGrid.innerHTML = "";

  const fotosFiltradas =
    filtro === "todo"
      ? fotos
      : fotos.filter((foto) => foto.tipo === filtro);

  fotosFiltradas.forEach((foto, index) => {
    const item = document.createElement("div");
    item.classList.add("galeria-item");

    if (foto.media === "video") {
      item.classList.add("video");
    }

    const media = crearMedia(foto);
    item.appendChild(media);

    const etiqueta = document.createElement("div");
    etiqueta.classList.add("galeria-etiqueta");
    etiqueta.textContent = foto.titulo;
    item.appendChild(etiqueta);

    galeriaGrid.appendChild(item);

    item.addEventListener("click", () => {
      abrirLightbox(fotosFiltradas, index);
    });
  });
}

cargarGaleria();


/* ============================= */
/* FILTROS */
/* ============================= */

const botonesFiltro = document.querySelectorAll(".filtro");

botonesFiltro.forEach((boton) => {
  boton.addEventListener("click", () => {
    botonesFiltro.forEach((b) => b.classList.remove("activo"));
    boton.classList.add("activo");

    cargarGaleria(boton.dataset.filtro);
  });
});


/* ============================= */
/* LIGHTBOX */
/* ============================= */

let indiceActual = 0;
let listaActual = [];

function abrirLightbox(lista, indice) {
  listaActual = lista;
  indiceActual = indice;

  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");
  lightbox.id = "lightbox";

  lightbox.innerHTML = `
    <div class="lightbox-contenido">
      <button class="cerrar-lightbox" id="cerrarLightbox">×</button>
      <button class="prev-lightbox" id="prevLightbox">‹</button>

      <div id="mediaLightbox"></div>

      <button class="next-lightbox" id="nextLightbox">›</button>

      <div class="contador-lightbox" id="contadorLightbox"></div>
    </div>
  `;

  document.body.appendChild(lightbox);
  document.body.style.overflow = "hidden";

  actualizarMediaLightbox();

  document.getElementById("cerrarLightbox").addEventListener("click", cerrarLightbox);
  document.getElementById("prevLightbox").addEventListener("click", imagenAnterior);
  document.getElementById("nextLightbox").addEventListener("click", imagenSiguiente);

  lightbox.addEventListener("click", (e) => {
    if (e.target.id === "lightbox") {
      cerrarLightbox();
    }
  });
}

function cerrarLightbox() {
  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    lightbox.remove();
    document.body.style.overflow = "auto";
  }
}

function imagenAnterior() {
  indiceActual--;

  if (indiceActual < 0) {
    indiceActual = listaActual.length - 1;
  }

  actualizarMediaLightbox();
}

function imagenSiguiente() {
  indiceActual++;

  if (indiceActual >= listaActual.length) {
    indiceActual = 0;
  }

  actualizarMediaLightbox();
}

function actualizarMediaLightbox() {
  const contenedor = document.getElementById("mediaLightbox");
  const contador = document.getElementById("contadorLightbox");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  const itemActual = listaActual[indiceActual];
  const media = crearMedia(itemActual, true);

  contenedor.appendChild(media);

  if (contador) {
    contador.textContent = `${itemActual.titulo} • ${indiceActual + 1} / ${listaActual.length}`;
  }
}

document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return;

  if (e.key === "Escape") cerrarLightbox();
  if (e.key === "ArrowLeft") imagenAnterior();
  if (e.key === "ArrowRight") imagenSiguiente();
});


/* ============================= */
/* DESLIZAR EN CELULAR */
/* ============================= */

let inicioToque = 0;
let finToque = 0;

document.addEventListener("touchstart", (e) => {
  inicioToque = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  const lightbox = document.getElementById("lightbox");

  if (!lightbox) return;

  finToque = e.changedTouches[0].screenX;

  if (inicioToque - finToque > 60) {
    imagenSiguiente();
  }

  if (finToque - inicioToque > 60) {
    imagenAnterior();
  }
});


/* ============================= */
/* ANIMACIÓN AL BAJAR */
/* ============================= */

const elementosAnimados = document.querySelectorAll(".animado, .card, .contacto-card");

const observer = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("mostrar");
    }
  });
}, {
  threshold: 0.15
});

elementosAnimados.forEach((elemento) => {
  observer.observe(elemento);
});


/* ============================= */
/* MENÚ ACTIVO AL BAJAR */
/* ============================= */

const secciones = document.querySelectorAll("header, section[id]");
const linksMenu = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let actual = "inicio";

  secciones.forEach((seccion) => {
    const top = window.scrollY;
    const offset = seccion.offsetTop - 150;
    const alto = seccion.offsetHeight;
    const id = seccion.getAttribute("id");

    if (top >= offset && top < offset + alto) {
      actual = id;
    }
  });

  linksMenu.forEach((link) => {
    link.classList.remove("activo");

    if (link.getAttribute("href") === `#${actual}`) {
      link.classList.add("activo");
    }
  });
});


/* ============================= */
/* BRILLO SIGUIENDO EL MOUSE */
/* ============================= */

const brillo = document.createElement("div");
brillo.classList.add("brillo-mouse");
document.body.appendChild(brillo);

document.addEventListener("mousemove", (e) => {
  brillo.style.left = e.clientX + "px";
  brillo.style.top = e.clientY + "px";
});


/* ============================= */
/* PARTÍCULAS DORADAS */
/* ============================= */

const contenedorParticulas = document.createElement("div");
contenedorParticulas.classList.add("particulas");
document.body.appendChild(contenedorParticulas);

for (let i = 0; i < 36; i++) {
  const particula = document.createElement("span");

  particula.style.left = Math.random() * 100 + "%";
  particula.style.animationDelay = Math.random() * 8 + "s";
  particula.style.animationDuration = 6 + Math.random() * 8 + "s";
  particula.style.width = 3 + Math.random() * 4 + "px";
  particula.style.height = particula.style.width;

  contenedorParticulas.appendChild(particula);
}