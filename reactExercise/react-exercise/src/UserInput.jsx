import React from "react";

const userInput = props => {
  const style = {
    backgroudColor: "white",
    border: "1px solid blue",
    font: "inherit",
    padding: "8px",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <div>
      <input style={style}type="text" onChange={props.change} value={props.currentName} />
    </div>
  );
};

export default userInput;
