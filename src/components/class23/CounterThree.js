import { useReducer } from "react";

const initialState1 = 0;
const initialState2 = 5;

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

export default function CounterThree() {
  const [count1, dispatch1] = useReducer(reducer, initialState1);
  const [count2, dispatch2] = useReducer(reducer, initialState2);

  return (
    <>
      <div>
        <h2>Counter 1 = {count1}</h2>
        <button onClick={() => dispatch1("Increment")}>Increment</button>
        <button onClick={() => dispatch1("Decrement")}>Decrement</button>
      </div>
      <div>
        <h2>Counter 2 = {count2}</h2>
        <button onClick={() => dispatch2("Increment")}>Increment</button>
        <button onClick={() => dispatch2("Decrement")}>Decrement</button>
      </div>
    </>
  );
}
