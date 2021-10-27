import React from "react";
const UseCallbackComponent = (props) => {
  console.log("i am child");
  return (
    <>
      <button onClick={() => props.handleClickEvent()}>
        I'm child Click me
      </button>
      <div>{props.childState}</div>
    </>
  );
};
export default React.memo(UseCallbackComponent);
