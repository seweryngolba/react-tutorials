const Button = ({ text, handleClick, isSquare }) => {
  const styleComponent = {
    borderRadius: isSquare ? "0%" : "80%",
    backgroundColor: "navy",
    color: "white",
  };
  return (
    <button style={styleComponent} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
