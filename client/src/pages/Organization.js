import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Organization({ organizations }) {

  const params = useParams()

  const [organization, setOrganization] = useState({})

  useEffect(() => {
    fetch(`/organizations/${params.id}`)
    .then(r => r.json())
    .then(org => setOrganization(org))
  }, [])
  
  return (
    <div>
      <h1>{organization.name}</h1>
      <h4>Projects</h4>
      {organization.projects.map(proj => {
        return (
          <li key={proj.id}>
            <Link to={`/projects/${proj.id}`}>{proj.name}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Organization