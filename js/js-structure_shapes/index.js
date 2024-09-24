import Circle from "./components/Circle/circle.js";

console.clear();

const root = document.getElementById("root");
const circle = Circle();
root.append(circle);

// const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.addEventListener("click", () => {
//   circle.style.backgroundColor = getColor;
// });

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getColor;
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getColor;
});

root.append(circle, square, pentagon);
