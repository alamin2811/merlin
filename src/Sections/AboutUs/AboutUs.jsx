import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AboutBanner from './AboutBanner/AboutBanner'
import AboutVideo from './AboutVideo/AboutVideo';
import MissionVision from './MissionVission/MissionVission';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial'
import Team from './Team/Team'

const AboutUs = () => {
  return (
    <div style={{overflowX: 'hidden'}}>
        <Header/>
        <AboutBanner/>
        <AboutVideo/>
        <MissionVision/>
        <AboutTestimonial/>
        <Team/>
        
        <Footer/>
    </div>
  )
}

export default AboutUs