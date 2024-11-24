import CanadaMap from "../assets/CanadaMap.jpg";
import CanadaClue from "../assets/CanadaClue.jpeg";
import CanadaRCMP from "../assets/CanadaRCMP.jpg";
import React, { useState } from "react";

const WIN_STRING = "CANADA";

function MainPage({ hintsRemaining, decrementHints, setPlayerWin }) {
  const [input, setInput] = useState("");
  const [imagesRevealed, setImagesRevealed] = useState(1);

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
      setImagesRevealed((prev) => {
        const newRevealed = Math.min(prev + 1, images.length); // Calculate the new revealed count
        setCurrentIndex(newRevealed - 1); // Update currentIndex to the most recently revealed image
        return newRevealed;
      });
    }
  };

  const images = [CanadaRCMP, CanadaClue, CanadaMap];
  const [currentIndex, setCurrentIndex] = useState(0);
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
          <button className="arrow left-arrow" onClick={handlePreviousImage} disabled={currentIndex == 0}>
            &lt; {/* Left arrow symbol */}
          </button>
          <img
            className="carousel-image"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <button className="arrow right-arrow" onClick={handleNextImage} disabled={currentIndex + 1 === imagesRevealed}>
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
