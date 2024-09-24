console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  // Daten von der API abrufen
  const response = await fetch(url);

  // Antwort in JSON-Format umwandeln
  const data = await response.json();

  // Gesamte Daten in der Konsole ausgeben
  console.log(data);

  // Verschiedene Werte der Daten anzeigen (z. B. erster Charakter in der Liste)
  console.log("Erster Charakter:", data.results[0]);

  // Bonus: Augenfarbe von R2-D2 ausgeben
  const r2d2 = data.results.find((character) => character.name === "R2-D2");
  r2d2;
  console.log("Augenfarbe von R2-D2:", r2d2.eye_color);
}
console.log("R2-D2 nicht gefunden.");

fetchData();
