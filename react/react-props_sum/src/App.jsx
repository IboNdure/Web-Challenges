import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return (
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}

export default function App() {
  return (
    <div>
      {/* Übergebe die Props valueA und valueB an die Sum-Komponente */}
      <Sum valueA={5} valueB={3} />
    </div>
  );
}
