import React, { useContext } from 'react'
import { UserContext } from '../Context'

function Dashboard() {
  const { user, setUser } = useContext(UserContext)

  return (
    <div>
      {user ?
        <div>
          <h1>Dashboard</h1>
          <p>Welcome, {user.username}!</p>
        </div>
      :
        <div>
          <h1>Dashboard</h1>
          <p>Please log in to access app features!</p>
        </div>
      }
      
    </div>
  )
}

export default Dashboard

