import "./Button.css";

function Button({ name, onBtnClick, isBorder }) {
  const componentStyle = {
    border: isBorder ? "3px solid red" : "none",
  };

  return (
    <button style={componentStyle} onClick={() => onBtnClick(name, "")}>
      {name}
    </button>
  );
}

export default Button;
