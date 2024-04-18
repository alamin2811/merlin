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
            <div className="container custom-container">
                <div className="footer-content">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-4">
                            <div className="footer-right">
                                <h4>Stay connected & Get Updates</h4>
                                <p>Sign up with your email address to receive news and updates</p>
                                <form>
                                    <input type="email" placeholder="Email address" />
                                    <button className="home-banner-btn btn-hov-effect">
                                        <span className="btn-inner">
                                            <span className="btn-normal-text">Subscribe</span>
                                            <span className="btn-hover-text">Subscribe</span>
                                        </span>
                                    </button>
                                </form>
                                <h5>Mail us: <a href="mailto:info@projectmerlin.io">info@projectmerlin.io</a></h5>
                                <ul>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#tokenomics">Token</a></li>
                                    <li><a href="https://docs.projectmerlin.io/projectmerlin">Docs</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="#faq">FAQ</a></li>
                                    <li><a href="/articles">Articles</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-center">
                                <a href="#" className='join-discord-btn home-banner-btn btn-hov-effect'>
                                    <span className="btn-inner">
                                        <span className="btn-normal-text"><img src="./assets/images/icons/discord.svg" alt="icon" /> JOIN DISCORD</span>
                                        <span className="btn-hover-text"><img src="./assets/images/icons/discord.svg" alt="icon" /> JOIN DISCORD</span>
                                    </span>
                                </a>
                                <a href="#" className="back-to-top">
                                    Back to top <img src="../assets/images/icons/back-top-icon.svg" alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-left">
                                <h3>Project Merlin</h3>
                                <p>Project Merlin is a next-generation crowdfunding DAO ecosystem. Our community supports the production of values that benefit the ecosystem, while also earning rewards through a unique vote2earn mechanism.</p>
                                <ul>
                                    <li><a href="#"><img src="./assets/images/icons/telegram.svg" alt="icon" /></a></li>
                                    <li><a href="#"><img src="./assets/images/icons/in.svg" alt="icon" /></a></li>
                                    <li><a href="#"><img src="./assets/images/icons/discord.svg" alt="icon" /></a></li>
                                    <li><a href="#"><img src="./assets/images/icons/x.svg" alt="icon" /></a></li>
                                </ul>
                                <ol>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Cookies Policy</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FooterStyle>
    )
}

export default Footer