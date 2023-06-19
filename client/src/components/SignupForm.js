import React, { useState } from "react";

function SignupForm({ setToLogin }) {
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
    avatarUrl: '',
    bio: ''
  })

  function handleChange(e) {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>SignupForm</h1>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Username'
          value={newUser.username}
          onChange={handleChange}
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          value={newUser.password}
          onChange={handleChange}
        />
        <input
          type='text'
          name='password_confirmation'
          placeholder="Password Confirmation"
          value={newUser.passwordConfirmation}
          onChange={handleChange}
        />
        <input
          type='text'
          name='avatar_url'
          placeholder="Avatar URL"
          value={newUser.avatarUrl}
          onChange={handleChange}
        />
        <input
          type='text'
          name='bio'
          placeholder="Bio"
          value={newUser.bio}
          onChange={handleChange}
        />
        <button>Signup</button>
      </form>
      <button onClick={()=>setToLogin(true)}>Login</button>
    </div>
  )
}

export default SignupForm