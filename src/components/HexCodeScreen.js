// const hexToString = (hexValue) => {
//   let hex = [];
//   for (let i = 0; i < hexValue.length; i += 2) {
//     hex.push(hexValue.slice(i, i + 2));
//   }

//   const decimals = hex.map((x) => parseInt(x, 16));
//   const message = decimals.map((x) => String.fromCharCode(x)).join("");

//   return message;
// };

export const HexCodeScreen = ({ hex }) => {
  return (
    <div className="screens">
      <label>
        Hex Code
        <textarea className="displayScreen" type="text" value={hex} />{" "}
      </label>
    </div>
  );
};
