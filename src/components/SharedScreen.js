const SharedScreen = ({ communication }) => {
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

export default SharedScreen;

// change hexToString so it can handle invalid hex, if starment %2 return
// error msg if not paired yet - defult msg
