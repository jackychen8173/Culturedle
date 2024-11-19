import CanadaMap from "../assets/CanadaMap.jpg";
import React, { useState } from 'react';

const WIN_STRING = "CANADA";

function MainPage( {hintsRemaining, decrementHints, setPlayerWin} ) {
  const [input, setInput] = useState("");

  const isEnter = (event) => {
    if (event.key === "Enter")
    {
      return true;
    }
    return false;
  }

  const onSubmit = () => {
    if (input.toLowerCase() == WIN_STRING.toLowerCase()) {
      setPlayerWin(true);
    }
    else {
      decrementHints();
    }
  }

  return (
    <div className="MainPage">
      <div className="Hints">
        <img className="img" src={CanadaMap} alt="CanadaMap" />
        <h1> Hints remaining: {hintsRemaining} </h1>
      </div>
      <span>
        <input onInput={e => setInput(e.target.value)} value={input} onKeyDown={e => isEnter(e) && onSubmit() } type="text" className="input-field"/> 
        <button className="btn" onClick={() => onSubmit()}> Submit </button>
      </span>
    </div>
  );
}

export default MainPage;
