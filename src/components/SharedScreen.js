export const SharedScreen = (props) => {
  const { message } = props
  return (
    <div className="screens">
      <form>
        <label>
          Comunications Screen
          <input className="displayScreen" type="text" aMsg={message} />{" "}
        </label>
        <input type="reset" defaultValue="Reset" />
      </form>
    </div>
  );
};