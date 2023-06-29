import React from "react";
import { useNavigate } from "react-router-dom";

function CreateProj({ orgId }) {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Project Create Form</h1>
      <button onClick={() => navigate(`/organizations/${orgId}`)}>Back</button>
    </div>
  )
}

export default CreateProj