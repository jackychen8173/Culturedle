import "./App.css";
import CanadaMap from "./assets/CanadaMap.jpg";
import React, { useState } from 'react';

function App() {
  const [hints, setHints] = useState(3);

  return (
    <div className="App">
      <div className="Title">
        <h1 className="Title">Culturedle</h1>
      </div>
      <div className="Hints">
        <img className="img" src={CanadaMap} alt="CanadaMap" />
        <h1> Hints remaining: {hints} </h1>
      </div>
      <span>
        <input type="text" className="input-field"/> <button className="btn" onClick={() => setHints(Math.max(hints-1, 0))}> Test </button>
      </span>
    </div>
  );
}

export default App;
