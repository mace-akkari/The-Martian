export const MarksScreen = (props) => {
  const name = "Watney";
  const { clickHandler } = props;

  const onSubmit = (aMsg) => {
  console.log(aMsg);
  clickHandler(aMsg);
} 

  return (
    <div className="screens">
      <form onSubmit={() => clickHandler(onSubmit)}>
        <label>
          Astronaut {name}
          <input className="displayScreen" type="text" />{" "}
        </label>
        <input type="submit" value="Send Message"/>
      </form>
    </div>
  );
};
