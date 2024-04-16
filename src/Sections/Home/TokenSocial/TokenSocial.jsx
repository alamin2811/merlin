import React from 'react';
import TokenSocialStyle from './TokenSocial.style';
import { socialLinks } from 'public/assets/data/CryptoTokenData/TokenSocial';

const TokenSocial = () => {
  return (
      <TokenSocialStyle className="crypto-token-social">
          <div className="container">
            <div className="crypto-social-list">
              {socialLinks.map((socialLink, index) => (
                <div key={index} className="crypto-social-link">
                  <a href={socialLink.url} target="_blank">
                    <div className="crypto-social-btn">
                      <div className="icon">
                        <img src={socialLink.icon} alt="icon" />
                        <img src={socialLink.icon} alt="icon" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
      </TokenSocialStyle>
  );
};

export default TokenSocial;
