import React from 'react';

// Import your images
import KeyPointsStyleWrapper from './KeyPoints.style';
import { keyPointsData } from 'public/assets/data/CryptoTokenData/KeypointData';


const KeyPoints = () => {
  return (
    <KeyPointsStyleWrapper className="key-points-section">
      <div className="container custom-container">
        <div className="row">
          {keyPointsData.map((keyPoint, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-5">
              <div className="key-points-card">
                <img src="../assets/images/crypto-token/blur-layer.png" alt="img" className="blur" />
                <img src="../assets/images/crypto-token/ditted_line.png" alt="img" className="doted-line" />
                <a href="#" className="card-tag">
                  {keyPoint.tag}
                </a>
                <h3 className="text-white quantico" data-splitting="">
                  {keyPoint.title}
                </h3>
                <p>{keyPoint.description}</p>
                <a href="#" className="card-link">
                  {keyPoint.linkText} <img src={keyPoint.linkIcon} alt="icon" />
                </a>
                <div className="card-img">
                  <img src={keyPoint.imgSrc} alt="img" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </KeyPointsStyleWrapper>
  );
};

export default KeyPoints;
