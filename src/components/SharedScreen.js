import React from "react";

const SharedScreen = ({ communication }) => {
  const loadingMessage = "please wait, still loading...";

  return (
    <div className="screens">
      <form>
        <label>
          Comunications Screen
          <textarea
            className="displayScreen"
            type="text"
            value={`${communication ?? loadingMessage}`}
          />
        </label>
      </form>
    </div>
  );
};

export default SharedScreen;
