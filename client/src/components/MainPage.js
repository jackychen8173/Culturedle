import React, { useState } from "react";
import { fetchHints, fetchFlag } from "../api/api";

function MainPage({ setPlayerWin }) {
  const [input, setInput] = useState("");
  const [hints, setHints] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState("");

  const onSubmit = async () => {
    setError(""); // Clear previous error
    try {
      const hints = await fetchHints(input);
      setHints(hints);
      setCurrentIndex(0); // Reset carousel to the first hint
    } catch (err) {
      setError(err.message);
    }
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? hints.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === hints.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="MainPage">
      <div className="Hints">
        {error && <p className="error">{error}</p>}
        {hints.length > 0 && (
          <div className="carousel-container">
            <button className="arrow left-arrow" onClick={handlePreviousImage}>
              &lt;
            </button>
            <div>{hints[currentIndex]}</div>
            <button className="arrow right-arrow" onClick={handleNextImage}>
              &gt;
            </button>
          </div>
        )}
      </div>
      <span>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="input-field"
          placeholder="Enter country name"
        />
        <button className="btn" onClick={onSubmit}>
          Submit
        </button>
      </span>
    </div>
  );
}

export default MainPage;
