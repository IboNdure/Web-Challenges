import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  // Function to fetch the ISS coordinates
  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCoords({
        longitude: data.longitude,
        latitude: data.latitude,
      });
    } catch (error) {
      console.error("Error fetching ISS coordinates:", error);
    }
  }

  // useEffect to update coordinates every 5 seconds
  useEffect(() => {
    // Fetch coordinates initially on component mount
    getISSCoords();

    // Set interval to fetch ISS coordinates every 5 seconds
    const intervalId = setInterval(getISSCoords, 5000);

    // Cleanup function to clear interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
