import React, { useRef, useEffect } from "react";


export const Buttons = () => {    
    const graph = useRef(null);

  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph.childNodes;

    let angle = 360 - 90;
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      circle.style.transform = `rotate(${angle}deg) translate(${ciclegraph.clientWidth /
        2}px) rotate(-${angle}deg)`;
    }
  }, []);
    

  const hex = () => {
      let hexCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
      return hexCode.map((value) => {
          return <button className="circle">{value}</button>
        })                 
    };

    return (
        <div className="round">
            <div className="ciclegraph" ref={graph}>
                {hex()}
            </div>
        </div>
    )
};



//   export function Buttons() {        
//     const hex = () => {
//        let hexCode = ["0123456789ABCDEF"]
//        hexCode.forEach(value => { <button>{value}</button>})                 
//      };
//      return (
//          <div>
//              {hex()}
//          </div>
//      )
//  };