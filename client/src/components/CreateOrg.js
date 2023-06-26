import React from "react";

function CreateOrg({ setRendCreate }) {

  return (
    <div>
      <h1>Create an Organization here!</h1>
      <button onClick={() => setRendCreate(false)}>Close</button>
    </div>
  )
}

export default CreateOrg