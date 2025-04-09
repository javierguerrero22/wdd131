const today = new Date();
const currentYear = today.getFullYear();


document.getElementById("year").textContent = currentYear

const lastModified = document.lastModified;


document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// const selectProducto = document.getElementById("producto");
// products.forEach(product => {
//     const option = document.createElement("option");
//     option.value = product.id;
//     option.textContent = product.name;
//     selectProducto.appendChild(option);
// });
// const selectProduct = document.getElementById("product_name");
// products.forEach(product1 => {
//     const options = document.createElement("option");
//     options.value = product1.id;
//     options.textContent = product1.name;
//     selectProduct.appendChild(options);
// });
document.addEventListener("DOMContentLoaded", () => {
  const productoElement = document.getElementById("producto");
  if (productoElement) {
      populateSelect("producto", products);
  }

  const productNameElement = document.getElementById("product_name");
  if (productNameElement) {
      populateSelect("product_name", products);
  }
});
function capitalize(text) {
  if (!text) return ""; // Verifica si el texto está vacío o undefined
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}
function populateSelect(selectId, products) {
  const selectElement = document.getElementById(selectId);
  // selectElement.innerHTML = ""; 
  products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = capitalize(product.name);
      selectElement.appendChild(option);
  });
}





const countElement = document.getElementById("count");
let count = localStorage.getItem("reviews") || 0;


countElement.textContent = `Reviews carried out: ${count}`;


const form = document.getElementById("reviewForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    
    count++;
    localStorage.setItem("reviews", count);

    
    countElement.textContent = `Reviews carried out: ${count}`;})