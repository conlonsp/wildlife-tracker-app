import React, { useState } from "react";

function SignupForm({ setToLogin, setUser }) {
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

  function handleSubmit(e) {
    e.preventDefault()
    fetch('/signup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: newUser.username,
        password: newUser.password,
        password_confirmation: newUser.passwordConfirmation,
        avatar_url: newUser.avatarUrl,
        bio: newUser.bio
      }),
    }).then(r => {
      if (r.ok) {
        r.json().then(user => {
          setUser(user)
          setNewUser({
            username: '',
            password: '',
            passwordConfirmation: '',
            avatarUrl: '',
            bio: ''
          })
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
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