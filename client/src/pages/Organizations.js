import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context";

import CreateOrg from "../components/CreateOrg";

function Organizations({ organizations, setOrganizations }) {
  const [rendCreate, setRendCreate] = useState(false)

  const { user } = useContext(UserContext)

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
          {user ? <button onClick={() => setRendCreate(true)}>Create</button> : null}
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