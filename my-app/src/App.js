import "./App.css";
import MainPage from "./components/MainPage";
import WinScreen from "./components/WinScreen"
import CanadaMap from "./assets/CanadaMap.jpg";
import React, { useState } from 'react';



function App() {
  const [hintsRemaining, setHintsRemaining] = useState(2);
  const [playerWin, setPlayerWin] = useState(false);

  const decrementHints = () => {
    setHintsRemaining(Math.max(hintsRemaining - 1, 0))
  }

  const setWin = () => {
    setPlayerWin(true);
  }

  return (
    <div className="App">
      <h1 className="Title">Culturedle</h1>
      { playerWin ? <WinScreen hintsRemaining={hintsRemaining}/> : <MainPage hintsRemaining={hintsRemaining} decrementHints={decrementHints} setPlayerWin={setPlayerWin} />}
    </div>

  );
}

export default App;
