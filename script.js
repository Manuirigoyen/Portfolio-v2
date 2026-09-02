const P = [
  [
    "FigusPlay",
    "fullstack",
    "Full stack",
    "https://figus-play.vercel.app/",
    "Álbum digital interactivo con colección de figuritas, intercambios, tienda y ruleta.",
    ["React", "TypeScript", "NestJS", "PostgreSQL"],
  ],
  [
    "Nike Concept",
    "ecommerce",
    "E-commerce",
    "https://nike-store-concept.vercel.app/",
    "Tienda online inspirada en Nike con catálogo, carrito de compras y diseño responsive.",
    ["HTML", "CSS", "JavaScript"],
  ],
  [
    "Gomilandia",
    "ecommerce",
    "E-commerce",
    "https://gomilandia.vercel.app/",
    "Tienda de golosinas con catálogo de productos, categorías y diseño responsive.",
    ["HTML", "CSS", "JavaScript"],
  ],
  [
    "Riqo",
    "ecommerce",
    "E-commerce",
    "https://tiendariqo.vercel.app/",
    "E-commerce para venta online de productos con catálogo y carrito.",
    ["HTML", "CSS", "JavaScript"],
  ],
  [
    "JDM Tuning",
    "ecommerce",
    "Catálogo",
    "https://autosportfolio.vercel.app/",
    "Catálogo para una concesionaria de autos japoneses.",
    ["HTML", "CSS", "JavaScript"],
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
    "ecommerce",
    "React",
    "https://pedimon-ecru.vercel.app/",
    "E-commerce conceptual inspirado en Pokémon, con interfaz interactiva.",
    ["React", "TypeScript", "Vite"],
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
    "fullstack",
    "Aplicación",
    "https://turnosappweb.vercel.app/",
    "Aplicación para gestionar turnos y reservas.",
    ["HTML", "CSS", "JavaScript"],
  ],
  [
    "Casino de Consola",
    "fullstack",
    "Node.js",
    "https://github.com/Manuirigoyen/Trabajo-Casino.git",
    "Juego de casino de consola con patrones de diseño.",
    ["TypeScript", "Node.js", "Factory"],
  ],
];
const G = document.querySelector("#project-grid");
function draw(f = "all") {
  G.innerHTML = P.map(
    (p, i) =>
      `<article class="project ${f != "all" && p[1] != f ? "hidden" : ""}"><span class="index">/${String(i + 1).padStart(2, "0")}</span><span class="kind">${p[2]}</span><h3>${p[0]}</h3><p>${p[4]}</p><div class="bottom"><div class="tags">${p[5].map((t) => `<span>${t}</span>`).join("")}</div><a class="go" href="${p[3]}" target="_blank" aria-label="Ver ${p[0]}">↗</a></div></article>`,
  ).join("");
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
