import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function LoginSignup({ setUser }) {
  const [toLogin, setToLogin] = useState(false)

  return (
    <div>
      {toLogin ?
        <LoginForm setToLogin={setToLogin} setUser={setUser} />
      :
        <SignupForm setToLogin={setToLogin} setUser={setUser} />
      }
    </div>
  )
}

export default LoginSignup