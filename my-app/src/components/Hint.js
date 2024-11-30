import React, { useState } from 'react';


function Hint({ text, img }) {
   return (
    <div className='hint'>
        {img &&  <img src={img} height="240"/>}
        <h2> {text} </h2>
    </div>
   )
}


export default Hint;