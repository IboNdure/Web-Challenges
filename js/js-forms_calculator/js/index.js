console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Extract values from the form
  const numberA = parseFloat(event.target.elements.numberA.value);
  const numberB = parseFloat(event.target.elements.numberB.value);
  const operator = event.target.elements.operator.value;

  console.log("Operator value:", operator);

  let result;

  switch (operator) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      if (numberB !== 0) {
        result = divide(numberA, numberB);
      } else {
        result = "Error: Division by zero";
      }
      break;
    default:
      result = "Invalid operation";
  }

  resultOutput.textContent = result;
});
