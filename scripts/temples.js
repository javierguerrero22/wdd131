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