import React, { useState } from "react";

const Usestate2 = () => {
    const [color, setColor] = useState("red");  
  return (
    <div> <h4>My favorite color is {color}!</h4>
    <button
      type="button"
      onClick={() => setColor("blue")}
    >Blue</button>
    <button
      type="button"
      onClick={() => setColor("red")}
    >Red</button>
    <button
      type="button"
      onClick={() => setColor("pink")}
    >Pink</button>
    <button
      type="button"
      onClick={() => setColor("green")}
    >Green</button></div>
  )
}

export default Usestate2