import "./App.css";
import MainPage from "./components/MainPage";
import WinScreen from "./components/WinScreen"
import CanadaMap from "./assets/CanadaMap.jpg";
import React, { useState, useEffect } from 'react';
import { getCapital } from './api/api.js';
import { getCountry } from "./logic/utils.js";
import Hint from "./components/Hint.js";



function App() {
  const [hintsRemaining, setHintsRemaining] = useState(2);
  const [playerWin, setPlayerWin] = useState(false);
  const [mysteryCountry, setMysteryCountry] = useState(getCountry);
  const [hints, setHints] = useState([]);

  useEffect(() => {
    getCapital(mysteryCountry).then((capital) => setHints([...hints, <Hint text={`The capital city of this country is: ${capital}`} />]));
  }, [mysteryCountry]);

  const decrementHints = () => {
    setHintsRemaining(Math.max(hintsRemaining - 1, 0))
  }

  const setWin = () => {
    setPlayerWin(true);
  }

  const addHint = (text, img) => {
    setHints(
      [
        ...hints, <Hint text={text} img={img} />
      ]
    )
  }

  return (
    <div className="App">
      <h1 className="Title">Culturedle</h1>
      {playerWin ? <WinScreen hintsRemaining={hintsRemaining} /> : <MainPage hintsRemaining={hintsRemaining} decrementHints={decrementHints} setPlayerWin={setPlayerWin}
        hints={hints} mysteryCountry={mysteryCountry} addHint={addHint} />}
    </div>

  );
}

export default App;