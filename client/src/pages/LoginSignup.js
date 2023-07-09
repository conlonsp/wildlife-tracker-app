import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function LoginSignup({ setUserOrgs }) {
  const [toLogin, setToLogin] = useState(false)

  return (
    <div>
      {toLogin ?
        <SignupForm setToLogin={setToLogin} setUserOrgs={setUserOrgs} />
      :
        <LoginForm setToLogin={setToLogin} setUserOrgs={setUserOrgs}/>
      }
    </div>
  )
}

export default LoginSignup