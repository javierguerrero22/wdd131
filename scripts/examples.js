for (let i2 = 0; i2 <= 5; i2++) {
    console.log("Iteración número: " + i2);
}
let fruit = "apple";

switch (fruit) {
  case "orange":
    console.log("This is an orange.");
    break;
  case "banana":
    console.log("This is a banana.");
    break;
  case "apple":
    console.log("This is an apple.");
    break;
  default:
    console.log("Unknown fruit.");
}
let age = 18;

if (age >= 21) {
  console.log("You can drink alcohol in the US.");
} else if (age >= 18) {
  console.log("You can vote in the US.");
} else {
  console.log("You are a minor.");
}
let i2 = 1;

while (i2 <= 5) {
  console.log(i2);
  i2++;
}
let numbers = [0, 10, 20, 30, 40, 50];

numbers.forEach(function(number) {
  console.log(number);
});
numbers.forEach(number => console.log(number));

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

  // for loop
  for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }
  let i = 0;
  while (i < studentReport.length) {
    if (studentReport[i]<LIMIT) {
      console.log(studentReport[i])
    }
    i++;
  }
    // forEach loop
  studentReport.forEach(function (item) {
    if (item < LIMIT) {
      console.log(item);
    }
  });

  // for...in loop
  for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
  }