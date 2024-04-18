import React, { useEffect, useRef } from 'react';
import EcoSystemStyle from './EcoSystem.style';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const EcoSystem = () => {
  const cloud3Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const globeRef = useRef(null);

  const handleScroll = () => {
    const y = window.scrollY;

    // Adjustments for cloud3
    const xCloud3 = cloud3Ref.current.getBoundingClientRect().top;
    let animationValueCloud3 = (y - xCloud3) / 15;

    // Adjustments for cloud2
    const xCloud2 = cloud2Ref.current.getBoundingClientRect().top;
    let animationValueCloud2 = (y - xCloud2) / 15;


    // Reverse the direction of both clouds
    animationValueCloud3 = -animationValueCloud3; 2;

    // Adjustments for globe
    const xGlobe = globeRef.current.getBoundingClientRect().top;
    let animationValueGlobe = (y - xGlobe) / 9;

    cloud3Ref.current.style.transform = `translateX(${animationValueCloud3}px)`;
    cloud2Ref.current.style.transform = `translateX(${animationValueCloud2}px)`;
    globeRef.current.style.transform = `rotate(${animationValueGlobe}deg)`;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <EcoSystemStyle className="ecosystem-section">
      <div className="container">
        <SectionTitle
          title="Community-focused Tokenomics"
          subtitle="TOKENOMICS"
          alignment="center"
          titleMaxW="669px"
          titleMargin="auto"
        />
        <p>
          The allocation of Merlin Tokens by Project Merlin is designed to ensure fair distribution and
          encourage active participation within the community. With a fixed maximum supply and a tendency to
          decrease, it adopts a deflationary structure secured through buyback and burn strategies. Maximum
          52.30% of the total supply can be in circulation and this will decrease day by day, aiming for
          appreciation in value with each passing day.
        </p>
        <a className="defi-launchapp-btn home-banner-btn btn-hov-effect dark">
          <span className="btn-inner">
            <span className="btn-normal-text">Whitepaper</span>
            <span className="btn-hover-text">Whitepaper</span>
          </span>
          <img src="../assets/images/crypto-token/arrow-right-white.svg" alt="icon" />
          <span className="round-shape" />
        </a>
        <div className="ecosystem-text">
          <ul>
            <li>
              MRLN <br />
              Ticker
            </li>
            <li>
              MULTICHAIN<br />
              TOKEN TYPE
            </li>
            <li>
              Liquidity pools<br />
              management
            </li>
            <li>
              Instant token
              <br />
              swaps
            </li>
          </ul>
        </div>
        <div className="ecosystem-content">
          <img src="../assets/images/logo/fevicon.svg" alt="img" className="logo-icon" />
          <div className="eco-line">
            <img src="../assets/images/defi/eco-lines.svg" alt="img" className="eco-line-pc" />
            <img src="../assets/images/defi/eco_line.png" alt="img" className="eco-line-mobile" />
          </div>
          <div className="globe-img">
            <img src="../assets/images/defi/globe.png" alt="img" className="globe" ref={globeRef} />
            <img src="../assets/images/defi/cloud1.svg" alt="img" className="cloud1" />
            <img src="../assets/images/defi/cloud2.svg" alt="img" className="cloud2" ref={cloud2Ref} />
            <img src="../assets/images/defi/cloud3.svg" alt="img" className="cloud3" ref={cloud3Ref} />
            <img src="../assets/images/defi/cloud4.svg" alt="img" className="cloud4" />
          </div>
        </div>
      </div>
    </EcoSystemStyle>
  );
};

export default EcoSystem;
