
let firstName = 'Antonia';
let lastName = 'Francesca';

const fullName = function (first, last) {
  return `${first} ${last}`;
}


// console.log(fullName(firstName, lastName))
document.querySelector('#fullname').innerHTML = fullName(firstName, lastName)