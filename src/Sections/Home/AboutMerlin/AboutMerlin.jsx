import React from 'react'
import AboutMerlinStyle from './AboutMerlin.style'
import SectionTitle from 'src/Components/SectionTitle/SectionTitle'

const AboutMerlin = () => {
  return (
    <AboutMerlinStyle className="about-marlin-section">
        <div className="container">
            <div className="about-marlin-content">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-marlin-text">
                            <SectionTitle title="About Project MErlin" parentClass="crypto"/>
                            <p>Project Merlin is a next-generation DAO with a mission to benefit individuals within the community. We have redesigned the DAO governance mechanism and coined it as DAO v2. Through this unique governance system of Project Merlin, community members not only achieve their own dreams but also earn rewards by assisting other community members in realizing their aspirations.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-marlin-img">
                            <img src="./assets/images/crypto-token/merlin.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AboutMerlinStyle>
  )
}

export default AboutMerlin