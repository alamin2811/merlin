import React, { useEffect } from 'react';
import $ from 'jquery';
import FooterStyle from './Footer.style'

const Footer = () => {
    useEffect(() => {
        const handleScroll = () => {
            const footerText = $(".token-footer-bottom-text .text .top");
            
            if (footerText.length) {
                const cryptoBannerImg = $(".token-footer-bottom-text .text .top");
                const y = window.scrollY;
                let x = cryptoBannerImg.offset().top;
                x = x - 800;

                let animationValue = 1;
                animationValue = (y - x) / 2;

                const animationStop = 0;

                if (animationValue < 0) {
                    animationValue > 0;
                }

                if (animationValue > animationStop) {
                    animationValue = animationStop;
                }

                cryptoBannerImg.css("top", `${animationValue}px`);
            }
        };
        
        $(window).on("scroll", handleScroll);
        
        return () => {
            $(window).off("scroll", handleScroll);
        };
    }, []);
    return (
        <FooterStyle className='footer-section'>
            <div className="footer-bg-img">
                <img src="../assets/images/crypto-token/bg_footer.png" alt="img" />
            </div>
            <div className="container">
                <h5>Say hello to: <a href="mailto:info@projectmerlin.com">info@projectmerlin.com</a></h5>
                <div className="footer-copyright-section">
                    <h6>Copyright © 2024 Project <a href="#">Merlin</a>, All rights reserved.</h6>
                    <ul>
                        <li><a href="#">Terms and conditions</a></li>
                        <li><a href="#">Cookies</a></li>
                        <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>
                <div className="token-footer-bottom-text">
                    <div className="text">
                        <span>Dec</span>
                        <span className="top">e</span>
                        <span>n</span>
                        <span className="top">t</span>
                        <span>ra</span>
                        <span className="top">l</span>
                        <span>ize D</span>
                        <span className="top">r</span>
                        <span>ea</span>
                        <span className="top">m</span>
                        <span>s</span>
                    </div>
                </div>
                <div className="footer-shape">
                    <img
                        src="../assets/images/crypto-token/footer-shape.png"
                        alt="img"
                    />
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer