import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function CounterOne() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Counter = {state}</h2>
      <button onClick={() => dispatch("Increment")}>Increment</button>
      <button onClick={() => dispatch("Decrement")}>Decrement</button>
    </>
  );
}
