console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";
const productTeaserHTML = `
  <div class="product-teaser">
    <img src="${imageSrc}" alt="${name}" class="product-image" />
    <h2 class="product-name">${name}</h2>
    <p class="product-description">${description}</p>
    <ul class="product-categories">
      <li>${category1}</li>
      <li>${category2}</li>
      <li>${category3}</li>
    </ul>
    <div class="product-price">${price}</div>
    <button class="buy-button" data-js="buy-button">Buy</button>
  </div>
`;

// Append the new product teaser to the body
document.body.innerHTML += productTeaserHTML;

// Add event listener to the "buy" button of the second product teaser
const buyButton = document.querySelector('[data-js="buy-button"]');
buyButton.addEventListener("click", () => {
  console.log(`Product: ${name}, Price: ${price}`);
});
