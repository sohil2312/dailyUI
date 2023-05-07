import React, { useEffect, useState } from 'react'

const Rainbow = () => {
    const [red, setRed] = useState(0)
  const [blue, setBlue] = useState(0)
  const [green, setGreen] = useState(0)
  const [rgb, setRgb] = useState('#000000')
  const plusRed = ()=>{
    setRed((Math.round(Math.random()*255)));
    setRgb(rgbToHex(red,green,blue));
  }

  const plusBlue = ()=>{
    setBlue((Math.round(Math.random()*255)));
    setRgb(rgbToHex(red,green,blue))
  }
  
  const plusGreen = ()=>{
    setGreen((Math.round(Math.random()*255)));
    setRgb(rgbToHex(red,green,blue)) 
  }
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r,g,b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
 useEffect(() => {
   const res = rgbToHex(red,green,blue);
  console.log(res)
   return () => {
     
   }
 }, [1])
 
  
  
 
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:rgb}}>
        <div className="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-danger mx-3" onClick={plusRed}>RED++</button>
        </div>
        <div className="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-success mx-3" onClick={plusGreen}>GREEN++</button>
        </div>
        <div className="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-primary mx-3" onClick={plusBlue}>BLUE++</button>
        </div>
        <h1>Color: {rgb}</h1>
        
      </header>
    </div>
  );
 
}

export default Rainbow