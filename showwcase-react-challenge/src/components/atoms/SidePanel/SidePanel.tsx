import React from "react";
import styled from "styled-components";

interface SidePanelProps {
  education: any;
  currentEdu: any;
  setCurrentEdu: any;
  educationArray: any;
}

const SidePanel: React.FC<SidePanelProps> = ({ education, currentEdu, setCurrentEdu, educationArray }: SidePanelProps) => {

  const SidePanel = styled.button`
  width: 100%;
  text-align: left;
  background-color: white;
  margin-bottom: 2px;
  border-radius: 0px;

  ${currentEdu.id === education.id ? `
  background-color: lightgreen;
  border: 1px solid green;
  ` : null}
  `

  const handlePanelClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setCurrentEdu(educationArray[education.id]);
  }

  return (
    <>

      <SidePanel className="btn" onClick={handlePanelClick}>
        <h6 className="sidepanel-text">{education.name}</h6>
        <p className="sidepanel-text text-muted">{education.degree}, {education.field}</p>
        <p className="sidepanel-text text-muted">{education.start} - {education.end}</p>
      </SidePanel>

    </>
  )
}

export default SidePanel;