// making title
const d = document;
let title = d.createElement("h1");
let text = d.createTextNode("Welcome to mi DOM exercices!");
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
    "https://via.placeholder.com/150x150",
    "./color-flipper/index.html"
);
let card2 = createCard(
    "Título de la tarjeta 2",
    "https://via.placeholder.com/150x150",
    "content2.html"
);
let card3 = createCard(
    "Título de la tarjeta 3",
    "https://via.placeholder.com/150x150",
    "content3.html"
);

// Añade las tarjetas a un elemento en el HTML
let cardContainer = document.getElementById("card-container");
cardContainer.appendChild(card1);
cardContainer.appendChild(card2);
cardContainer.appendChild(card3);
