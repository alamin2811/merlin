import React from 'react'
import HeaderStyleWrapper from './Header.style'
import MobileMenu from './MobileMenu';

const Header = () => {
    return (
        <>
            <HeaderStyleWrapper className="header-section v7 crypto-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container header-navbar-container">
                                    <a className="navbar-brand header-logo" href="index.html">
                                        <img src="../assets/images/logo/logo.svg" alt="header-logo" />
                                    </a>
                                    <div className="collapse navbar-collapse header-navbar-content" id="navbarSupportedContent" >
                                        <ul className="navbar-nav main-menu">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    Token
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    Docs
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    About
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    FAQ
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    Articles
                                                </a>
                                            </li>
                                        </ul>
                                        <ul className="header-extra">
                                            <li>
                                                <a href="#" className="bg-white-btn btn-hov-effect dark">
                                                    <span className="btn-inner">
                                                        <span className="btn-normal-text">Launch App</span>
                                                        <span className="btn-hover-text">Launch App</span>
                                                    </span>
                                                    <span className="round-shape" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <MobileMenu/>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </HeaderStyleWrapper>
        </>
    )
}

export default Header