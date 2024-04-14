import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import GetUpdatesStyle from './GetUpdates.style';


const GetUpdates = () => {
  useEffect(() => {
    const handleScroll = () => {
        // Cloud3 animation
        const cloud3 = $(".cloud3");
        if (cloud3.length) {
            const y = window.scrollY;
            let x = cloud3.offset().top;
            x = x - 400;

            let animationValue = (-1 * (y - x)) / 9;
            const animationStop = 100;

            if (animationValue > animationStop) {
                animationValue = animationStop;
            }

            cloud3.css("transform", `translateX(${animationValue}px)`);
        }

        // Cloud2 animation
        const cloud2 = $(".cloud2");
        if (cloud2.length) {
            const y = window.scrollY;
            let x = cloud2.offset().top;
            x = x - 400;

            let animationValue = (y - x) / 9;
            const animationStop = 100;

            if (animationValue > animationStop) {
                animationValue = animationStop;
            }

            cloud2.css("transform", `translateX(${animationValue}px)`);
        }

        // Globe animation
        const globe = $(".globe");
        if (globe.length) {
            const y = window.scrollY;
            let x = globe.offset().top;
            x = x - 400;

            let animationValue = (y - x) / 9;
            const animationStop = 100;

            if (animationValue > animationStop) {
                animationValue = animationStop;
            }

            globe.css("transform", `rotate(${animationValue}deg)`);
        }
    };
    
    $(window).on("scroll", handleScroll);
    
    return () => {
        $(window).off("scroll", handleScroll);
    };
}, []);
  return (
        <GetUpdatesStyle className="get-updates-section">
          <div className="container">
            <div className="get-updates-top">
              <img src="../assets/images/defi/dotted_line.svg" alt="img" className="dotted-line" />
              <SectionTitle
                title="Stay connected Get Updates"
                alignment="center"
                titleMaxW="520px"
                titleMargin="auto"
                parentClass="defi"
              />
            </div>
            <form className="get-updates-form">
              <input type="text" placeholder="Email address" />
              <button type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </GetUpdatesStyle>
  );
};

export default GetUpdates;
