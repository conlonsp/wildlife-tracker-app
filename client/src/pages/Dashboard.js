import React, { useContext } from 'react'
import { UserContext } from '../Context'

function Dashboard() {
  const { user, setUser } = useContext(UserContext)

  return (
    <h1>Dashboard</h1>
  )
}

export default Dashboard

