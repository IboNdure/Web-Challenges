import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  return (
    <div>
      {isHappy ? "😊" : "😢"} {/* Fröhliches oder trauriges Smiley */}
    </div>
  );
}

export default function App() {
  return (
    <div>
      {/* Nutze die Smiley-Komponente mit unterschiedlichen Werten für isHappy */}
      <Smiley isHappy={true} /> {/* Fröhlich */}
      <Smiley isHappy={false} /> {/* Traurig */}
    </div>
  );
}
