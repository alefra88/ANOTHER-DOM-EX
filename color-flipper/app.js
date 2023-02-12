const colors = ["green", "red", "rgba(133,122,200)", "#f15025"],
    d = document;
const btn = d.getElementById("btn");
const color = d.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();

    d.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
