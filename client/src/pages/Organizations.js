import React, { useState, useEffect } from "react";

function Organizations() {
  const [organizations, setOrganizations] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch('/organizations')
    .then(r => {
      if(r.ok) {
        r.json().then(orgs => setOrganizations(orgs))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }, [])

  console.log(organizations)

  return (
    <div>
      <h1>Organization List</h1>
      {organizations.map(org => {
        return (
          <li key={org.id}>
            <h3>{org.name}</h3>
            {/* <h4>{org.mission}</h4>
            <h5>{org.location}</h5> */}
          </li>
        )
      })}
    </div>
  )
}

export default Organizations