const P = [
  [
    "FigusPlay",
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
  FigusPlay: ["image16.png", "image27.png", "image43.png", "image54.png", "image57.png", "image59.png", "image60.png", "image63.png"],
  "Nike Concept": ["image11.png", "image15.png", "image22.png", "image31.png", "image42.png", "image46.png", "image6.png", "image65.png"],
  Gomilandia: ["image18.png", "image26.png", "image37.png", "image39.png", "image4.png", "image41.png", "image55.png"],
  Riqo: ["image45.png", "image5.png", "image64.png"],
  "Mundo JDM": ["image1.png", "image34.png", "image47.png", "image56.png", "image8.png"],
  "Poke Search": ["image10.png", "image38.png", "image40.png", "image58.png", "image62.png"],
  "Poke Autoincrement": ["image28.png", "image30.png", "image7.png", "image9.png"],
  Pedimon: ["image17.png", "image20.png", "image29.png", "image3.png", "image36.png"],
  "Weather API": ["image13.png", "image21.png", "image33.png", "image35.png", "image50.png", "image53.png"],
  "Search Crypto": ["image44.png", "image51.png", "image61.png"],
  "Turnos Web": ["image2.png", "image48.png", "image49.png"],
  "Casino de Consola": ["image12.png", "image14.png", "image19.png", "image23.png", "image24.png", "image25.png", "image32.png", "image52.png"],
};
const FOLDERS = {
  "Search Crypto": "Crypto",
  "Casino de Consola": "Casino Consola",
};
const G = document.querySelector("#project-grid");
const pathPart = (part) => encodeURIComponent(part).replace(/%2F/g, "/");
const imagePath = (project, image) => `./${pathPart(FOLDERS[project] || project)}/${pathPart(image)}`;
function draw(f = "all") {
  G.innerHTML = P.map(
    (p, i) => {
      const images = IMAGES[p[0]] || [];
      return `<article class="project ${f != "all" && p[1] != f ? "hidden" : ""}">
        <div class="project-media" data-project="${p[0]}">
          <img src="${imagePath(p[0], images[0])}" alt="Captura de ${p[0]}" />
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
    const image = media.querySelector("img");
    const count = media.querySelector(".carousel-count");
    const showImage = (index) => {
      current = (index + images.length) % images.length;
      image.src = imagePath(project, images[current]);
      image.alt = `Captura ${current + 1} de ${images.length} de ${project}`;
      count.textContent = `${current + 1} / ${images.length}`;
    };
    media.querySelector(".previous").onclick = () => showImage(current - 1);
    media.querySelector(".next").onclick = () => showImage(current + 1);
    if (images.length > 1) setInterval(() => showImage(current + 1), 4500);
  });
}
draw();
document.querySelectorAll(".filter").forEach(
  (b) =>
    (b.onclick = () => {
      document.querySelector(".active").classList.remove("active");
      b.classList.add("active");
      draw(b.dataset.filter);
    }),
);
