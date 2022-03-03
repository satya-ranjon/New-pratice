import { useContext } from "react";
import { counterContext } from "./minComponet";

export default function ComponetB() {
  const countContext = useContext(counterContext);
  return (
    <>
      <div>
        <h2>Component A</h2>
        <button onClick={() => countContext.Countdispatch("Increment")}>
          Increment
        </button>
        <button onClick={() => countContext.Countdispatch("Decrement")}>
          Decrement
        </button>
      </div>
    </>
  );
}
