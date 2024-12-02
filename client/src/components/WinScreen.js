import CanadaMap from "../assets/CanadaMap.jpg";
import React, { useState } from 'react';


function WinScreen({ hintsRemaining }) {
   return <h1> You Won with {hintsRemaining} hints remaining! </h1>
}


export default WinScreen;