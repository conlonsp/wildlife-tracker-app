import React, { useContext } from "react";
import NavBar from "./NavBar";
import { UserContext } from "../Context";

function Header() {
  const { user, setUser } = useContext(UserContext)

  function handleLogout() {
    fetch('/logout', { method: "DELETE" }).then(r => {
      if(r.ok) {
        setUser(null)
      }
    })
  }
  
  return (
    <div>
      <h1>This is the Header</h1>
      <button onClick={handleLogout}>{user ? "Logout" : "Login"}</button>
      <NavBar />
    </div>
  )
}

export default Header