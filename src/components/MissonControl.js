import { createRef } from "react";

const MissonControl = ({ setHexMessage }) => {
  const newRef = createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setHexMessage(event.target[0].value);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // document.getElementById("textArea").value = "";
    newRef.current.value = "";
  };

  return (
    <div className="screens">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label>
          Mission Control
          <textarea ref={newRef} className="displayScreen" type="text" />
        </label>
        <input className="first_input" type="submit" value="Send Message" />
        <input
          onClick={(event) => handleDelete(event)}
          type="button"
          value="Clear Screen"
        />
      </form>
    </div>
  );
};

export default MissonControl;
