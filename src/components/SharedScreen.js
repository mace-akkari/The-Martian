export const SharedScreen = ({ communication }) => {
  return (
    <div className="screens">
      <form>
        <label>
          Comunications Screen
          <textarea
            className="displayScreen"
            type="text"
            value={`${communication}`}
          />
        </label>
      </form>
    </div>
  );
};
