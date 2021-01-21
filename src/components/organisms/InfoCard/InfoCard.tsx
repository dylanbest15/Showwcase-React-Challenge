import React from "react";
import styled from "styled-components";

interface InfoCardProps {
  education: any;
}

const InfoCard: React.FC<InfoCardProps> = ({ education }: InfoCardProps) => {

  const InfoCard = styled.div`
  height: 300px;
  background-color: lightgray;
  width: 620px;
  overflow-y: auto;
  margin: auto;

  @media (max-width: 480px) {
    max-width: 350px;
    margin: auto;
  }

  ${!education ? `
  text-align: center;
  padding-top: 100px;
  width: 450px;
  ` : null}
`

  return (
    <>

        <>

          <InfoCard className="card">
            <div className="card-body">

              <h4 className="card-title">{education.name}</h4>
              <h5 className="card-subtitle mb-2 text-muted">{education.degree} in {education.field}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{education.start} - {education.end}</h6>

              {education.grade ?
                <h6 className="card-subtitle mb-2 text-muted">Grade: {education.grade}</h6>
                : null}

              <p className="card-text">{education.description}</p>

            </div>
          </InfoCard>

        </>

    </>
  )
}

export default InfoCard;