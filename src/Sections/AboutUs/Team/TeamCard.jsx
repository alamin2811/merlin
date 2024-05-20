import React from 'react'

const TeamCard = ({teamMemberImg, cardSize, teamMebername, degnation}) => {
  return (
    <div className={`team-card ${cardSize}`}>
        <div className="card-content">
            <div className="team-member-img">
                <img src={teamMemberImg} alt="img" />
            </div>
            <h5>{teamMebername}</h5>
            <h6>{degnation}</h6>
        </div>
    </div>
  )
}

export default TeamCard