import React from "react";
import { useParams } from "react-router-dom";

function Organization({ organizations }) {
  
  // const org = organizations[id]
  // console.log(org)

  const params = useParams()
  console.log(organizations[params.id].name)


  return (
    <h1>{organizations[params.id].name}</h1>
  )
}

export default Organization