//import { useState } from "react";
import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";
import { getD6Roll } from "./utils";

export default function App() {
  // Use local storage to persist rolls
  const [rolls, setRolls] = useLocalStorageState("rolls", {
    defaultValue: [],
  });

  // Function to handle dice roll
  const handleRoll = () => {
    const newRoll = { value: getD6Roll(), time: Date.now() };
    setRolls([newRoll, ...rolls]);
  };

  // Get the most recent roll value
  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        {/* Pass the roll value and the handler to the D6Button */}
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        {/* Pass the rolls array to History */}
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
