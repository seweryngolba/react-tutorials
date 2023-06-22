import Button from "../Button/Button";
import { useState } from "react";

function Form() {
  const logClick = (x, y) => {
    alert(`Jestem klikniety + ${x} + ${y}`);
  };

  const selectName = (event) => {
    setNameItem(event.target.value);
  };

  const [nameItem, setNameItem] = useState();

  const names = ["Ania", "Jola", "Kasia", "Jan", "Tomasz"];

  return (
    <>
      <div>
        <Button name="Dodaj" onBtnClick={logClick}></Button>
        <Button name="Zapisz" onBtnClick={logClick} isBorder={true}></Button>
        <Button name="Usuń" onBtnClick={logClick}></Button>
      </div>
      <select onChange={selectName}>
        {names.map((name, index) => {
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <h1>{nameItem}</h1>
    </>
  );
}

export default Form;
