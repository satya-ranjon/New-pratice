import React, { useReducer, useEffect } from "react";

const initialState = {
  loding: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loding: false,
        error: "",
        post: action.data,
      };
    case "ERROR":
      return {
        loding: false,
        error: "There was a proble",
        post: {},
      };
    default:
      return state;
  }
};

export default function GetPost2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: "SUCCESS", data: data });
      })
      .catch((error) => {
        dispatch({ type: "ERROR" });
      });
  }, []);
  return (
    <>
      <div>
        {state.loding ? "Loding ........" : state.post.title}
        {state.error ? state.error : null}
      </div>
    </>
  );
}
