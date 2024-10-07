import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");

  const holidayInputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    setHoliday(formData.get("holiday")); // Get the holiday input value
    setDate(formData.get("date")); // Get the date input value
    event.target.reset();
    if (holidayInputRef.current) {
      holidayInputRef.current.focus();
    }
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>

      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          ref={holidayInputRef}
        />

        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />

        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>

      <h2>Output of Submitted Data</h2>

      <p>
        Favourite Holiday:{" "}
        <span className="output">{holiday || "New Year"}</span>
      </p>
      <p>
        Date: <span className="output">{date || "Well..."}</span>
      </p>
    </div>
  );
}
