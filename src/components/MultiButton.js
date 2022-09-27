import React from "react";

function MultiButton() {
  function handleClick(number) {
    alert(`Button ${number} was clicked`);
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      <button onClick={()=>handleClick(1)}>Button 1</button>
      <button onClick={()=>handleClick(2)}>Button 2</button>
      <button onClick={()=>handleClick(3)}>Button 3</button>
    </div>
  );
}

export default MultiButton;
