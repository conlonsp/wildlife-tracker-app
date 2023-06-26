import React, { useState } from "react";

function CreateOrg({ setRendCreate, organizations, setOrganizations }) {
  const [newOrg, setNewOrg] = useState({
    name: '',
    location: '',
    mission: '',
  })
  const [errors, setErrors] = useState([])

  function handleChange(e) {
    setOrganization({
      ...newOrg,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Create an Organization here!</h1>
      <form>
        <input
          type='text'
          name='name'
          placeholder="Organization Name"
          value={organization.name}
          onChange={handleChange}
        />
        <input
          type='text'
          name='location'
          placeholder="Based out of..."
          value={organization.location}
          onChange={handleChange}
        />
        <textarea
          type='text'
          name='mission'
          placeholder='Our mission is...'
          value={organization.mission}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <button onClick={() => setRendCreate(false)}>Close</button>
    </div>
  )
}

export default CreateOrg