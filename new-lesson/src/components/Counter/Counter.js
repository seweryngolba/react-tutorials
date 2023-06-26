import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value - 1);
  };

  const handleClickAdd = () => {
    setValue(value + 1);
  };

  return (
    <div className="counter-container">
      <button onClick={handleClick}>-</button>
      <p className="counter">{value}</p>
      <button onClick={handleClickAdd}>+</button>
    </div>
  );
};

export default Counter;
