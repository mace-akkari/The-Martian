export const SharedScreen = () => {
  return (
    <div className="screens">
      <form>
        <label>
          Comunications Screen
          <input className="displayScreen" type="text" />{" "}
        </label>
        <input type="reset" defaultValue="Reset" />
      </form>
    </div>
  );
};