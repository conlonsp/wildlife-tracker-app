import React, { useState } from "react";

function CreateOrg({ setRendCreate }) {
  const [organization, setOrganization] = useState({
    name: '',
    location: '',
    mission: '',
  })

  function handleChange(e) {
    setOrganization({
      ...organization,
      [e.target.name]: e.target.value
    })

  }
  

  return (
    <div>
      <h1>Create an Organization here!</h1>
      <form>
        <input
          name='name'
          placeholder="Organization Name"
        />
        <input
          name='location'
          placeholder="Based out of..."
        />
        <textarea
          name='mission'
          placeholder='Our mission is...'
        />
        <button>Submit</button>
      </form>
      <button onClick={() => setRendCreate(false)}>Close</button>
    </div>
  )
}

export default CreateOrg