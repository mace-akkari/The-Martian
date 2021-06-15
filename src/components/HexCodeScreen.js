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
    // const hexValue = event.target.value;
    // let hex = [];

    // for (let i = 0; i < hexValue.length; i +=2) {
    //   hex.push(hexValue.slice(i, i + 2));
    // }

    // const decimals = hex.map((x) => parseInt(x ,16));
    // const message = decimals.map((x) => String.fromCharCode(x)).join("");

    // console.log(message);
  };



  return (
    <div className="screens"> 
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Hex Code
          <input className="displayScreen" type="text" value={hex} />{" "}
        </label>
        <input type="submit" value="Convert" />
      </form>
    </div>
  );
};
  