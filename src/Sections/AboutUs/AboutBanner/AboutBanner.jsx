import React from 'react'
import AboutBannerStyle from './AboutBannerStyle'

const AboutBanner = () => {
  return (
    <AboutBannerStyle className='app-banner-section'>
        <div className="overlay">
            <div className="container">
                <div className="banner-content">
                    <h6>PROJECT MERLIN</h6>
                    <p>Project Merlin is an innovative platform operating on Ethereum and various other blockchains, enabling users to directly participate in decision-making processes and earn income from these activities.</p>
                    <p><span>Users, as NFT holders, assume special roles, gain a say in projects, have voting rights, and earn Merlin Tokens as a result of their participation.</span></p>
                </div>
            </div>
        </div>
    </AboutBannerStyle>
  )
}

export default AboutBanner