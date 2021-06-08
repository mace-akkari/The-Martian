
export const Buttons = () => {        
  const hex = () => {
      let hexCode = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
      return hexCode.map((value) => {
          return <button>{value}</button>
        })                 
    };

    return (
        <div>
            {hex()}
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