import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import BannerVideo from './BannerVideo/BannerVideo'
import AboutMerlin from './AboutMerlin/AboutMerlin'
import KeyPoints from './KeyPoints/KeyPoints'
import TokenTag from './TokenTag/TokenTag'
import TokenPartners from './TokenPartners/TokenPartners'
import EcoSystem from './EcoSystem/EcoSystem'
import GetUpdates from './GetUpdates/GetUpdates'
import TokenSocial from './TokenSocial/TokenSocial'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <BannerVideo/>
        <AboutMerlin/>
        <KeyPoints/>
        <TokenTag/>
        <TokenPartners/>
        <EcoSystem/>
        <GetUpdates/>
        <TokenSocial/>
        <Footer/>
    </>
  )
}

export default Home