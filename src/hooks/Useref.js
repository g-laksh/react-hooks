import { useState, useEffect, useRef } from "react";

const Useref = () => {
  const [inputValue, setInputValue] = useState("blue");
  const previousInputValue = useRef("red");
  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <div> <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
  <h2>Current Value: {inputValue}</h2>
  <h2>Previous Value: {previousInputValue.current}</h2>
</div>
  )
}

export default Useref