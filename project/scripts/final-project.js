const today = new Date();
const currentYear = today.getFullYear();

document.querySelector('#year').textContent = currentYear

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const places = [
    {
      placeName: "Cathedral",
      location: "Bolivar Avenue, Maturín",
      description: "A stunning example of neoclassical architecture.",
      imageUrl: "images/catedral.jpg" 
    },
    {
      placeName: "Bolívar Square",
      location: "Downtown, Maturín",
      description: "The cultural and social hub of the city.",
      imageUrl: "images/bolivar-square.jpeg"
    },
    {
      placeName: "Monagas Museum",
      location: "Miranda street, Maturín",
      description: "A window into the region's history and art.",
      imageUrl: "images/maturin-museum.jpeg"
    },
    {
      placeName: "La Guaricha Park",
      location: "Raúl Leoni Avenue, Maturín",
      description: "A family-friendly oasis with walking trails and a zoo. (In fact, guaricha or guaricho means child, but it is a way of calling them colloquially)",
      imageUrl: "images/la-guaricha.jpeg " 
    },
    {
      placeName: "Mochima National Park",
      location: "Near Maturín",
      description: "A nearby paradise for nature lovers.",
      imageUrl: "images/mochima.jpeg" 
    },
    {
      placeName: "Orinoco Delta",
      location: "East of Maturín",
      description: "A unique ecotourism destination teeming with wildlife.",
      imageUrl: "images/orinoco.jpeg" 
    },
    {
      placeName: "Monumental Stadium",
      location: "Alirio Ugarte Ave, Maturín",
      description: "Known as 'La Joya de Oriente,' with a capacity of over 51,000 spectators.",
      imageUrl: "images/stadium.jpeg" 
    },
    {
      placeName: "Maturín Sports Complex",
      location: "Raúl Leoni Avenue, Maturín",
      description: "A modern sports complex featuring facilities for athletics and cultural events.",
      imageUrl: "images/sports.jpeg" 
    }
];
document.addEventListener("DOMContentLoaded", () => {
    createplaceCard(places);
});
document.addEventListener("DOMContentLoaded", () => {

    const productNameElement = document.getElementById("product_name");
    if (productNameElement) {
        populateSelect("product_name", places);
    }
	
});

function populateSelect(selectId, places) {
    const selectElement = document.getElementById(selectId);
    if (!selectElement) {
        console.error(`Element with id "${selectId}" not found.`);
        return;
    }
    places.forEach(place => {
        const option = document.createElement("option");
        option.value = place.description;
        option.textContent = place.placeName; 
        selectElement.appendChild(option);
    });
}
const countElement = document.getElementById("count");
let count = localStorage.getItem("reviews") || 0;


countElement.textContent = `Ratings carried out: ${count}`;


const form = document.getElementById("reviewForm");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    
    count++;
    localStorage.setItem("reviews", count);

    
    countElement.textContent = `Ratings carried out: ${count}`;})


function createplaceCard(filteredplaces) {
	filteredplaces.forEach(place => {
		let card = document.createElement('section');
		let name = document.createElement('h3');
		let location = document.createElement('p');
		let img = document.createElement('img');

		name.textContent = place.placeName;
		location.innerHTML = `<span class='label'><strong> Location: </strong></span> ${place.location}`;
		img.setAttribute('src', place.imageUrl);
		img.setAttribute('alt', `${place.placeName} place`);
		img.setAttribute('loading', 'lazy');
		img.setAttribute('referrerpolicy', 'no-referrer');


		card.appendChild(name);
		card.appendChild(img);
		card.appendChild(location);	

	document.querySelector('.res-grid').appendChild(card)
})
}