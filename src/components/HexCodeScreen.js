const HexCodeScreen = ({ hex, hexMessageHandler }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    hexMessageHandler(hex.slice(0, -1));
  };

  // one way
  // const handleDelete = (event) => {
  //   let copyHex = hex.split("");
  //   console.log("here", copyHex);
  //   copyHex.pop();
  //   event.preventDefault();
  //   event.stopPropagation();
  //   hexMessageHandler(copyHex.join(""));
  // };

  const handleClear = (event) => {
    event.preventDefault();
    event.stopPropagation();
    hexMessageHandler("");
  };

  return (
    <div className="screens">
      <label>
        Hex Code
        <textarea className="displayScreen" type="text" value={hex} />{" "}
      </label>
      <input
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
