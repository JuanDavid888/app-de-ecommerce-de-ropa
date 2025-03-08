const clothingList = [
    "Blazer",
    "Blouse",
    "Boots",
    "Cardigan",
    "Cargo pants",
    "Coat",
    "Dress",
    "Gloves",
    "Hat",
    "Hoodie",
    "Jeans",
    "Jacket",
    "Leggings",
    "Loafers",
    "Overalls",
    "Pants",
    "Polo shirt",
    "Sandals",
    "Scarf",
    "Shorts",
    "Sneakers",
    "Socks",
    "Suit",
    "Sweater",
    "Sweatpants",
    "Swimsuit",
    "Tank top",
    "T-shirt",
    "Tracksuit",
    "Vest"
];

const inputBox = document.querySelector(".div__search-input input");
const resultBox = document.querySelector(".results");

// Función para mostrar sugerencias
const displayResults = function (results) {
    if (results.length === 0) {
        resultBox.innerHTML = "";
        return;
    }

    const resultHTML = results.map(function (clothes) {
        return `<li onclick="selectInput(this)">${clothes}</li>`;
    }).join("");

    resultBox.innerHTML = `<ul>${resultHTML}</ul>`;
};

// Evento para detectar entrada en el input
inputBox.addEventListener("keyup", function () {
    let input = inputBox.value.toLowerCase();
    let result = [];

    if (input.length > 0) {
        result = clothingList.filter((clothes) =>
            clothes.toLowerCase().includes(input)
        );
    }

    displayResults(result);
});
// Función para seleccionar un país
function selectInput(clothes) {
    inputBox.value = clothes.innerText;
    resultBox.innerHTML = "";
}