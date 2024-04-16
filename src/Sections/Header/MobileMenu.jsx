import React from 'react';


const MobileMenu = () => {
    return (
        <div className='mobile-menu'>
            <button className="btn btn-primary mobile-menu-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                <img src="/assets/images/icons/menu-icon.svg" alt="icon" /> {/* Adjusted path */}
            </button>

            <div className="offcanvas offcanvas-end mobile-menu-content" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <a href='/' id="offcanvasRightLabel"><img src="../assets/images/logo/logo.svg" alt="logo" /> {/* Adjusted path */}</a>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><img src="/assets/images/icons/close.svg" alt="icon" /> {/* Adjusted path */}</button>
                </div>
                <div className="offcanvas-body mobile-menu-body">
                    <ul>
                        <li><a href="/" className='menu-link'>Home</a></li>
                        <li><a href="/" className='menu-link'>Token</a></li>
                        <li><a href="/" className='menu-link'>Docs</a></li>
                        <li><a href="/" className='menu-link'>About</a></li>
                        <li><a href="/" className='menu-link'>FAQ</a></li>
                        <li><a href="/" className='menu-link'>Articles</a></li>
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
            </div>
        </div>
    );
};

export default MobileMenu;
