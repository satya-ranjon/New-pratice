import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const style = {
    listStyle: "none",
  };
  return (
    <div>
      <>
        <div>
          <nav>
            <ul>
              <li style={style}>
                <NavLink to="/">Home</NavLink>
              </li>
              <li style={style}>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li style={style}>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li style={style}>
                <NavLink to="/post/js/react">React</NavLink>
              </li>
              <li style={style}>
                <NavLink to="/post/js/javascript"> JavaScript</NavLink>
              </li>
              <li style={style}>
                <NavLink to="/post/js/Angular"> Angular</NavLink>
              </li>
              <li style={style}>
                <NavLink to="/login"> Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </>
    </div>
  );
}
