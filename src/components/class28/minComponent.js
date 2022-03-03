import React from "react";
import Body from "./Body";
import { BrowserRouter as Routes } from "react-router-dom";
export default function minComponent() {
  return (
    <>
      <h1>React Router V6</h1>
      <Routes>
        <Body />
      </Routes>
    </>
  );
}
