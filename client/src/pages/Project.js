import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Project() {

  const params = useParams()

  return (
    <div>
      <h1>This is the Project Page</h1>
    </div>
  )
}

export default Project