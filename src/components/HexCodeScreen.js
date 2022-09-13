const HexCodeScreen = ({ hex }) => {
  return (
    <div className="screens">
      <label>
        Hex Code
        <textarea className="displayScreen" type="text" value={hex} />{" "}
      </label>
    </div>
  );
};
export default HexCodeScreen;
