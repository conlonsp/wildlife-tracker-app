import React from "react";
import { useParams, Link } from "react-router-dom";

function Organization({ organizations }) {

  const params = useParams()
  
  const org = organizations[params.id]
  
  console.log(organizations[params.id])

  return (
    <div>
      <h1>{org.name}</h1>
      <h4>Projects</h4>
      {org.projects.map(proj => {
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