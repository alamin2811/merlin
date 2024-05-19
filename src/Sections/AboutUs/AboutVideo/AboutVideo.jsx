import React from 'react'
import AboutVideoStyle from './AboutVideo.style'

const AboutVideo = () => {
  return (
    <AboutVideoStyle className='about-video-section'>
      <div className="container">
        <div className="about-video-card">
          <video 
            loop 
            autoPlay 
            playsInline 
            muted 
            poster="../assets/images/img/about-video-thambnail.jpg"
          >
            <source src="/path/to/your-video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay">
            <a href="#" className='play-btn'><img src="../assets/images/icons/play.svg" alt="img" /></a>
          </div>
        </div>
      </div>
    </AboutVideoStyle>
  )
}

export default AboutVideo
