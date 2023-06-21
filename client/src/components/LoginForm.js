import React, { useContext, useState } from "react";
import { UserContext } from "../Context";

function LoginForm({ setToLogin }) {
  const { setUser } = useContext(UserContext)

  const [logUser, setLogUser] = useState({
    username: "",
    password: ""
  })
  const [errors, setErrors] = useState([])

  function handleChange(e) {
    setLogUser({
      ...logUser,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: logUser.username,
        password: logUser.password
      })
    }).then(r => {
      if(r.ok) {
        r.json().then(user => {
          setUser(user)
          setLogUser({
            username: "",
            password: ""
          })
        })
      } else {
        r.json().then(err => {
          setErrors(err.errors)
        })
      }
    })
  }

  return (
    <div>
      <h1>LoginForm</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder="Username"
          value={logUser.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder="Password"
          value={logUser.password}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
      {errors.map(err => {
        return (
          <p key={err} style={{color: 'red'}}>{err}</p>
        )
      })}
      <button onClick={()=>setToLogin(false)}>Signup</button>
    </div>
  )
}

export default LoginForm