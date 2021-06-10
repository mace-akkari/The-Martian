export const MarksScreen = () => {
  const name = "Watney";

  return (
    <div>
      <form>
        <label>
          Astronaut {name}:
          <input type="text" />{" "}
        </label>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};
