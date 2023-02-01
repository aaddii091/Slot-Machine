import React from "react";
const Slot = (props) => {
  // let x = "😄";
  // let y = "😄";
  // let z = "😄";
  let { x, y, z } = props;
  if (x === y && y === z) {
    return (
      <>
        <div className="slot">
          {x}
          {y}
          {z}
          <div className="text">This Is Matching</div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot">
          {x}
          {y}
          {z}
          <div className="text">This Is Not Matching</div>
        </div>
      </>
    );
  }
};

export default Slot;
