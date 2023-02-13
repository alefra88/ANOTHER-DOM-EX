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

// Añade las tarjetas a un elemento en el HTML
let cardContainer = document.getElementById("card-container");
cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);
cardContainer.appendChild(card4);
cardContainer.appendChild(card5);
//DARK MODE
d.getElementById("btn").addEventListener("click", function () {
  d.body.classList.toggle("dark-mode");
});
