import CanadaMap from "../assets/CanadaMap.jpg";
import CanadaClue from "../assets/CanadaClue.jpg";
import React, { useState } from "react";

const WIN_STRING = "CANADA";

function MainPage({ hintsRemaining, decrementHints, setPlayerWin }) {
  const [input, setInput] = useState("");

  const isEnter = (event) => {
    if (event.key === "Enter") {
      return true;
    }
    return false;
  };

  const onSubmit = () => {
    if (input.toLowerCase() == WIN_STRING.toLowerCase()) {
      setPlayerWin(true);
    } else {
      decrementHints();
    }
  };
  const images = [CanadaMap, CanadaClue];
  const [currentIndex, setCurrentIndex] = useState[0];
  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="MainPage">
      <div className="Hints">
        <div className="carousel-container">
          <button className="arrow left-arrow" onClick={handlePreviousImage}>
            &lt; {/* Left arrow symbol */}
          </button>
          <img
            className="carousel-image"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <button className="arrow right-arrow" onClick={handleNextImage}>
            &gt; {/* Right arrow symbol */}
          </button>
        </div>
        <h1> Hints remaining: {hintsRemaining} </h1>
      </div>
      <span>
        <input
          onInput={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={(e) => isEnter(e) && onSubmit()}
          type="text"
          className="input-field"
        />
        <button className="btn" onClick={() => onSubmit()}>
          {" "}
          Submit{" "}
        </button>
      </span>
    </div>
  );
}

export default MainPage;
