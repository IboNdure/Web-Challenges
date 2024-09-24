console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img");

    // Set the star's src to empty or filled based on the filledStars value
    if (i <= filledStars) {
      star.src = "assets/star-filled.svg"; // Filled star
    } else {
      star.src = "assets/star-empty.svg"; // Empty star
    }

    // Add click event listener to each star
    star.addEventListener("click", () => {
      renderStars(i); // Re-render the stars with the correct number filled
    });

    // Append the star to the starContainer
    starContainer.appendChild(star);
  }
}

//--^-- your code here --^--

renderStars();
