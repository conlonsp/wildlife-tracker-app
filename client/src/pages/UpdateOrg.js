import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UpdateOrg() {

  const params = useParams()
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>Update an Organization!</h1>
      <form>
        <input
          type='text'
          name='name'
          placeholder="Organization Name"
          // value={newOrg.name}
          // onChange={handleChange}
        />
        <input
          type='text'
          name='location'
          placeholder="Based out of..."
          // value={newOrg.location}
          // onChange={handleChange}
        />
        <textarea
          type='text'
          name='mission'
          placeholder='Our mission is...'
          // value={newOrg.mission}
          // onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => navigate(`/organizations/${params.id}`)}>Close</button>
    </div>
  )
}

export default UpdateOrg