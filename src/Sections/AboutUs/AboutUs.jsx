import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FooterGlobe from '../Footer/FooterGlobe'
import AboutBanner from './AboutBanner/AboutBanner'
import AboutVideo from './AboutVideo/AboutVideo';
import MissionVision from './MissionVission/MissionVission';
import AboutTestimonial from './AboutTestimonial/AboutTestimonial'

const AboutUs = () => {
  return (
    <div style={{overflowX: 'hidden'}}>
        <Header/>
        <AboutBanner/>
        <AboutVideo/>
        <MissionVision/>
        <AboutTestimonial/>
        
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br />
        
        <FooterGlobe/>
        <Footer/>
    </div>
  )
}

export default AboutUs