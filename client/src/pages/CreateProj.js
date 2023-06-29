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

  return (
    <div>
      <h1>Project Create Form</h1>
      <form>
        <label>Name: </label>
        <input
          type='text'
          name='name'
          placeholder="i.e. Earth Savers"
        />
        <label>Location: </label>
        <input
          type='text'
          name='location'
          placeholder="i.e. New York City, New York, USA"
        />
        <label>Start Date: </label>
        <input
          type='text'
          name='start_date'
          placeholder='i.e. YYYY-MM-DD'
        />
        <label>End Date: </label>
        <input
          type='text'
          name='end_date'
          placeholder='i.e. YYYY-MM-DD'
        />
        <label>Description: </label>
        <textarea
          type='text'
          name='description'
          placeholder='between 50 - 250 characters'
        />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => navigate(`/organizations/${orgId}`)}>Back</button>
    </div>
  )
}

export default CreateProj