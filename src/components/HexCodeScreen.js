export const HexCodeScreen = (props) => {
  const { hex } = props;
  return (
    <div className="screens"> 
      <form>
        <label>
          Hex Code
          <input className="displayScreen" type="text" value={hex} />{" "}
        </label>
        <input type="submit" value="Convert" />
      </form>
    </div>
  );
};
