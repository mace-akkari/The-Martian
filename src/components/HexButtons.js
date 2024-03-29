import React, { useRef, useEffect } from "react";

const Buttons = ({ clickHandler }) => {
  const graph = useRef(null);

  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph.childNodes;

    let angle = 360 - 115;
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${
        ciclegraph.clientWidth / 3.5
      }px) rotate(-${angle}deg)`;
    }
  }, []);

  const hex = () => {
    const hexCode = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    return hexCode.map((value, index) => {
      return (
        <button
          key={index}
          className="circle"
          value={value}
          onClick={() => clickHandler(value)}
        >
          {value}
        </button>
      );
    });
  };

  return (
    <div className="ciclegraph" ref={graph}>
      {hex()}
    </div>
  );
};

export default Buttons;
