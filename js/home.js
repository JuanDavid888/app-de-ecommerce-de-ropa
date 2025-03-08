const countryList = [
    "Afghanistan",
    "Argentina",
    "Australia",
    "Brazil",
    "Canada",
    "Chile",
    "China",
    "Colombia",
    "Denmark",
    "Egypt",
    "France",
    "Germany",
    "India",
    "Indonesia",
    "Italy",
    "Japan",
    "Mexico",
    "Netherlands",
    "Peru",
    "Spain",
    "United States",
    "United Kingdom"
];

const inputBox = document.querySelector(".div__search-input input");
const resultBox = document.querySelector(".results");

// Función para mostrar sugerencias
const displayResults = function (results) {
    if (results.length === 0) {
        resultBox.innerHTML = "";
        return;
    }

    const resultHTML = results.map(function (country) {
        return `<li onclick="selectInput(this)">${country}</li>`;
    }).join("");

    resultBox.innerHTML = `<ul>${resultHTML}</ul>`;
};

// Evento para detectar entrada en el input
inputBox.addEventListener("keyup", function () {
    let input = inputBox.value.toLowerCase();
    let result = [];

    if (input.length > 0) {
        result = countryList.filter((country) =>
            country.toLowerCase().includes(input)
        );
    }

    displayResults(result);
});
// Función para seleccionar un país
function selectInput(country) {
    inputBox.value = country.innerText;
    resultBox.innerHTML = "";
}