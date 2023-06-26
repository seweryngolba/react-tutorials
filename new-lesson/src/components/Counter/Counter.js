import Button from "../Button/Button";
import "./Counter.css";
import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleClickMinus = () => {
    setValue(value - 1);
  };

  const handleClickAdd = () => {
    setValue(value + 1);
  };

  return (
    <div className="counter-container">
      <Button text="-" handleClick={handleClickMinus} isSquare={true} />
      {/* <button onClick={handleClick}>-</button> */}
      <p className="counter">{value}</p>
      {/* <button onClick={handleClickAdd}>+</button> */}
      <Button text="+" handleClick={handleClickAdd} isSquare={false} />
    </div>
  );
};

export default Counter;
