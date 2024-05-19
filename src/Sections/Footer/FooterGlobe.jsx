import React, { useEffect, useRef } from 'react';
import FooterGlobeStyle from './FooterGlobe.style';

const FooterGlobe = () => {
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
    <FooterGlobeStyle className="footer-globe-section">
      <div className="container">
        <div className="footer-globe-content">
          <div className="globe-img">
            <img src="../assets/images/defi/globe.png" alt="img" className="globe" ref={globeRef} />
            <img src="../assets/images/defi/cloud1.svg" alt="img" className="cloud1" />
            <img src="../assets/images/defi/cloud2.svg" alt="img" className="cloud2" ref={cloud2Ref} />
            <img src="../assets/images/defi/cloud3.svg" alt="img" className="cloud3" ref={cloud3Ref} />
            <img src="../assets/images/defi/cloud4.svg" alt="img" className="cloud4" />
          </div>
        </div>
      </div>
    </FooterGlobeStyle>
  );
};

export default FooterGlobe;
