import React, { useState } from "react";
import { Link } from "react-router-dom";

import CreateOrg from "../components/CreateOrg";

function Organizations({ organizations, setOrganizations }) {
  const [rendCreate, setRendCreate] = useState(false)

  const renderOrgs = organizations.map(org => (
    <li key={org.id}>
      <Link to={`/organizations/${org.id}`}>{org.name}</Link>
    </li>
  ))

  return (
    <div>
      {!rendCreate ?
        <div>
          <h1>Organization List</h1>
          <ul>{renderOrgs}</ul>
          <button onClick={() => setRendCreate(true)}>Create</button>
        </div>
      :
        <CreateOrg
          setRendCreate={setRendCreate}
          organizations={organizations}
          setOrganizations={setOrganizations}
        />
      }
    </div>
  )
}

export default Organizations


      {/* {organizations.map(org => {
        return (
          <li key={org.id}>
            <h3>{org.name}</h3>
            <h4>{org.mission}</h4>
            <h5>{org.location}</h5>
          </li>
        )
      })} */}