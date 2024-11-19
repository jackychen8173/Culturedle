import "./App.css";
import CanadaMap from "./assets/CanadaMap.jpg";

function App() {
  return (
    <div className="App">
      <div className="Title">
        <h1 classNam="Title">Culturedle</h1>
      </div>
      <div className="Hints">
        <img className="img" src={CanadaMap} alt="CanadaMap"/>
      </div>
      <div className="Textbox"></div>
    </div>
  );
}

export default App;
