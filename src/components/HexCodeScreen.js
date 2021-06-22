export const HexCodeScreen = (props) => {
  const { hex, setHexMessage } = props;
  const name = "Nasa";

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setHexMessage({
      nasaUser: name,
      nasaMessage: event.target.value
    });
  };

  return (
    <div className="screens"> 
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Hex Code
          <textarea className="displayScreen" type="text" value={hex} />{" "}
        </label>
        <input type="submit" value="Convert" />
      </form>
    </div>
  );
};
