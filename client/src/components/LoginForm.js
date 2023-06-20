import React, { useContext, useState } from "react";
import { UserContext } from "../Context";

function LoginForm({ setToLogin }) {
  const { setUser } = useContext(UserContext)

  const [logUser, setLogUser] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>LoginForm</h1>
      <form>
        <input
          type='text'
          name='username'
          placeholder="Username"
          value={logUser.username}
        />
        <input
          type='password'
          name='password'
          placeholder="Password"
          value={logUser.password}
        />
        <button>Login</button>
      </form>
      <button onClick={()=>setToLogin(false)}>Signup</button>
    </div>
  )
}

export default LoginForm