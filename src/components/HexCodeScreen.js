import React from "react";

const HexCodeScreen = ({ hex, hexMessageHandler }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    hexMessageHandler(hex.slice(0, -1));
  };

  const handleClear = (event) => {
    event.preventDefault();
    event.stopPropagation();
    hexMessageHandler("");
  };

  return (
    <div className="screens">
      <label>
        Hex Code Screen
        <textarea className="displayScreen" type="text" value={hex} />{" "}
      </label>
      <input
        className="first_input"
        onClick={(event) => handleClear(event)}
        type="button"
        value="Clear Screen"
      />
      <input
        onClick={(event) => handleDelete(event)}
        type="button"
        value="Delete"
      />
    </div>
  );
};
export default HexCodeScreen;
