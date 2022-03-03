import React from "react";
import { Outlet } from "react-router-dom";
export default function Home() {
  return (
    <div>
      This is home page
      <h1>
        {" "}
        <Outlet />
      </h1>
    </div>
  );
}
