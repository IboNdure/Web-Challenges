console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorOutput = document.querySelector("error");
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
      if (b === 0) {
        throw new Error("Division durch Null nicht möglich");
      }
      return a / b;
    } catch (error) {
      document.querySelector(".error").textContent = error.message;
      errorOutput.innerHTML = error.message;
      output.innerHTML = "";
    }
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;

  // Hier den Fehler abfangen, falls die Operation nicht erfolgreich ist
  output.innerText = operations[operation](firstNumber, secondNumber);
});
