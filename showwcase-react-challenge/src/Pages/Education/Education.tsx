import React, { useState, useEffect } from "react";
import API from "../../utils/API";

const Education: React.FC = () => {

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    API.getSchools("middle")
    .then((schools : any) => {
      console.log(schools.map((schools : any) => schools.name));
    })
  }, [])

  return (
    <>

      <h2>Education</h2>
    
    </>
  )
}

export default Education;