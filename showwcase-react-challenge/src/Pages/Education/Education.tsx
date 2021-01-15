import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import API from "../../utils/API";

interface user {
  userName: string
}

const Education: React.FC = () => {

  const [schools, setSchools] = useState([]);

  const userName: string = useSelector( (state: user): string => { return state.userName});

  useEffect(() => {
    console.log(userName);
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