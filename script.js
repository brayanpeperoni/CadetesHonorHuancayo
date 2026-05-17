/* ================================================= */
/* SCRIPT COMPLETO - CADETES DE HONOR HUANCAYO */
/* GALERÍA MÁS GRANDE EN CELULAR + FLECHAS CENTRADAS */
/* ================================================= */

/* ============================= */
/* AJUSTE VISUAL DESDE SCRIPT */
/* AGRANDA FOTO Y CENTRA FLECHAS */
/* ============================= */

(function agregarEstilosGaleriaMejorada() {
  const estilosAnteriores = document.getElementById("estilosGaleriaMejorada");

  if (estilosAnteriores) {
    estilosAnteriores.remove();
  }

  const style = document.createElement("style");
  style.id = "estilosGaleriaMejorada";

  style.innerHTML = `
    /* ================================================= */
    /* GALERÍA PRINCIPAL - FOTO GRANDE Y FLECHAS CENTRADAS */
    /* ================================================= */

    .galeria-preview {
      position: relative !important;
      width: 100% !important;
      max-width: 1150px !important;
      min-height: 620px !important;
      margin: 0 auto !important;

      display: flex !important;
      justify-content: center !important;
      align-items: center !important;

      overflow: hidden !important;
    }

    .preview-slide {
      position: relative !important;
      overflow: hidden !important;
      background: #111 !important;
      border: 1px solid rgba(255, 241, 168, 0.42) !important;
      box-shadow:
        0 18px 42px rgba(0, 0, 0, 0.55),
        0 0 30px rgba(255, 212, 90, 0.18) !important;
    }

    .preview-slide img,
    .preview-slide video {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      object-fit: cover !important;
    }

    .preview-centro {
      width: 440px !important;
      height: 590px !important;
      z-index: 5 !important;
      border-radius: 32px !important;
      border: 2px solid rgba(255, 241, 168, 0.95) !important;

      box-shadow:
        0 0 40px rgba(255, 241, 168, 0.45),
        0 0 80px rgba(255, 214, 102, 0.26),
        0 26px 70px rgba(0, 0, 0, 0.70) !important;

      cursor: pointer !important;
    }

    .preview-centro img,
    .preview-centro video {
      filter: brightness(1.16) contrast(1.06) !important;
    }

    .preview-lado {
      position: absolute !important;
      top: 50% !important;
      width: 300px !important;
      height: 470px !important;
      z-index: 2 !important;

      opacity: 0.45 !important;
      transform: translateY(-50%) scale(0.88) !important;

      border-radius: 28px !important;
      filter: brightness(0.80) blur(0.2px) !important;
      cursor: pointer !important;
    }

    .preview-lado:hover {
      opacity: 0.75 !important;
      filter: brightness(1) blur(0) !important;
      transform: translateY(-50%) scale(0.92) !important;
    }

    .preview-lado-izq {
      left: 10% !important;
      margin: 0 !important;
    }

    .preview-lado-der {
      right: 10% !important;
      margin: 0 !important;
    }

    .flecha-preview {
      position: absolute !important;
      top: 50% !important;
      transform: translateY(-50%) !important;

      width: 70px !important;
      height: 70px !important;
      z-index: 40 !important;

      display: flex !important;
      justify-content: center !important;
      align-items: center !important;

      border-radius: 50% !important;
      border: 3px solid rgba(255, 244, 184, 0.98) !important;

      background:
        radial-gradient(circle at top, #fff8d5, #ffd861 52%, #b78000) !important;

      color: #111 !important;
      font-size: 70px !important;
      font-weight: 900 !important;
      line-height: 0.8 !important;
      padding-bottom: 9px !important;

      box-shadow:
        0 0 28px rgba(255, 232, 160, 0.95),
        0 0 55px rgba(255, 214, 102, 0.60),
        0 12px 28px rgba(0, 0, 0, 0.60) !important;

      cursor: pointer !important;
      transition: 0.25s ease !important;
    }

    .flecha-preview:hover {
      transform: translateY(-50%) scale(1.10) !important;
      background: #fff1b3 !important;
    }

    .flecha-preview-izq {
      left: 8px !important;
    }

    .flecha-preview-der {
      right: 8px !important;
    }

    .preview-etiqueta {
      position: absolute !important;
      left: 16px !important;
      right: 16px !important;
      bottom: 16px !important;
      z-index: 5 !important;

      padding: 12px 15px !important;
      border-radius: 999px !important;

      background: rgba(255, 244, 184, 0.96) !important;
      color: #111 !important;

      font-size: 13px !important;
      font-weight: 900 !important;
      text-align: center !important;

      box-shadow: 0 0 22px rgba(255, 214, 102, 0.40) !important;
    }

    .preview-ayuda {
      position: absolute !important;
      left: 18px !important;
      right: 18px !important;
      bottom: 66px !important;
      z-index: 5 !important;

      padding: 8px 10px !important;
      border-radius: 16px !important;

      background: rgba(0, 0, 0, 0.58) !important;
      color: #fff !important;
      backdrop-filter: blur(8px) !important;

      font-size: 11px !important;
      font-weight: 800 !important;
      text-align: center !important;
    }

    /* ================================================= */
    /* CELULAR - FOTO MÁS GRANDE */
    /* ================================================= */

    @media (max-width: 768px) {
      #galeria.seccion {
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        overflow: hidden !important;
      }

      #galeria h2,
      #galeria .subtitulo,
      #galeria .texto-galeria,
      #galeria .galeria-filtros {
        padding-left: 14px !important;
        padding-right: 14px !important;
      }

      .galeria,
      .galeria-grid {
        width: 100% !important;
        max-width: 100% !important;
        overflow: hidden !important;
      }

      .galeria-preview {
        width: 100vw !important;
        max-width: 100vw !important;
        min-height: 575px !important;
        padding: 0 !important;
        margin: 0 auto !important;
      }

      .preview-centro {
        width: 84vw !important;
        max-width: 380px !important;
        height: 520px !important;
        border-radius: 30px !important;
      }

      .preview-lado {
        width: 52vw !important;
        height: 430px !important;
        opacity: 0.43 !important;
        border-radius: 26px !important;
      }

      .preview-lado-izq {
        left: -28vw !important;
      }

      .preview-lado-der {
        right: -28vw !important;
      }

      .flecha-preview {
        width: 62px !important;
        height: 62px !important;
        font-size: 62px !important;
        padding-bottom: 8px !important;
      }

      .flecha-preview-izq {
        left: 10px !important;
      }

      .flecha-preview-der {
        right: 10px !important;
      }

      .preview-etiqueta {
        font-size: 12px !important;
        padding: 11px 12px !important;
      }

      .preview-ayuda {
        bottom: 62px !important;
        font-size: 10px !important;
      }
    }

    /* ================================================= */
    /* CELULARES PEQUEÑOS */
    /* ================================================= */

    @media (max-width: 420px) {
      .galeria-preview {
        min-height: 545px !important;
      }

      .preview-centro {
        width: 86vw !important;
        max-width: 350px !important;
        height: 495px !important;
        border-radius: 28px !important;
      }

      .preview-lado {
        width: 54vw !important;
        height: 400px !important;
      }

      .preview-lado-izq {
        left: -31vw !important;
      }

      .preview-lado-der {
        right: -31vw !important;
      }

      .flecha-preview {
        width: 58px !important;
        height: 58px !important;
        font-size: 58px !important;
      }

      .flecha-preview-izq {
        left: 8px !important;
      }

      .flecha-preview-der {
        right: 8px !important;
      }
    }

    /* ================================================= */
    /* LIGHTBOX EN CELULAR TAMBIÉN MÁS GRANDE */
    /* ================================================= */

    @media (max-width: 768px) {
      .carousel-frame {
        padding: 0 12px !important;
      }

      .carousel-imagenes {
        position: relative !important;
        width: 100% !important;
        height: 100% !important;
        gap: 0 !important;
      }

      .slide-carousel.centro {
        width: 82vw !important;
        max-width: 390px !important;
        height: 70% !important;
        border-radius: 26px !important;
        z-index: 5 !important;
      }

      .slide-carousel.lado {
        position: absolute !important;
        top: 50% !important;

        width: 50vw !important;
        height: 55% !important;

        opacity: 0.40 !important;
        transform: translateY(-50%) scale(0.86) !important;
        border-radius: 24px !important;
      }

      .slide-carousel.lado-izquierdo {
        left: -27vw !important;
        margin: 0 !important;
      }

      .slide-carousel.lado-derecho {
        right: -27vw !important;
        margin: 0 !important;
      }

      .flecha-carousel {
        top: 50% !important;
        width: 62px !important;
        height: 62px !important;
        font-size: 62px !important;
        line-height: 0.8 !important;
        padding-bottom: 8px !important;
        z-index: 90 !important;
      }

      .flecha-izquierda {
        left: 8px !important;
      }

      .flecha-derecha {
        right: 8px !important;
      }
    }
  `;

  document.head.appendChild(style);
})();

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
  btnPrev.setAttribute("aria-label", "Imagen anterior");

  const btnNext = document.createElement("button");
  btnNext.className = "flecha-preview flecha-preview-der";
  btnNext.innerHTML = "›";
  btnNext.setAttribute("aria-label", "Imagen siguiente");

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
/* LIGHTBOX CARRUSEL */
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

      <button class="cerrar-lightbox" id="cerrarLightbox" aria-label="Cerrar galería">×</button>

      <div class="carousel-titulo">
        <span>Galería profesional</span>
        <h3 id="tituloLightbox">Evento especial</h3>
      </div>

      <div class="carousel-frame">

        <button class="flecha-carousel flecha-izquierda" id="prevLightbox" aria-label="Imagen anterior">
          ‹
        </button>

        <div class="carousel-imagenes" id="mediaLightbox"></div>

        <button class="flecha-carousel flecha-derecha" id="nextLightbox" aria-label="Imagen siguiente">
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
    <button class="cerrar-full" id="cerrarFull" aria-label="Cerrar pantalla completa">×</button>
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

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("mostrar");
      }
    });
  },
  {
    threshold: 0.16
  }
);

elementosAnimados.forEach((elemento) => {
  observador.observe(elemento);
});

/* ============================= */
/* BRILLO DEL MOUSE EN PC */
/* ============================= */

if (window.innerWidth > 768) {
  const brillo = document.createElement("div");
  brillo.className = "brillo-mouse";
  document.body.appendChild(brillo);

  document.addEventListener("mousemove", (e) => {
    brillo.style.left = `${e.clientX}px`;
    brillo.style.top = `${e.clientY}px`;
  });
}

/* ============================= */
/* PARTÍCULAS DORADAS */
/* ============================= */

const particulas = document.createElement("div");
particulas.className = "particulas";
document.body.appendChild(particulas);

for (let i = 0; i < 18; i++) {
  const particula = document.createElement("span");

  const tamaño = Math.random() * 5 + 3;
  const posicion = Math.random() * 100;
  const duracion = Math.random() * 8 + 7;
  const retraso = Math.random() * 6;

  particula.style.width = `${tamaño}px`;
  particula.style.height = `${tamaño}px`;
  particula.style.left = `${posicion}%`;
  particula.style.animationDuration = `${duracion}s`;
  particula.style.animationDelay = `${retraso}s`;

  particulas.appendChild(particula);
}
