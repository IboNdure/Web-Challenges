import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0"
  );

  // Function to load Pokémon from the current URL
  async function loadPokemon(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokemon(data.results);
      setNextPageUrl(data.next); // Store the next page URL from the API response
      setPrevPageUrl(data.previous); // Store the previous page URL from the API response
    } catch (error) {
      console.log(error);
    }
  }

  // Fetch Pokémon when the component mounts or the current URL changes
  useEffect(() => {
    loadPokemon(currentUrl);
  }, [currentUrl]);

  // Function to handle the "Next Page" button
  function handleNextPage() {
    if (nextPageUrl) {
      setCurrentUrl(nextPageUrl); // Update current URL to the next page
    }
  }

  // Function to handle the "Previous Page" button
  function handlePreviousPage() {
    if (prevPageUrl) {
      setCurrentUrl(prevPageUrl); // Update current URL to the previous page
    }
  }

  return (
    <main>
      {/* Disable "Previous Page" button if no previous page exists */}
      <button
        type="button"
        onClick={handlePreviousPage}
        disabled={!prevPageUrl}
      >
        Previous Page
      </button>

      {/* Disable "Next Page" button if no next page exists */}
      <button type="button" onClick={handleNextPage} disabled={!nextPageUrl}>
        Next Page
      </button>

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
