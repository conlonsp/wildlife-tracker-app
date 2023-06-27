import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateOrg() {

  const params = useParams()
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>Update an Organization!</h1>
      <button onClick={() => navigate(`/organizations/${params.id}`)}>Close</button>
    </div>
  )
}

export default UpdateOrg