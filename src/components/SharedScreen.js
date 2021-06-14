export const SharedScreen = ({ communication }) => {
  const { user, message } = communication;

  return (
    <div className="screens">
      <form>
        <label>
          Comunications Screen
          <input
            className="displayScreen"
            type="text"
            value={`${user}: ${message}`}
          />
        </label>
        <input type="reset" defaultValue="Reset" />
      </form>
    </div>
  );
};