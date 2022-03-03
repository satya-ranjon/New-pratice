import { useReducer } from "react";

const initialState = {
  counter: 0,
  counter2: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, counter: state.counter + action.value };
    case "Decrement":
      return { ...state, counter: state.counter - action.value };
    case "Increment2":
      return { ...state, counter2: state.counter2 + action.value };
    case "Decrement2":
      return { ...state, counter2: state.counter2 - action.value };
    default:
      return state;
  }
};

export default function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Counter = {count.counter}</h2>
      <h2>Counter = {count.counter2}</h2>
      <div>
        <button onClick={() => dispatch({ type: "Increment", value: 1 })}>
          Decrement by 1
        </button>
        <button onClick={() => dispatch({ type: "Decrement", value: 1 })}>
          Decrement by 1
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "Increment2", value: 1 })}>
          Decrement2 by 1
        </button>
        <button onClick={() => dispatch({ type: "Decrement2", value: 1 })}>
          Decrement2 by 1
        </button>
      </div>
    </>
  );
}
