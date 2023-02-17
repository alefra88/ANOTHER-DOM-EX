// making title
const d = document;
let title = d.createElement("h1");
let text = d.createTextNode("Welcome to my DOM exercices!");
title.appendChild(text);

// title style
title.className = "h1-style";
d.body.insertBefore(title, d.body.firstChild);

// cards container
// generating card
const createCard = (title, image, link) => {
  // making div to contain cards
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("card");

  // make h2 elem to title card
  let cardTitle = document.createElement("h2");
  cardTitle.textContent = title;

  // make img elem to image card
  let cardImage = document.createElement("img");
  cardImage.src = image;

  // add h2 and img elem to card container
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardImage);

  // add click event of each card
  cardContainer.addEventListener("click", function () {
    window.location.href = link;
  });

  // return cards
  return cardContainer;
};
// Usa la función para crear tres tarjetas
let card1 = createCard(
  "Color Flipper",
  "./assets/firstaplication.png",
  "./color-flipper/index.html"
);
let card2 = createCard(
  "Counter",
  "./assets/counter.png",
  "./counter/index.html"
);
let card3 = createCard(
  "Card Reviews",
  "./assets/reviews.png",
  "./review/index.html"
);
let card4 = createCard("navBar", "./assets/navbar.png", "./navBar/index.html");
let card5 = createCard(
  "sideBar",
  "./assets/sidebar.png",
  "./sideBAR/index.html"
);
let card6 = createCard("Modal", "./assets/modal.png", "./modal/index.html");
let card7 = createCard(
  "Questions",
  "./assets/questions.png",
  "./questions/index.html"
);
let card8 = createCard("Menu", "./assets/menu.png", "./menu/index.html");
let card9 = createCard("video", "./assets/video.png", "./video/index.html");
let card10 = createCard(
  "Portfolio Feb 2023",
  "./assets/webpage.png",
  "./scroll-effect/index.html"
);
let card11 = createCard("About", "./assets/about.png", "./about/index.html");
let card12 = createCard(
  "Counter of item",
  "./assets/counter2.png",
  "./counter-article/index.html"
);
let card13 = createCard(
  "Lista productos",
  "./assets/lista.png",
  "./productos-tienda/index.html"
);
let card14 = createCard(
  "slider",
  "./assets/lista.png",
  "./slider/index.html"
);

// let card12 = createCard("about", "./assets/about.png", "./about/index.html");
// Añade las tarjetas a un elemento en el HTML
let cardContainer = document.getElementById("card-container");
cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);
cardContainer.appendChild(card4);
cardContainer.appendChild(card5);
cardContainer.appendChild(card6);
cardContainer.appendChild(card7);
cardContainer.appendChild(card8);
cardContainer.appendChild(card9);
cardContainer.appendChild(card10);
cardContainer.appendChild(card11);
cardContainer.appendChild(card12);
cardContainer.appendChild(card13);
cardContainer.appendChild(card14);


//DARK MODE
d.getElementById("btn").addEventListener("click", function () {
  d.body.classList.toggle("dark-mode");
});
