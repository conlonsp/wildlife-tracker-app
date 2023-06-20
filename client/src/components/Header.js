import React from "react";
import NavBar from "./NavBar";

function Header() {
  
  return (
    <div>
      <h1>This is the Header</h1>
      <button>{user ? "Logout" : "Login"}</button>
      <NavBar />
    </div>
  )
}

export default Header