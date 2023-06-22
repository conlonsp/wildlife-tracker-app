import React from "react";

function OrganizationList() {

  useEffect(() => {
    fetch('/organizations')
    .then(r => {
      if(r.ok) {
        r.json().then(orgs => setOrganizations(orgs))
      } else {
        r.json().then(err => setErrors(err.errors))
      }
    })
  }, [])

  return (
    <div>
      <h1>Organization List</h1>
    </div>
  )
}

export default OrganizationList