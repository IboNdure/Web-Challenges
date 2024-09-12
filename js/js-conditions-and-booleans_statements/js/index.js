console.clear();

// Part 1: Password
const receivedPassword = "password1234";

const SUPER_SECRET_PASSWORD = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome ! You are logged in as Brunhilde1984");
} else {
  console.log("Acces Denied");
}

// Part 2: Even / Odd
const number = 9;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 6; // Change this number to test different scenarios
let pricePerHotdog;

if (numberOfHotdogs < 1000000) {
  pricePerHotdog = 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  pricePerHotdog = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  pricePerHotdog = 1;
} else {
  pricePerHotdog = 0.1;
}

console.log(
  `Total price for ${numberOfHotdogs} hotdogs is: ${
    numberOfHotdogs * pricePerHotdog
  } euros`
);
// Part 4: Daytime
const currentHour = 20;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
