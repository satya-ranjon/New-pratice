import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AllPost() {
  const located = useLocation();
  console.log(located.pathname);
  return (
    <div>
      <div>
        <h1>Posts</h1>
        <ul>
          <li>
            <Link to={`${located.pathname}javascript/25`}>Post 1</Link>
          </li>
          <li>
            <Link to="/all-post/Python/21">Post 2</Link>
          </li>
          <li>
            <Link to="/all-post/Php/23">Post 3</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
