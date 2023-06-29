import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProj({ orgId }) {
  
  const [newProj, setNewProj] = useState({
    name: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
  })

  const navigate = useNavigate()

  function handleChange(e) {
    setNewProj({
      ...newProj,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1>Project Create Form</h1>
      <form>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          placeholder="i.e. Earth Savers"
          value={newProj.name}
          onChange={handleChange}
        />
        <label>Location: </label>
        <input
          type='text'
          name='location'
          placeholder="i.e. New York City, New York, USA"
          value={newProj.location}
          onChange={handleChange}
        />
        <label>Start Date: </label>
        <input
          type='text'
          name='start_date'
          placeholder='i.e. YYYY-MM-DD'
          value={newProj.startDate}
          onChange={handleChange}
        />
        <label>End Date: </label>
        <input
          type='text'
          name='end_date'
          placeholder='i.e. YYYY-MM-DD'
          value={newProj.endDate}
          onChange={handleChange}
        />
        <label>Description: </label>
        <textarea
          type='text'
          name='description'
          placeholder='between 50 - 250 characters'
          value={newProj.description}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => navigate(`/organizations/${orgId}`)}>Back</button>
    </div>
  )
}

export default CreateProj