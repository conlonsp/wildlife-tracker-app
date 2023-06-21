import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

  return (
    <div>
      <h1>This is the NavBar</h1>
      <NavLink
        to='/'
        exact
      >
        Dashboard
      </NavLink>
    </div>
  )
}

export default NavBar