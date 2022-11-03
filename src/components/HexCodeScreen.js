const HexCodeScreen = ({ hex, comms }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    comms("");
  };

  return (
    <div className="screens">
      <label>
        Hex Code
        <textarea className="displayScreen" type="text" value={hex} />{" "}
      </label>
      <input
        onClick={(event) => handleDelete(event)}
        type="button"
        value="Clear Screen"
      />
    </div>
  );
};
export default HexCodeScreen;
