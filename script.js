/* ============================= */
/* MENÚ MÓVIL */
/* ============================= */

const btnMenu = document.getElementById("btnMenu");
const navLinks = document.getElementById("navLinks");

if (btnMenu && navLinks) {
  btnMenu.addEventListener("click", () => {
    navLinks.classList.toggle("abierto");
    btnMenu.textContent = navLinks.classList.contains("abierto") ? "×" : "☰";
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("abierto");
      btnMenu.textContent = "☰";
    });
  });
}


/* ============================= */
/* FOTOS Y VIDEO */
/* ============================= */

const fotos = [
  /* FIESTA */
  { src: "Fiesta/IMG-20260512-WA0126.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Fiesta de quince años" },
  { src: "Fiesta/IMG-20260512-WA0127.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Entrada de honor" },
  { src: "Fiesta/IMG-20260512-WA0128.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Presentación elegante" },
  { src: "Fiesta/IMG-20260512-WA0129.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Cadetes en evento" },
  { src: "Fiesta/IMG-20260512-WA0130.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Celebración especial" },
  { src: "Fiesta/IMG-20260512-WA0131.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Noche inolvidable" },
  { src: "Fiesta/IMG-20260512-WA0132.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Momento de honor" },
  { src: "Fiesta/IMG-20260512-WA0133.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Evento formal" },
  { src: "Fiesta/IMG-20260512-WA0134.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Acompañamiento especial" },
  { src: "Fiesta/IMG-20260512-WA0135.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Ceremonia XV" },
  { src: "Fiesta/IMG-20260512-WA0136.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Presentación de cadetes" },
  { src: "Fiesta/IMG-20260512-WA0137.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Fiesta elegante" },
  { src: "Fiesta/IMG-20260512-WA0138(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Recuerdo especial" },
  { src: "Fiesta/IMG-20260512-WA0139(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Servicio de cadetes" },
  { src: "Fiesta/IMG-20260512-WA0140(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Momento familiar" },
  { src: "Fiesta/IMG-20260512-WA0141(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Celebración XV" },
  { src: "Fiesta/IMG-20260512-WA0142(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Noche de gala" },
  { src: "Fiesta/IMG-20260512-WA0143(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Cadetes de honor" },
  { src: "Fiesta/IMG-20260512-WA0144.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Entrada especial" },
  { src: "Fiesta/IMG-20260512-WA0145.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Evento Huancayo" },
  { src: "Fiesta/IMG-20260512-WA0146(1).jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Elegancia y presencia" },
  { src: "Fiesta/IMG-20260512-WA0147.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Presentación formal" },
  { src: "Fiesta/IMG-20260512-WA0148.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Quince años" },
  { src: "Fiesta/IMG-20260512-WA0149.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Acompañamiento elegante" },
  { src: "Fiesta/IMG-20260512-WA0150.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Evento especial" },
  { src: "Fiesta/IMG-20260512-WA0151.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Celebración familiar" },
  { src: "Fiesta/IMG-20260512-WA0152.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Recuerdo de XV" },
  { src: "Fiesta/IMG-20260512-WA0153.jpg.jpeg", tipo: "evento", media: "imagen", titulo: "Noche especial" },

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
/* CARRUSEL DE 3 IMÁGENES */
/* ============================= */

const galeriaGrid = document.getElementById("galeriaGrid");

let filtroActual = "todo";
let listaActual = [];
let indiceActual = 0;

function obtenerListaFiltrada() {
  if (filtroActual === "todo") {
    return fotos;
  }

  return fotos.filter((item) => item.tipo === filtroActual);
}

function normalizarIndice(indice, total) {
  if (indice < 0) return total - 1;
  if (indice >= total) return 0;
  return indice;
}

function crearMedia(item, grande = false) {
  let media;

  if (item.media === "video") {
    media = document.createElement("video");
    media.src = item.src;
    media.playsInline = true;
    media.preload = "metadata";

    if (grande) {
      media.controls = true;
      media.autoplay = true;
    } else {
      media.muted = true;
      media.loop = true;
    }
  } else {
    media = document.createElement("img");
    media.src = item.src;
    media.alt = item.titulo || "Cadetes de Honor Huancayo";
    media.loading = "lazy";
    media.decoding = "async";
  }

  media.onerror = () => {
    console.error("No se pudo cargar:", item.src);
  };

  return media;
}

function crearCard(item, posicion, indice) {
  const card = document.createElement("div");
  card.classList.add("carousel-card", posicion);

  const media = crearMedia(item);
  card.appendChild(media);

  if (posicion === "centro") {
    const info = document.createElement("div");
    info.classList.add("carousel-info");

    info.innerHTML = `
      <strong>${item.titulo}</strong>
      <span>Toca la imagen para verla en pantalla completa</span>
    `;

    card.appendChild(info);

    card.addEventListener("click", () => {
      abrirLightbox(listaActual, indiceActual);
    });
  }

  if (posicion === "izquierda") {
    card.addEventListener("click", () => {
      cambiarImagen(-1);
    });
  }

  if (posicion === "derecha") {
    card.addEventListener("click", () => {
      cambiarImagen(1);
    });
  }

  return card;
}

function cargarGaleria(filtro = "todo") {
  if (!galeriaGrid) return;

  filtroActual = filtro;
  listaActual = obtenerListaFiltrada();
  indiceActual = 0;

  renderCarrusel();
}

function renderCarrusel() {
  if (!galeriaGrid) return;

  galeriaGrid.classList.add("carousel-modo");
  galeriaGrid.innerHTML = "";

  if (listaActual.length === 0) {
    galeriaGrid.innerHTML = `
      <div class="error-media">
        No hay imágenes en esta categoría.
      </div>
    `;
    return;
  }

  const total = listaActual.length;

  const indiceIzquierda = normalizarIndice(indiceActual - 1, total);
  const indiceCentro = normalizarIndice(indiceActual, total);
  const indiceDerecha = normalizarIndice(indiceActual + 1, total);

  const contenedor = document.createElement("div");
  contenedor.classList.add("carousel-contenedor");

  const escenario = document.createElement("div");
  escenario.classList.add("carousel-escenario");

  const btnAnterior = document.createElement("button");
  btnAnterior.classList.add("carousel-flecha", "prev");
  btnAnterior.textContent = "‹";
  btnAnterior.setAttribute("aria-label", "Imagen anterior");

  const btnSiguiente = document.createElement("button");
  btnSiguiente.classList.add("carousel-flecha", "next");
  btnSiguiente.textContent = "›";
  btnSiguiente.setAttribute("aria-label", "Imagen siguiente");

  escenario.appendChild(crearCard(listaActual[indiceIzquierda], "izquierda", indiceIzquierda));
  escenario.appendChild(crearCard(listaActual[indiceCentro], "centro", indiceCentro));
  escenario.appendChild(crearCard(listaActual[indiceDerecha], "derecha", indiceDerecha));
  escenario.appendChild(btnAnterior);
  escenario.appendChild(btnSiguiente);

  const contador = document.createElement("div");
  contador.classList.add("carousel-contador");
  contador.textContent = `${indiceCentro + 1} / ${total}`;

  const ayuda = document.createElement("div");
  ayuda.classList.add("carousel-ayuda");
  ayuda.textContent = "Desliza o usa las flechas para cambiar";

  contenedor.appendChild(escenario);
  contenedor.appendChild(contador);
  contenedor.appendChild(ayuda);

  galeriaGrid.appendChild(contenedor);

  btnAnterior.addEventListener("click", () => cambiarImagen(-1));
  btnSiguiente.addEventListener("click", () => cambiarImagen(1));
}

function cambiarImagen(direccion) {
  const total = listaActual.length;

  indiceActual = normalizarIndice(indiceActual + direccion, total);
  renderCarrusel();
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

let listaLightbox = [];
let indiceLightbox = 0;

function abrirLightbox(lista, indice) {
  listaLightbox = lista;
  indiceLightbox = indice;

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

  actualizarLightbox();

  document.getElementById("cerrarLightbox").addEventListener("click", cerrarLightbox);
  document.getElementById("prevLightbox").addEventListener("click", lightboxAnterior);
  document.getElementById("nextLightbox").addEventListener("click", lightboxSiguiente);

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

function lightboxAnterior() {
  indiceLightbox = normalizarIndice(indiceLightbox - 1, listaLightbox.length);
  actualizarLightbox();
}

function lightboxSiguiente() {
  indiceLightbox = normalizarIndice(indiceLightbox + 1, listaLightbox.length);
  actualizarLightbox();
}

function actualizarLightbox() {
  const contenedor = document.getElementById("mediaLightbox");
  const contador = document.getElementById("contadorLightbox");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  const itemActual = listaLightbox[indiceLightbox];
  const media = crearMedia(itemActual, true);

  contenedor.appendChild(media);

  if (contador) {
    contador.textContent = `${itemActual.titulo} • ${indiceLightbox + 1} / ${listaLightbox.length}`;
  }
}

document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    if (e.key === "Escape") cerrarLightbox();
    if (e.key === "ArrowLeft") lightboxAnterior();
    if (e.key === "ArrowRight") lightboxSiguiente();
    return;
  }

  if (e.key === "ArrowLeft") cambiarImagen(-1);
  if (e.key === "ArrowRight") cambiarImagen(1);
});


/* ============================= */
/* DESLIZAR EN CELULAR */
/* ============================= */

let toqueInicio = 0;
let toqueFinal = 0;

document.addEventListener("touchstart", (e) => {
  toqueInicio = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  toqueFinal = e.changedTouches[0].screenX;

  const diferencia = toqueInicio - toqueFinal;

  if (Math.abs(diferencia) < 60) return;

  const lightbox = document.getElementById("lightbox");

  if (lightbox) {
    if (diferencia > 0) lightboxSiguiente();
    else lightboxAnterior();
  } else {
    if (diferencia > 0) cambiarImagen(1);
    else cambiarImagen(-1);
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
/* MENÚ ACTIVO */
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
