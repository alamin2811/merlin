import React from 'react'
import AboutTestimonialStyle from './AboutTestimonial.style'

const AboutTestimonial = () => {
  return (
    <AboutTestimonialStyle className='about-testimonial-section'>
        <div className="container">
            <div className="about-testimonial-card">
                <div className="about-testimonial-content">
                    <div className="about-testimonial-img">
                        <img src="../assets/images/img/ceo-img.png" alt="img" />
                    </div>
                    <div className="about-testimonial-text">
                        <p>At Project Merlin, we are not just building a platform; we are nurturing a movement where every voice can truly make a difference. With each of your contributions, we unlock the potential to transform the future together. You are in the right place to be a part of the global blockchain revolution.</p>
                        <div className="name">
                            <div className="icon">
                                <img src="../assets/images/icons/quot.svg" alt="icon" />
                            </div>
                            <div className="text">
                                <h5>HAKAN BEKTAŞ</h5>
                                <h6>CEO - Co-founder</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AboutTestimonialStyle>
  )
}

export default AboutTestimonial