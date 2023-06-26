import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from '../Context'

function Organization() {

  const { user } = useContext(UserContext)

  const params = useParams()

  const [organization, setOrganization] = useState({})
  const [orgProjects, setOrgProjects] = useState([])
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch(`/organizations/${params.id}`)
    .then(r => {
      if(r.ok) {
        r.json().then(org => setOrganization(org))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }, [])

  useEffect(() => {
    fetch(`/organizations/${params.id}/projects`)
    .then(r => r.json())
    .then(projects => setOrgProjects(projects))
  }, [])
  
  return (
    <div>
      {user ?
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
      :
        <p>{errors}</p>
      }
    </div>
  )
}

export default Organization