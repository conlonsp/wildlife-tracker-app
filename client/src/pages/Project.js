import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Project() {
  const [project, setProject] = useState({})

  const params = useParams()

  console.log(params)

  useEffect(() => {
    fetch(`/projects/${params.id}`)
    .then(r => r.json())
    .then(proj => setProject(proj))
  }, [])

  return (
    <div>
      <h1>This is the Project Page</h1>
      <p>{project.name}</p>
    </div>
  )
}

export default Project