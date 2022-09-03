const MissonControl = ({ setHexMessage }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setHexMessage(event.target[0].value);
  };

  return (
    <div className="screens">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Mission Control
          <textarea className="displayScreen" type="text" />
        </label>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default MissonControl;
