export const MarksScreen = () => {
  const name = "Watney";

  return (
    <div className="screens">
      <form>
        <label>
          Astronaut {name}
          <input className="displayScreen" type="text" />{" "}
        </label>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};
