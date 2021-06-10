export const HexCodeScreen = (props) => {
  const { hex } = props;
  return (
    <div>
      <form>
        <label>
          Hex Code:
          <input type="text" value={hex} />{" "}
        </label>
        <input type="submit" value="Convert" />
      </form>
    </div>
  );
};

//
