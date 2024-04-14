// BannerVideo.js
import React, { useState, useEffect } from 'react';
import BannerVideoStyle from './BannerVideo.style';

const BannerVideo = () => {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const words = ['dimensions', 'World', 'Realms'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <BannerVideoStyle className="banner-video-section">
      <div className="container">
        <div className="banner-video-card">
          <video loop autoPlay muted>
            <source src="../assets/videos/meta_video.mp4" type="video/mp4" />
          </video>
          <div className="cd-intro m-0">
            <h2 className="cd-headline slide mb-0">
              <span className="wt-700 quantico">Escape to infinite</span>
              <br />
              <span className="cd-words-wrapper dm-sans quantico">
                {words.map((word, index) => (
                  <b
                    key={index}
                    className={index === activeWordIndex ? 'is-visible' : ''}
                  >
                    {word}
                  </b>
                ))}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </BannerVideoStyle>
  );
};

export default BannerVideo;
