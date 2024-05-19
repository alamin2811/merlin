import React from 'react'
import MissionVisionStyle from './MissionVission.style'

const MissionVision = () => {
    return (
        <MissionVisionStyle className='mission-vision-section'>
            <div className="mission-vision-content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="mission-vision-card">
                            <div className="shape mission-shape"><img src="../assets/images/img/mission-shape.png" alt="shape" /></div>
                            <h3>MISSION</h3>
                            <p>Project Merlin aims to provide an innovative and sustainable platform within the DAO and crowdfunding ecosystems, emphasizing democratic participation, transparency, and fairness. By leveraging blockchain technology and NFTs, our platform ensures that every user can directly participate in project selection and funding processes, earning rewards from their involvement. Our goal is to create a more accessible and equitable environment in decentralized finance and governance.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mission-vision-card">
                            <div className="shape vision-shape"><img src="../assets/images/img/vision-shape.png" alt="shape" /></div>
                            <h3>Vision</h3>
                            <p>At Project Merlin, our vision is to establish a global, inclusive, and interactive crowdfunding and DAO platform that enables the realization of innovative projects and ideas. Powered by blockchain technology, we aim to construct an ecosystem where every individual can freely express their ideas, every project is evaluated fairly, and every participant receives equitable rewards for their contributions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </MissionVisionStyle>
    )
}

export default MissionVision