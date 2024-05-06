import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import BannerVideo from './BannerVideo/BannerVideo'
import AboutMerlin from './AboutMerlin/AboutMerlin'
import KeyPoints from './KeyPoints/KeyPoints'
import TokenTag from './TokenTag/TokenTag'
import TokenPartners from './TokenPartners/TokenPartners'
import Tokenomics from './Tokenomics/Tokenomics'
import Footer from '../Footer/Footer'
import FaqSection from './Faq/Faq'

const Home = () => {
  return (
    <div className='body-container'>
        <Header/>
        <Banner/>
        <BannerVideo/>
        <AboutMerlin/>
        <KeyPoints/>
        <TokenTag/>
        <TokenPartners/>
        <FaqSection/>
        <Tokenomics/>
        <Footer/>
    </div>
  )
}

export default Home