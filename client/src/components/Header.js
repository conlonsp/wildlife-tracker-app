import React, { useContext } from "react";
import NavBar from "./NavBar";
import { UserContext } from "../Context";

function Header() {
  const { user, setUser } = useContext(UserContext)
  
  return (
    <div>
      <h1>This is the Header</h1>
      <button>{user ? "Logout" : "Login"}</button>
      <NavBar />
    </div>
  )
}

export default Header