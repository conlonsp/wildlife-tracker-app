import React, { useContext } from "react";
import { UserContext } from "../Context";

function LoginForm({ setToLogin }) {
  return (
    <div>
      <h1>LoginForm</h1>
      <button onClick={()=>setToLogin(false)}>Signup</button>
    </div>
  )
}

export default LoginForm