import React from "react";

function SignupForm({ setToLogin }) {
  return (
    <div>
      <h1>SignupForm</h1>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Username'
          // value={}
        />
        <input
          type='text'
          name='password'
          placeholder='Password'
          // value={}
        />
        <input
          type='text'
          name='password_confirmation'
          placeholder="Password Confirmation"
          // value={}
        />
        <input
          type='text'
          name='avatar_url'
          placeholder="Avatar URL"
          // value={}
        />
        <input
          type='text'
          name='bio'
          placeholder="Bio"
          // value={}
        />
        <button>Signup</button>
      </form>
      <button onClick={()=>setToLogin(true)}>Login</button>
    </div>
  )
}

export default SignupForm