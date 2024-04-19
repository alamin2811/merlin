import React, { useState, useEffect } from 'react';
import BannerStyle from './Banner.style';
import BannerBgAnimetion from './BannerBgAnimetion';


const Banner = () => {
    const [transactions, setTransactions] = useState(0);
    const [marketCap, setMarketCap] = useState(0);
    const [activeAccounts, setActiveAccounts] = useState(0);
    const [stakedPercentage, setStakedPercentage] = useState(0);

    useEffect(() => {
        const finalTransactions = 255695693;
        const finalMarketCap = 5.03;
        const finalActiveAccounts = 24;
        const finalStakedPercentage = 49;

        const transactionInterval = setInterval(() => {
            if (transactions < finalTransactions) {
                setTransactions(transactions + Math.ceil(finalTransactions / 2000));
            }
        }, 0.001); // Update every 10 milliseconds

        const marketCapInterval = setInterval(() => {
            if (marketCap < finalMarketCap) {
                setMarketCap(marketCap + 0.01);
            }
        }, 0.01); // Update every 10 milliseconds

        const activeAccountsInterval = setInterval(() => {
            if (activeAccounts < finalActiveAccounts) {
                setActiveAccounts(activeAccounts + Math.ceil(finalActiveAccounts / 1000));
            }
        }, 3); // Update every 10 milliseconds

        const stakedPercentageInterval = setInterval(() => {
            if (stakedPercentage < finalStakedPercentage) {
                setStakedPercentage(stakedPercentage + 1);
            }
        }, 3); // Update every 10 milliseconds

        return () => {
            clearInterval(transactionInterval);
            clearInterval(marketCapInterval);
            clearInterval(activeAccountsInterval);
            clearInterval(stakedPercentageInterval);
        };
    }, [transactions, marketCap, activeAccounts, stakedPercentage]);

    return (
        <BannerStyle className="home-banner" id="home">
            <BannerBgAnimetion/>
            <div className="home-banner-shape">
                <div className="ractangle" />
                <div className="ractangle" />
                <div className="ractangle" />
                <div className="ractangle" />
                <div className="ractangle" />
                <div className="ractangle" />
                <div className="ractangle" />
                <div className="ractangle" />
            </div>
            <div className="home-banner-inner">
                <div className="overlay">
                    <div className="container custom-container">
                        <div className="home-banner-text">
                            <h1 className="quantico" data-splitting="">
                                Make Dreams into the Future
                            </h1>
                            <p>
                                Project Merlin provides community members with the opportunity to actualize their dreams. As integral parts of the community, members share their dreams and receive support. At each step of the process leading to the realization of a community member's dream, each individual community member is rewarded separately.
                            </p>
                            <a href="#" className="home-banner-btn btn-hov-effect dark">
                                <span className="btn-inner">
                                    <span className="btn-normal-text">Learn More</span>
                                    <span className="btn-hover-text">Learn More</span>
                                </span>
                            </a>
                        </div>
                        <div className="banner-img">
                            <img src="./assets/images/crypto-token/banner-img.webp" alt="img" />
                            <img src="./assets/images/crypto-token/coin.gif" alt="img" className="coin-img" />

                        </div>
                        <div className="masd-grad">
                            <img src="./assets/images/crypto-token/mesh-grad.png" alt="img" />
                        </div>


                        <div className="home-banner-card-section">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="row">
                                        <div className="col-sm-7">
                                            <div className="banner-card">
                                                <div className="banner-card-live">
                                                    <p>Transactions</p>
                                                </div>
                                                <h2 className="quantico number-diy">
                                                    <span className="data data-1 animated">{transactions.toLocaleString()}</span>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-sm-5">
                                            <div className="banner-card">
                                                <div className="banner-card-live">
                                                    <p>Market Cap</p>
                                                </div>
                                                <h2 className="quantico number-diy">
                                                    <span className="data data-2 animated">{marketCap.toFixed(2)}</span> M+
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-6">
                                            <div className="banner-card2">
                                                <div className="banner-card-live">
                                                    <p>Active account</p>
                                                </div>
                                                <h2 className="quantico number-diy">
                                                    <span className="data data-3 animated">{activeAccounts}</span> M+
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6">
                                            <div className="banner-card2 mb-0">
                                                <div className="banner-card-live">
                                                    <p>% Staked</p>
                                                </div>
                                                <h2 className="quantico number-diy">
                                                    <span className="data data-4 animated">{stakedPercentage}</span>%
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bottom-overlay" />
            </div>
        </BannerStyle>
    )
}

export default Banner