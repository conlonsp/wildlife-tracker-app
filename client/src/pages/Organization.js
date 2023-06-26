import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Organization() {

  const params = useParams()

  const [organization, setOrganization] = useState({})
  const [orgProjects, setOrgProjects] = useState([])

  useEffect(() => {
    fetch(`/organizations/${params.id}`)
    .then(r => r.json())
    .then(org => setOrganization(org))
  }, [])

  useEffect(() => {
    fetch(`/organizations/${params.id}/projects`)
    .then(r => r.json())
    .then(projects => setOrgProjects(projects))
  }, [])
  
  return (
    <div>
      <h1>{organization.name}</h1>
      <h4>Projects</h4>
      {orgProjects.map(proj => {
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