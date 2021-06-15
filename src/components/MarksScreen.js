export const MarksScreen = ({ setCharMessage }) => {
  const name = "Watney";

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setCharMessage({
      user: name,
      message: event.target[0].value
    });
  };

  return (
    <div className="screens">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Astronaut {name}
          <input className="displayScreen" type="text" />
        </label>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};