/* ================================================= */
/* SCRIPT COMPLETO - CADETES DE HONOR HUANCAYO */
/* GALERÍA EN PÁGINA: CENTRO + COSTADOS + FLECHAS */
/* ================================================= */

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
/* CREAR IMAGEN O VIDEO */
/* ============================= */

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
    console.error("No se pudo cargar:", item.src);
  };

  return elemento;
}

/* ============================= */
/* GALERÍA EN PÁGINA */
/* CENTRO + COSTADOS SEMIVISIBLES */
/* ============================= */

const galeriaGrid = document.getElementById("galeriaGrid");

let filtroActual = "todo";
let indiceGaleriaActual = 0;

function obtenerFotosFiltradas() {
  return filtroActual === "todo"
    ? fotos
    : fotos.filter((foto) => foto.tipo === filtroActual);
}

function crearPreviewSlide(item, claseExtra = "") {
  const slide = document.createElement("div");
  slide.className = `preview-slide ${claseExtra}`;

  const media = crearMedia(item);
  slide.appendChild(media);

  const ayuda = document.createElement("div");
  ayuda.className = "preview-ayuda";
  ayuda.textContent = "Toca para ver más";
  slide.appendChild(ayuda);

  const etiqueta = document.createElement("div");
  etiqueta.className = "preview-etiqueta";
  etiqueta.textContent = item.titulo;
  slide.appendChild(etiqueta);

  return slide;
}

function renderGaleriaPreview() {
  if (!galeriaGrid) return;

  const lista = obtenerFotosFiltradas();

  galeriaGrid.innerHTML = "";

  if (lista.length === 0) {
    galeriaGrid.innerHTML = `
      <div class="error-media">
        No hay imágenes en esta categoría
      </div>
    `;
    return;
  }

  if (indiceGaleriaActual >= lista.length) {
    indiceGaleriaActual = 0;
  }

  const total = lista.length;
  const indiceIzq = (indiceGaleriaActual - 1 + total) % total;
  const indiceDer = (indiceGaleriaActual + 1) % total;

  const wrapper = document.createElement("div");
  wrapper.className = "galeria-preview";

  const btnPrev = document.createElement("button");
  btnPrev.className = "flecha-preview flecha-preview-izq";
  btnPrev.innerHTML = "‹";

  const btnNext = document.createElement("button");
  btnNext.className = "flecha-preview flecha-preview-der";
  btnNext.innerHTML = "›";

  const slideIzq = crearPreviewSlide(lista[indiceIzq], "preview-lado preview-lado-izq");
  const slideCentro = crearPreviewSlide(lista[indiceGaleriaActual], "preview-centro");
  const slideDer = crearPreviewSlide(lista[indiceDer], "preview-lado preview-lado-der");

  btnPrev.addEventListener("click", () => {
    moverGaleria(-1);
  });

  btnNext.addEventListener("click", () => {
    moverGaleria(1);
  });

  slideIzq.addEventListener("click", () => {
    moverGaleria(-1);
  });

  slideDer.addEventListener("click", () => {
    moverGaleria(1);
  });

  slideCentro.addEventListener("click", () => {
    abrirLightbox(lista, indiceGaleriaActual);
  });

  wrapper.appendChild(btnPrev);
  wrapper.appendChild(slideIzq);
  wrapper.appendChild(slideCentro);
  wrapper.appendChild(slideDer);
  wrapper.appendChild(btnNext);

  galeriaGrid.appendChild(wrapper);
}

function moverGaleria(direccion) {
  const lista = obtenerFotosFiltradas();

  if (lista.length === 0) return;

  indiceGaleriaActual += direccion;

  if (indiceGaleriaActual < 0) {
    indiceGaleriaActual = lista.length - 1;
  }

  if (indiceGaleriaActual >= lista.length) {
    indiceGaleriaActual = 0;
  }

  renderGaleriaPreview();
}

function cargarGaleria(filtro = "todo") {
  filtroActual = filtro;
  indiceGaleriaActual = 0;
  renderGaleriaPreview();
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
/* LIGHTBOX CARRUSEL PROFESIONAL */
/* ============================= */

let indiceActual = 0;
let listaActual = [];

function abrirLightbox(lista, indice) {
  listaActual = lista;
  indiceActual = indice;

  const lightboxAnterior = document.getElementById("lightbox");

  if (lightboxAnterior) {
    lightboxAnterior.remove();
  }

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.id = "lightbox";

  lightbox.innerHTML = `
    <div class="carousel-pro">

      <button class="cerrar-lightbox" id="cerrarLightbox">×</button>

      <div class="carousel-titulo">
        <span>Galería profesional</span>
        <h3 id="tituloLightbox">Evento especial</h3>
      </div>

      <div class="carousel-frame">

        <button class="flecha-carousel flecha-izquierda" id="prevLightbox">
          ‹
        </button>

        <div class="carousel-imagenes" id="mediaLightbox"></div>

        <button class="flecha-carousel flecha-derecha" id="nextLightbox">
          ›
        </button>

      </div>

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

function crearSlideCarrusel(item, clases, accion) {
  const slide = document.createElement("div");
  slide.className = `slide-carousel ${clases}`;

  const esCentro = clases.includes("centro");
  const media = crearMedia(item, esCentro);

  if (item.media === "video" && !esCentro) {
    media.controls = false;
    media.autoplay = false;
    media.muted = true;
  }

  slide.appendChild(media);

  if (esCentro) {
    const info = document.createElement("div");
    info.className = "info-slide";

    info.innerHTML = `
      <strong>${item.titulo}</strong>
      <span>Toca para ver completo</span>
    `;

    slide.appendChild(info);

    slide.addEventListener("click", () => {
      abrirPantallaCompleta(item);
    });
  } else {
    slide.addEventListener("click", accion);
  }

  return slide;
}

function actualizarMediaLightbox() {
  const contenedor = document.getElementById("mediaLightbox");
  const contador = document.getElementById("contadorLightbox");
  const titulo = document.getElementById("tituloLightbox");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  const total = listaActual.length;

  const indiceIzquierda = indiceActual - 1 < 0 ? total - 1 : indiceActual - 1;
  const indiceDerecha = indiceActual + 1 >= total ? 0 : indiceActual + 1;

  const itemIzquierda = listaActual[indiceIzquierda];
  const itemCentro = listaActual[indiceActual];
  const itemDerecha = listaActual[indiceDerecha];

  const slideIzquierda = crearSlideCarrusel(
    itemIzquierda,
    "lado lado-izquierdo",
    imagenAnterior
  );

  const slideCentro = crearSlideCarrusel(
    itemCentro,
    "centro",
    null
  );

  const slideDerecha = crearSlideCarrusel(
    itemDerecha,
    "lado lado-derecho",
    imagenSiguiente
  );

  contenedor.appendChild(slideIzquierda);
  contenedor.appendChild(slideCentro);
  contenedor.appendChild(slideDerecha);

  if (titulo) {
    titulo.textContent = itemCentro.titulo;
  }

  if (contador) {
    contador.innerHTML = `
      <strong>${indiceActual + 1} / ${listaActual.length}</strong>
      <span>Usa las flechas o desliza</span>
    `;
  }
}

/* ============================= */
/* PANTALLA COMPLETA */
/* ============================= */

function abrirPantallaCompleta(item) {
  const visorAnterior = document.getElementById("visorFull");

  if (visorAnterior) {
    visorAnterior.remove();
  }

  const visor = document.createElement("div");
  visor.className = "visor-full";
  visor.id = "visorFull";

  visor.innerHTML = `
    <button class="cerrar-full" id="cerrarFull">×</button>
    <div class="visor-full-contenido" id="visorFullContenido"></div>
  `;

  document.body.appendChild(visor);

  const contenedor = document.getElementById("visorFullContenido");
  const media = crearMedia(item, true);
  contenedor.appendChild(media);

  document.getElementById("cerrarFull").addEventListener("click", cerrarPantallaCompleta);

  visor.addEventListener("click", (e) => {
    if (e.target.id === "visorFull") {
      cerrarPantallaCompleta();
    }
  });
}

function cerrarPantallaCompleta() {
  const visor = document.getElementById("visorFull");

  if (visor) {
    visor.remove();
  }
}

/* ============================= */
/* TECLADO */
/* ============================= */

document.addEventListener("keydown", (e) => {
  const lightbox = document.getElementById("lightbox");
  const visorFull = document.getElementById("visorFull");

  if (e.key === "Escape") {
    if (visorFull) {
      cerrarPantallaCompleta();
      return;
    }

    if (lightbox) {
      cerrarLightbox();
      return;
    }
  }

  if (!lightbox || visorFull) return;

  if (e.key === "ArrowLeft") {
    imagenAnterior();
  }

  if (e.key === "ArrowRight") {
    imagenSiguiente();
  }
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
  const visorFull = document.getElementById("visorFull");

  if (!lightbox || visorFull) return;

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

const brilloExistente = document.querySelector(".brillo-mouse");

if (!brilloExistente) {
  const brillo = document.createElement("div");
  brillo.classList.add("brillo-mouse");
  document.body.appendChild(brillo);

  document.addEventListener("mousemove", (e) => {
    brillo.style.left = e.clientX + "px";
    brillo.style.top = e.clientY + "px";
  });
}

/* ============================= */
/* PARTÍCULAS DORADAS */
/* ============================= */

const particulasExistentes = document.querySelector(".particulas");

if (!particulasExistentes) {
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
}
