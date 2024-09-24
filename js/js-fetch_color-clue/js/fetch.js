import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--
  try {
    // 3. Hole die Daten von der Color API
    const response = await fetch(colorApiUrl);

    // 4. Verarbeite die Antwort und wandle sie in ein JavaScript-Objekt um
    const data = await response.json();

    // 5. Inspektiere die API-Antwort (logge sie in die Konsole, um sie anzuschauen)
    console.log(data);

    // 6. Extrahiere den Hex-Wert und den Namen der Farbe aus der API-Antwort
    const closestColorHex = data.hex.value; // Beispiel: "#00FF00"
    const closestColorName = data.name.value; // Beispiel: "Green"

    // 7. Setze die erratene Farbe im Spiel
    setColorToGuess(closestColorHex, closestColorName);
  } catch (error) {
    // Fehlerbehandlung: Wenn etwas schiefgeht, loggen wir den Fehler in die Konsole
    console.error("Fehler beim Abrufen der Farb-Daten:", error);
  }

  // 3. Hole die Daten von der Color API
  const response = await fetch(colorApiUrl);

  // 4. Verarbeite die Antwort und wandle sie in ein JavaScript-Objekt um
  const data = await response.json();

  // 5. Inspektiere die API-Antwort (logge sie in die Konsole, um sie anzuschauen)
  console.log(data);

  // 6. Extrahiere den Hex-Wert und den Namen der Farbe aus der API-Antwort
  const closestColorHex = data.hex.value; // Beispiel: "#00FF00"
  const closestColorName = data.name.value; // Beispiel: "Green"

  // 7. Setze die erratene Farbe im Spiel
  setColorToGuess(closestColorHex, closestColorName);
}

// --^-- your code here --^--
