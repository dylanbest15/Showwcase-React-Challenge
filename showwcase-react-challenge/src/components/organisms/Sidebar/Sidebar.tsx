import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SidePanel from "../../atoms/SidePanel";

interface SidebarProps {
  educations: any;
  currentEdu: any;
  setCurrentEdu: any;
}

const Sidebar: React.FC<SidebarProps> = ({ educations, currentEdu, setCurrentEdu }: SidebarProps) => {

  const Sidebar = styled.div`
  height: 300px;
  background-color: lightgray;
  overflow-y: auto;
  overflow-y: scroll;
  `

  // sort educations to show most recently added first
  const [eduSorted, setEduSorted] = useState<Object[]>([]);

  // slice to not mutate original array
  useEffect(() => {
    setEduSorted(educations.slice().reverse());
  }, [educations])

  return (
    <>

      <Sidebar className="card">
        <div className="card-body">

          <h5 className="card-title">Education</h5>
          <h6 className="card-subtitle mb-2 text-muted">Select to view more details</h6>

          {eduSorted.map((education: any) =>

            <SidePanel 
              education={education} 
              currentEdu={currentEdu} 
              setCurrentEdu={setCurrentEdu}
              educationArray={educations}>
            </SidePanel>

          )}

        </div>
      </Sidebar>

    </>
  )
}

export default Sidebar;