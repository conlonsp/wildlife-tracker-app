import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function LoginSignup() {
  const [toLogin, setToLogin] = useState(false)

  return (
    <div>
      {toLogin ?
        <LoginForm setToLogin={setToLogin} />
      :
        <SignupForm setToLogin={setToLogin} />
      }
    </div>
  )
}

export default LoginSignup