console.clear();

// `while` loop

let number = Math.random();
let count = 0;

// --v-- write/change code here --v--
let string = "a";

while (number <= 0.9) {
  console.log(`Iteration ${count + 1}: number = ${number}`);
  count++;

  // Set `number` to a new random value
  number = Math.random();
}

// --^-- write/change code here --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
