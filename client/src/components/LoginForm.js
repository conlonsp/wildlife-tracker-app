import React, { useContext, useState } from "react";
import { UserContext } from "../Context";

function LoginForm({ setToLogin }) {
  const { setUser } = useContext(UserContext)

  return (
    <div>
      <h1>LoginForm</h1>
      <form>
        <input
          type='text'
          name='username'
          placeholder="Username"
        />
        <input
          type='password'
          name='password'
          placeholder="Password"
        />
        <button>Login</button>
      </form>
      <button onClick={()=>setToLogin(false)}>Signup</button>
    </div>
  )
}

export default LoginForm