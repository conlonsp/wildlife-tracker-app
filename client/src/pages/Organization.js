import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { UserContext } from '../Context'

function Organization({ organization, setOrganization }) {

  const { user } = useContext(UserContext)

  const navigate = useNavigate()
  const params = useParams()

  const [orgProjects, setOrgProjects] = useState([])
  const [errors, setErrors] = useState([])
  // const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetch(`/organizations/${params.id}`)
    .then(r => {
      if(r.ok) {
        r.json().then(org => {
          setOrganization(org)
          setOrgProjects(org.projects)
          // setIsLoading(true)
        })
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }, [])

  // useEffect(() => {
  //   fetch(`/organizations/${params.id}/projects`)
  //   .then(r => r.json())
  //   .then(projects => {
  //     setOrgProjects(projects)
  //     setIsLoading(true)
  //   })
  // }, [])

  // if (!isLoading) return <h1>Loading...</h1>
  
  return (
    <div>
      {user ?
        <div>
          <h1>{organization.name}</h1>
          <h3>{organization.mission}</h3>
          <h3>{organization.location}</h3>
          <h4>Projects</h4>
          {orgProjects.map(proj => {
            return (
              <li key={proj.id}>
                <Link to={`/projects/${proj.id}`}>{proj.name}</Link>
              </li>
            )
          })}
          <button onClick={() => navigate(`/organizations/${params.id}/update`)}>Update</button>
        </div>
      :
        <p>{errors}</p>
      }
    </div>
  )
}

export default Organization