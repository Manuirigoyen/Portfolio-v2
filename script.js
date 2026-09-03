const P = [
  [
    "FigusApp",
    "fullstack",
    "Full stack",
    "https://figus-play.vercel.app/",
    "Álbum digital interactivo con colección de figuritas, intercambios, tienda y ruleta.",
    ["React", "TypeScript", "Vite", "Bootstrap", "NestJS", "JWT", "Supabase", "PostgreSQL"],
  ],
  [
    "Nike Concept",
    "ecommerce concept",
    "E-commerce",
    "https://nike-store-concept.vercel.app/",
    "Tienda online inspirada en Nike con catálogo, carrito de compras y diseño responsive.",
    ["HTML", "CSS", "JavaScript"],
  ],
  [
    "Gomilandia",
    "ecommerce concept",
    "E-commerce",
    "https://gomilandia.vercel.app/",
    "Tienda de golosinas con catálogo de productos, categorías y diseño responsive.",
    ["HTML", "CSS", "JavaScript"],
  ],
  [
    "Riqo",
    "ecommerce concept",
    "E-commerce",
    "https://tiendariqo.vercel.app/",
    "E-commerce para venta online de productos con catálogo y carrito.",
    ["HTML", "CSS", "JavaScript"],
  ],
  [
    "Mundo JDM",
    "catalogo",
    "Catálogo",
    "https://mundo-jdm.vercel.app/",
    "Catálogo para una concesionaria de autos japoneses.",
    ["HTML", "CSS"],
  ],
  [
    "Poke Search",
    "api",
    "API REST",
    "https://pokeapi-searchh.vercel.app/",
    "Buscador de Pokémon con información obtenida desde una API.",
    ["HTML", "CSS", "JavaScript", "API REST"],
  ],
  [
    "Poke Autoincrement",
    "api",
    "API REST",
    "https://pokeapi-autoincrement.vercel.app/",
    "Aplicación para explorar Pokémon y consultar sus características.",
    ["HTML", "CSS", "JavaScript", "API REST"],
  ],
  [
    "Pedimon",
    "ecommerce concept",
    "E-commerce",
    "https://pedimon-ecru.vercel.app/",
    "E-commerce conceptual inspirado en Pokémon, con interfaz interactiva.",
    ["React", "TypeScript", "Vite", "Bootstrap"],
  ],
  [
    "Weather API",
    "api",
    "API REST",
    "https://weather-api-mi.vercel.app/",
    "Consulta del clima de ciudades en tiempo real.",
    ["HTML", "CSS", "JavaScript", "API REST"],
  ],
  [
    "Search Crypto",
    "api",
    "API REST",
    "https://search-crypto-mi.vercel.app/",
    "Buscador de criptomonedas con información actualizada.",
    ["HTML", "CSS", "JavaScript", "API REST"],
  ],
  [
    "Turnos Web",
    "aplications",
    "WEB APP",
    "https://turnosappweb.vercel.app/",
    "Aplicación para gestionar turnos y reservas.",
    ["HTML", "CSS", "JavaScript"],
  ],
  [
    "Casino de Consola",
    "aplications",
    "CLI APP",
    "https://github.com/Manuirigoyen/Trabajo-Casino.git",
    "Juego de casino de consola con patrones de diseño.",
    ["TypeScript", "Node.js", "Factory", "Template Method", "Inquirer", "Chalk", "Figlet", "readline-sync"],
  ],
];
const IMAGES = {
  FigusApp: ["image16.png", "image27.png", "image43.png", "image57.png", "image59.png", "image60.png", "image63.png", "image64.png"],
  "Nike Concept": ["image1.png", "image2.png", "image3.png", "image4.png", "image5.png", "image6.png", "image7.png", "image8.png"],
  Gomilandia: ["image20.png", "image21.png", "image22.png", "image23.png", "image24.png", "image25.png", "image26.png"],
  Riqo: ["image30.png", "image31.png", "image32.png"],
  "Mundo JDM": ["image33.png", "image34.png", "image35.png", "image36.png", "image37.png"],
  "Poke Search": ["image38.png", "image39.png", "image40.png", "image41.png", "image42.png"],
  "Poke Autoincrement": ["image40.png", "image41.png", "image42.png", "image43.png"],
  Pedimon: ["image80.png", "image81.png", "image82.png", "image83.png", "image84.png"],
  "Weather API": ["image70.png", "image71.png", "image72.png", "image73.png", "image74.png"],
  "Search Crypto": ["image76.png", "image77.png", "image78.png", "image79.png"],
  "Turnos Web": ["image80.png", "image81.png", "image82.png"],
  "Casino de Consola": ["image90.png", "image91.png", "image92.png", "image93.png", "image94.png", "image95.png", "image96.png", "image97.png"],
};
const FOLDERS = {
  "Search Crypto": "Crypto",
  "Casino de Consola": "Casino Consola",
};
const G = document.querySelector("#project-grid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector(".lightbox-image");
const lightboxTitle = lightbox.querySelector(".lightbox-title");
const lightboxCount = lightbox.querySelector(".lightbox-count");
let galleryProject = "";
let galleryIndex = 0;
const pathPart = (part) => encodeURIComponent(part).replace(/%2F/g, "/");
const imagePath = (project, image) => `./${pathPart(FOLDERS[project] || project)}/${pathPart(image)}`;
const FEATURED_PROJECT = "FigusApp destacado";
const FEATURED_IMAGES = [
  { src: "./PortadaFigusApp.jpg", alt: "Portada de FigusApp" },
  ...IMAGES.FigusApp.map((image, index) => ({
    src: imagePath("FigusApp", image),
    alt: `Captura ${index + 1} de FigusApp`,
  })),
];
function draw(f = "all") {
  G.innerHTML = P.map(
    (p, i) => {
      const images = IMAGES[p[0]] || [];
      return `<article class="project ${f != "all" && p[1] != f ? "hidden" : ""}">
        <div class="project-media" data-project="${p[0]}">
          <div class="project-media-track">
            ${images.map((image, imageIndex) => `<img src="${imagePath(p[0], image)}" alt="Captura ${imageIndex + 1} de ${images.length} de ${p[0]}" />`).join("")}
          </div>
          <button class="carousel-button previous" type="button" aria-label="Imagen anterior de ${p[0]}">←</button>
          <button class="carousel-button next" type="button" aria-label="Imagen siguiente de ${p[0]}">→</button>
          <span class="carousel-count">1 / ${images.length}</span>
        </div>
        <div class="project-info">
          <span class="index">/${String(i + 1).padStart(2, "0")}</span><span class="kind">${p[2]}</span>
          <h3>${p[0]}</h3><p>${p[4]}</p>
          <div class="bottom"><div class="tags">${p[5].map((t) => `<span>${t}</span>`).join("")}</div><a class="go" href="${p[3]}" target="_blank" aria-label="Ver ${p[0]}">↗</a></div>
        </div>
      </article>`;
    },
  ).join("");
  setupCarousels();
}
function setupCarousels() {
  document.querySelectorAll(".project-media").forEach((media) => {
    const project = media.dataset.project;
    const images = IMAGES[project];
    let current = 0;
    const track = media.querySelector(".project-media-track");
    const count = media.querySelector(".carousel-count");
    const showImage = (index) => {
      current = (index + images.length) % images.length;
      track.style.transform = `translateX(-${current * 100}%)`;
      count.textContent = `${current + 1} / ${images.length}`;
    };
    media.querySelector(".previous").onclick = () => showImage(current - 1);
    media.querySelector(".next").onclick = () => showImage(current + 1);
    media.onclick = (event) => {
      if (event.target.closest("button")) return;
      openGallery(project, current);
    };
    if (images.length > 1) setInterval(() => showImage(current + 1), 4000);
  });
}
function renderGalleryImage() {
  const featured = galleryProject === FEATURED_PROJECT;
  const images = featured ? FEATURED_IMAGES : IMAGES[galleryProject];
  galleryIndex = (galleryIndex + images.length) % images.length;
  lightboxImage.src = featured ? images[galleryIndex].src : imagePath(galleryProject, images[galleryIndex]);
  lightboxImage.alt = featured ? images[galleryIndex].alt : `Captura ${galleryIndex + 1} de ${images.length} de ${galleryProject}`;
  lightboxTitle.textContent = featured ? "FigusApp" : galleryProject;
  lightboxCount.textContent = `${galleryIndex + 1} / ${images.length}`;
}
function openGallery(project, index) {
  galleryProject = project;
  galleryIndex = index;
  renderGalleryImage();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  lightbox.querySelector(".lightbox-close").focus();
}
function closeGallery() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}
lightbox.querySelector(".previous").onclick = () => {
  galleryIndex -= 1;
  renderGalleryImage();
};
lightbox.querySelector(".next").onclick = () => {
  galleryIndex += 1;
  renderGalleryImage();
};
lightbox.querySelector(".lightbox-close").onclick = closeGallery;
lightbox.onclick = (event) => {
  if (event.target === lightbox) closeGallery();
};
document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeGallery();
  if (event.key === "ArrowLeft") lightbox.querySelector(".previous").click();
  if (event.key === "ArrowRight") lightbox.querySelector(".next").click();
});
draw();
document.querySelectorAll(".featured-project button").forEach((button, index) => {
  button.onclick = () => openGallery(FEATURED_PROJECT, index);
});
document.querySelectorAll(".filter").forEach(
  (b) =>
    (b.onclick = () => {
      document.querySelector(".active").classList.remove("active");
      b.classList.add("active");
      draw(b.dataset.filter);
    }),
);
