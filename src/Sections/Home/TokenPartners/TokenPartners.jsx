import React, { useEffect, useRef } from 'react';
import TokenPartnersStyle from './TokenPartners.style';
import { partnerData } from 'public/assets/data/CryptoTokenData/TokenPartnersData';

const TokenPartners = () => {
  useEffect(() => {
    const handleMouseEnter = (event) => {
        const item = event.currentTarget;
        const roundItem = item.querySelector(".round");
        
        item.classList.add("animate");
        
        let buttonX = event.offsetX;
        let buttonY = event.offsetY;
        
        if (buttonY < 105) {
            roundItem.style.top = 0 + "px";
        } else if (buttonY > 30) {
            roundItem.style.top = 210 + "px";
        }
        
        roundItem.style.left = buttonX + "px";
        roundItem.style.width = "1px";
        roundItem.style.height = "1px";
    };
    
    const handleMouseLeave = (event) => {
        const item = event.currentTarget;
        const roundItem = item.querySelector(".round");
        
        item.classList.remove("animate");
        
        let buttonX = event.offsetX;
        let buttonY = event.offsetY;
        
        if (buttonY < 105) {
            roundItem.style.top = 0 + "px";
        } else if (buttonY > 30) {
            roundItem.style.top = 210 + "px";
        }
        
        roundItem.style.left = buttonX + "px";
    };
    
    const partnersLogo = document.querySelectorAll(".partners-logo");
    
    partnersLogo.forEach((item) => {
        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
    });
    
    return () => {
        partnersLogo.forEach((item) => {
            item.removeEventListener("mouseenter", handleMouseEnter);
            item.removeEventListener("mouseleave", handleMouseLeave);
        });
    };
}, []);
    return (
    <TokenPartnersStyle className="crypto-token-partners">
      <div className="container">
        <h2 className="partners-title" data-splitting="">
          Meet the Partners and <br />
          collaborators
        </h2>
        <div className="green-shape">
          <img src='../assets/images/crypto-token/green-shadow.png' alt="img" />
        </div>
        <div className="partners-list">
          <ul>
            {partnerData.map((partner) => {
              const logoRef = useRef(null);
              return (
                <li key={partner.id}>
                  <div
                    className="partners-logo"
                  >
                    <img src={partner.logoSrc} alt="logo" />
                    <div className="btn-outline">
                      <img src='../assets/images/crypto-token/round-circle.png' alt="img" />
                    </div>
                    <span className="round" />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <a className="become-investor-btn home-banner-btn btn-hov-effect">
            <span className="btn-inner">
              <span className="btn-normal-text">Become an Investor</span>
              <span className="btn-hover-text">Become an Investor</span>
            </span>
            <img src='../assets/images/crypto-token/arrow-right-tell.svg' alt="icon" />
            <span className="round-shape" />
          </a>
        </div>
      </div>
    </TokenPartnersStyle>
  );
};

export default TokenPartners;
