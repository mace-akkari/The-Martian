export const SharedScreen = ({ communication }) => {
  const { user, message, nasaUser, nasaMessage } = communication; 

  return (
    <div className="screens">
      <form>
        <label>
          Comunications Screen
          <input
            className="displayScreen"
            type="text"
            value={`${user}: ${message}`}
            value={`${nasaUser}: ${nasaMessage}`}
          />
        </label>
        <input type="reset" defaultValue="Reset" />
      </form>
    </div>
  );
};