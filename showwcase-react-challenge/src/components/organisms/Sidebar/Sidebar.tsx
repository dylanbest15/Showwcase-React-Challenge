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
  width: auto;

  @media (max-width: 480px) {
    width: auto;
    height: auto;
    margin-bottom: 20px;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
  }`

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

          <h6 className="card-subtitle mb-2">Select to view more details</h6>

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