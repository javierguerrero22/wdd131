const today = new Date();
const currentYear = today.getFullYear();


document.getElementById("year").textContent = currentYear

const lastModified = document.lastModified;


document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
	  templeName: "Caracas Venezuela",
	  location: "Caracas, Venezuela",
	  dedicated: "2000, August, 20",
	  area: 15339,
	  imageUrl:
		'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/800x450/caracas_venezuela_temple_detail_1691066_2400x1200.jpg'
	},
	{
	  templeName: "Salt Lake Temple",
	  location: "Salt Lake City, Utah, United States",
	  dedicated: "1893, April, 6",
	  area: 253015,
	  imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/800x500/slctemple7.jpg"
	}
  ];
createTempleCard(temples);
const navigationLinks = document.querySelectorAll('.navigation a');

navigationLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigationLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

document.querySelector('#home').addEventListener('click', () => {
	document.querySelector('.res-grid').innerHTML = '';
	createTempleCard(temples);
});
const old = document.querySelector('#old')
old.addEventListener('click', () =>{
	document.querySelector('.res-grid').innerHTML = '';
	createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() <= 1900 ))
} );
const newT = document.querySelector('#new')
newT.addEventListener('click', () =>{
	document.querySelector('.res-grid').innerHTML = '';
	createTempleCard(temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000 ))
} );
const large = document.querySelector('#large')
large.addEventListener('click', () =>{
	document.querySelector('.res-grid').innerHTML = '';
	createTempleCard(temples.filter(temple => temple.area > 90000))
} )
const small = document.querySelector('#small')
small.addEventListener('click', () =>{
	document.querySelector('.res-grid').innerHTML = '';
	createTempleCard(temples.filter(temple => temple.area < 10000))
} )
function createTempleCard(filteredTemples) {
	filteredTemples.forEach(temple => {
		let card = document.createElement('section');
		let name = document.createElement('h3');
		let location = document.createElement('p');
		let dedication = document.createElement('p');
		let area = document.createElement('p');
		let img = document.createElement('img');

		name.textContent = temple.templeName;
		location.innerHTML = `<span class='label'> Location: </span> ${temple.location}`;
		dedication.innerHTML = `<span class='label'> Dedication: </span> ${temple.dedicated}`;
		area.innerHTML = `<span class='label'> Size: </span> ${temple.area} sqr ft`;
		img.setAttribute('src', temple.imageUrl);
		img.setAttribute('alt', `${temple.templeName} Temple`);
		img.setAttribute('loading', 'lazy');
		img.setAttribute('referrerpolicy', 'no-referrer');


		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

	document.querySelector('.res-grid').appendChild(card)
})
}