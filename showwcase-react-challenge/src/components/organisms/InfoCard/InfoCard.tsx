import React from "react";
import styled from "styled-components";

interface InfoCardProps {
  education: any;
}

const InfoCard: React.FC<InfoCardProps> = ({ education }: InfoCardProps) => {

  const InfoCard = styled.div`
  min-height: 300px;
  background-color: lightgray;
  max-width: 620px;

  ${!education ? `
  text-align: center;
  padding-top: 100px;
  ` : null}
`
  

  return (
    <>

      <InfoCard className="card">
        <div className="card-body">

          {education ?
            <>

              <h5 className="card-title">{education.degree} in {education.field} @ {education.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{education.start} - {education.end}</h6>
              <br />

              <p className="card-text">{education.description}</p>

            </> 
            : <p>No educations added.</p>}



        </div>
      </InfoCard>

    </>
  )
}

export default InfoCard;