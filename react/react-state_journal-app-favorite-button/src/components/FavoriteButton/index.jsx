import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";
function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  }

  return (
    <button className="favorite-button" onClick={handleToggleFavorite}>
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
export default FavoriteButton;
