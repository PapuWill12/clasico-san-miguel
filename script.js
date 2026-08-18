const translations = {
  es: {
    topbar: "Cocina mexicana • San Miguel de Allende",
    nav_story: "Nuestra historia",
    nav_favorites: "Favoritos",
    nav_gallery: "Galería",
    nav_visit: "Visítanos",
    eyebrow: "SABORES DE CASA • SAN MIGUEL DE ALLENDE",
    hero_title: "Lo clásico<br><em>se disfruta.</em>",
    hero_copy: "Cocina mexicana, café y desayunos preparados con ese sabor que hace sentir a uno como en casa.",
    hero_btn: "Descubrir el menú",
    map_btn: "Cómo llegar",
    rating: "en Google",
    story_eyebrow: "TRADICIÓN FAMILIAR",
    story_title: "Un pequeño lugar con mucho sabor.",
    story_p1: "Clásico San Miguel nace de una idea sencilla: cocinar comida mexicana con cariño y servirla de una manera que haga sentir bienvenido a quien cruza la puerta.",
    story_p2: "En el corazón de San Miguel de Allende, aquí encontrarás desayunos, comida mexicana, café y jugos frescos en un ambiente relajado y familiar.",
    story_link: "Ven a conocernos →",
    feature_eyebrow: "HECHO PARA DISFRUTAR",
    feature_title: "Desayuno sin prisa.<br>Comida con alma.",
    feature_copy: "Desde chilaquiles y cazuelas hasta café y jugos frescos, nuestro menú celebra los sabores mexicanos que todos conocemos y queremos.",
    feature_btn: "Ver favoritos",
    fav_eyebrow: "DE LA COCINA",
    fav_title: "Favoritos de Clásico",
    fav_subtitle: "Algunos de los platillos y bebidas que nuestros visitantes mencionan una y otra vez.",
    dish1: "Crujientes, con salsas llenas de sabor y ese toque casero que los hace especiales.",
    dish2: "Un desayuno abundante y reconfortante, perfecto para empezar el día en San Miguel.",
    dish3: "Una opción dulce para acompañar con café y disfrutar sin prisa.",
    dish4: "Bebidas frescas para acompañar tu desayuno o comida.",
    menu_note_title: "¿Quieres ver el menú completo?",
    menu_note_copy: "Las opciones y disponibilidad pueden cambiar. Contáctanos o visítanos para conocer lo que tenemos hoy.",
    call_btn: "Llamar al restaurante",
    quote: "Como comer en casa. Excelente servicio, comida fresca y un pedacito de San Miguel.",
    gallery_eyebrow: "UNA MIRADA A CLÁSICO",
    gallery_title: "Sabor que se ve.",
    gallery_subtitle: "Reemplaza estas imágenes de muestra con las fotografías oficiales del restaurante.",
    visit_eyebrow: "ENCUÉNTRANOS",
    visit_title: "Te esperamos en San Miguel.",
    address_label: "DIRECCIÓN",
    phone_label: "TELÉFONO",
    hours_label: "HORARIO",
    directions_btn: "Abrir en Google Maps",
    phone_btn: "Llamar",
    back_top: "Volver arriba ↑"
  },
  en: {
    topbar: "Mexican cuisine • San Miguel de Allende",
    nav_story: "Our story",
    nav_favorites: "Favorites",
    nav_gallery: "Gallery",
    nav_visit: "Visit us",
    eyebrow: "HOME-STYLE FLAVORS • SAN MIGUEL DE ALLENDE",
    hero_title: "Classic<br><em>is meant to be savored.</em>",
    hero_copy: "Mexican cuisine, coffee and breakfast prepared with the kind of flavor that makes you feel at home.",
    hero_btn: "Discover the menu",
    map_btn: "Get directions",
    rating: "on Google",
    story_eyebrow: "FAMILY TRADITION",
    story_title: "A small place with plenty of flavor.",
    story_p1: "Clásico San Miguel was born from a simple idea: cook Mexican food with care and serve it in a way that makes everyone feel welcome.",
    story_p2: "In the heart of San Miguel de Allende, you'll find breakfast, Mexican food, coffee and fresh juices in a relaxed, family-friendly setting.",
    story_link: "Come meet us →",
    feature_eyebrow: "MADE TO BE ENJOYED",
    feature_title: "Breakfast without rushing.<br>Food with soul.",
    feature_copy: "From chilaquiles and hearty casseroles to coffee and fresh juices, our menu celebrates the Mexican flavors we all know and love.",
    feature_btn: "See favorites",
    fav_eyebrow: "FROM THE KITCHEN",
    fav_title: "Clásico Favorites",
    fav_subtitle: "A few of the dishes and drinks our visitors mention again and again.",
    dish1: "Crispy, flavorful and finished with the kind of homemade touch that makes them special.",
    dish2: "A hearty, comforting breakfast that is perfect for starting a day in San Miguel.",
    dish3: "A sweet option to pair with coffee and enjoy at an easy pace.",
    dish4: "Fresh drinks to accompany breakfast or lunch.",
    menu_note_title: "Want to see the full menu?",
    menu_note_copy: "Options and availability can change. Contact us or visit to see what is available today.",
    call_btn: "Call the restaurant",
    quote: "Like eating at home. Excellent service, fresh food and a little piece of San Miguel.",
    gallery_eyebrow: "A LOOK AT CLÁSICO",
    gallery_title: "Flavor you can see.",
    gallery_subtitle: "Replace these sample images with the restaurant's official photography.",
    visit_eyebrow: "FIND US",
    visit_title: "We'll see you in San Miguel.",
    address_label: "ADDRESS",
    phone_label: "PHONE",
    hours_label: "HOURS",
    directions_btn: "Open in Google Maps",
    phone_btn: "Call",
    back_top: "Back to top ↑"
  }
};

let language = localStorage.getItem("clasico-language") || "es";

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) el.innerHTML = translations[language][key];
  });
  document.getElementById("languageBtn").textContent = language === "es" ? "EN" : "ES";
  localStorage.setItem("clasico-language", language);
}

document.getElementById("languageBtn").addEventListener("click", () => {
  language = language === "es" ? "en" : "es";
  applyLanguage();
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

applyLanguage();
