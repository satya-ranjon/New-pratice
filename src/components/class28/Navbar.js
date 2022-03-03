import React from "react";
import { NavLink } from "react-router-dom";
import Classes from "./styles/Classes.module.css";

export default function Navbar() {
  return (
    <>
      <h4>Navbar</h4>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navInfo) =>
                navInfo.isActive ? Classes.active : null
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navInfo) =>
                navInfo.isActive ? Classes.active : null
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navInfo) =>
                navInfo.isActive ? Classes.active : null
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navInfo) =>
                navInfo.isActive ? Classes.active : null
              }
              to="/all-post/"
            >
              Post
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navInfo) =>
                navInfo.isActive ? Classes.active : null
              }
              to="/nothing-here"
            >
              Nothing Here
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
