/* eslint-disable react-hooks/rules-of-hooks */
import ComponentA from "./ComponentA";
import React, { useReducer } from "react";

export const counterContext = React.createContext();

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

function minComponent() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h3>Counter : {count} </h3>
      <counterContext.Provider value={{ Countdispatch: dispatch }}>
        <ComponentA />
      </counterContext.Provider>
    </>
  );
}
export default minComponent;
