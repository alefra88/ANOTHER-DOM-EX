// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
  // console.log(linksContainer.getBoundingClientRect());
});

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});
// calculate heights

// insertar texto
const texts = {
  text1:
    "By combining my skills as a developer with my knowledge of anthropology, I am able to create software that is truly human-centered and transformative.",
  text2:
    "I am committed to creating software that reflects the values and beliefs of the people who use it, and I approach each project with a deep respect for their needs and desires.",
  text3:
    "Believe in the power of code to change the world, and trust in me to help bring your vision to life",
  text4: "With every line of code, I strive to make the world a better place.",
  text5:
    "As a software developer, I am not just solving problems; I am creating opportunities.",
  text6:
    "I believe that innovation is the key to unlocking the full potential of technology, and I am committed to being a part of that process.",
  text7:
    "I am passionate about using technology to drive positive change and bring new ideas to life.",
  text8:
    "In a world of constant change, I am dedicated to staying on the cutting edge of technology and pushing boundaries with my work.",
  text9:
    "With every project I undertake, I bring a commitment to excellence and a passion for innovation.",
  text10:
    "I am not just a developer; I am a problem solver, a creative thinker, and a visionary.",
  text11:
    "I believe that great software is not just about writing code; it's about crafting experiences that inspire and delight.",
  text12:
    "I am constantly learning and growing, and I am committed to using my skills to make a difference in the world.",
  text13:
    "As a software developer, I am not limited by what is, but inspired by what could be.",
  text14:
    "Through software development, I am able to explore and understand the cultural and social implications of technology in our modern world.",
  text15:
    "As a software developer, I strive to create tools that are intuitive and accessible, meeting the needs of diverse communities and cultures.",
  text16:
    "My work as a software developer is informed by a deep understanding of the ways in which technology shapes human behavior and experience.",
  text17:
    "As an anthropologist and a developer, I approach every project with a keen eye for the cultural and social context in which it will be used, and strive to create solutions that are both meaningful and effective.",
  text18:
    "Through my work as a software developer, I am able to bridge the gap between technology and humanity, creating tools that are responsive to the needs and desires of the people who use them.",
  text19:
    "I believe that software development is an inherently social and cultural activity, and that understanding the complex systems in which technology operates is crucial to creating meaningful solutions.",
  text20:
    "As an anthropologist who has studied the development of software, I am committed to creating solutions that are not only functional, but also meaningful and empowering for those who use them.",
  text21:
    "My work as a software developer is driven by a deep curiosity and fascination with the ways in which technology is transforming our world, and a commitment to using that technology for good.",
};
// Obtener el elemento padre
const container = document.querySelector(".container");

// Crear el nuevo elemento p
const newParagraph = document.createElement("p");

// Agregar el contenido al nuevo elemento p
// newParagraph.textContent = "Este es un nuevo párrafo";

// Obtener los elementos a
const link = document.querySelector("#btnsee");

// Insertar el nuevo elemento p después del h1 y antes del a

const randomText =
  texts[
    Object.keys(texts)[Math.floor(Math.random() * Object.keys(texts).length)]
  ];
newParagraph.textContent = randomText;
container.insertBefore(newParagraph, link);
