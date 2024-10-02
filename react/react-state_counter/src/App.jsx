import React from "react";
import "./styles.css";
import { useState } from "react";
export default function App() {
  // Step 1: Declare a state variable for the counter using useState
  const [count, setCount] = useState(0);

  // Step 2: Define functions for incrementing and decrementing the counter
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      {/* Step 3: Display the current count from the state */}
      <h1>{count}</h1>

      <div className="button-container">
        {/* Step 4: Handle button click events to increment or decrement the count */}
        <button type="button" onClick={decrement}>
          -
        </button>
        <button type="button" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
}
