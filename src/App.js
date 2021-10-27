import "./styles.css";
import { useCallback, useState } from "react";
import UseCallbackComponent from "./UseCallbackComponent";
export default function App() {
  console.log("I'm parent");
  const [state, setState] = useState("");

  const [childState, setChildState] = useState("");
  const handleClick = () => {
    // alert("parent event triggered");
    setState("parent event triggered " + Math.random(1));
  };
  const handleClickChild = useCallback(() => {
    // alert("parent event triggered");
    setChildState("child event triggered " + Math.random(2));
  }, [childState]);

  return (
    <div className="App">
      <h1>Hi..It's demo for useCallback hook</h1>
      <small style={{ color: "red" }}>check console for understanding</small>
      <br />
      <button onClick={() => handleClick()}>I'm parent Click me</button>
      <UseCallbackComponent
        childState={childState}
        handleClickEvent={handleClickChild}
      />
      <div>{state}</div>
    </div>
  );
}
