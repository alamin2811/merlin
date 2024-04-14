import styled from "styled-components";

const HeaderStyleWrapper = styled.header`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 0;
  

  &.main-header {
    position: absolute;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  &.sticky {
    position: fixed;
    background-color: #ffffff99;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    padding: 10px 0px !important;
    top: 0px;
    animation: headerAnimetion 0.3s linear;
    -webkit-animation: headerAnimetion 0.3s linear;
    .bg-skyblue-btn {
      background: #0095ff;
      color: #ffffff !important;
      position: relative;
      z-index: 0;
      span {
        color: #ffffff;
      }

      &:hover {
        background: #0095ff;
        span {
          color: #ffffff;
        }

        &::before {
          transform: translateX(0%);
        }
      }

      &::before {
        position: absolute;
        z-index: -1;
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50px;
        background: rgba(0, 0, 0, 0.1);
        transform: translateX(-100%);
        transition: 0.3s;
      }
    }
    &.sass-landing {
      .bg-white-btn {
        background: #0555ff !important;
      }
    }
  }
  .logo-dark {
      display: none;
    }

    &.v7 {
    &.sticky {
      background-color: #ffffff;
      box-shadow: 0px 10px 15px #00000014;
    }

    .header-navbar-container {
      gap: 0px;
    }
    .main-menu {
      max-width: 540px;
      margin: auto;
      li a {
        font-family: Quantico;
        font-size: 16px;
        color: #FFFFFF;
        text-transform: uppercase;
      }
    }
    .header-extra {
      li a {
        color: #111111;
        &:hover {
          color: #444444;
        }
      }
    }

    .dropdown-toggle {
      &::after {
        filter: none;
      }
    }

    .submenu {
      background-color: #ffffff;
      box-shadow: 0px 10px 15px #00000014;
    }
  }
 

  &.header-style5 {
    padding-top: 20px;
  }


  .header-navbar-container {
    padding-left: 0;
    padding-right: 0;
    display: flex;
    align-items: center;
    gap: 60px;
  }

  .header-logo {
    padding: 0 !important;
    margin-right: 0;
    & .dark-logo {
      display: none;
    }
    & .white-logo {
      display: block;
    }
  }

  .header-navbar-content {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: space-between;
  }
  
  .navbar {
    padding: 0px;
  }
  

  /*-- menu start --*/
  .nav-expanded nav {
    transform: translateY(0%);
  }

  .nav-expanded .nav-expander {
    img {
      &:nth-child(1) {
        display: none;
      }
      &:nth-child(2) {
        display: block;
      }
    }
  }

  .nav-expander {
    display: none;
    img {
      &:nth-child(1) {
        display: block;
      }
      &:nth-child(2) {
        display: none;
      }
    }
  }

  .right_menu_togle {
    background: #ffffff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    padding: 70px 0 20px 0;
    width: 100%;
    top: 0;
    transform: translateY(-100%);
    z-index: 999;
    transition: all 0.3s ease;
    position: fixed;
    overflow-y: auto;
  }

  .right_menu_togle.dark {
    background: #20252b;
    .nav-menu {
      li {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        a {
          color: #ffffff70 !important;
          &:hover {
            color: #ffffff !important;
          }
        }
        ul {
          li {
            border-bottom: none !important;
          }
        }
      }
    }
    .sign-in-btn span {
      color: #ffffff !important;
    }
  }

  .crypto1-mobile-menu-btn.dark .close {
    filter: brightness(100) !important;
  }

  .mobile-navbar-menu .sub-menu {
    display: none;
    position: relative;
    left: 0;
    width: 100%;
    margin: 0;
    text-align: left;
    margin: 0;
    padding: 0;
    list-style: none;
    padding-top: 10px;
  }

  .mobile-navbar-menu .nav-menu {
    width: 720px;
    margin: 0 auto;
    padding: 0 7px;
    padding: 0;
    list-style: none;

    li a {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      display: block;
      text-transform: capitalize;
      color: #111111;
      line-height: 20px;
      padding: 16px 0;
      width: 100%;
      transition: 0.3s;
      font-weight: 500;
      font-size: 15px;
    }
    li li a {
      font-size: 14px;
      color: #444444;
      line-height: 20px;
      padding: 7px 20px;
    }
    li {
      position: relative;
      &.active {
        a {
          border-bottom: 1px solid transparent;
        }
        .sub-menu {
          background-color: rgba(0, 0, 0, 0.04);
        }
      }
    }
  }

  .mobile-navbar-menu span.submenu-button {
    position: absolute;
    z-index: 99;
    right: 0;
    top: 5px;
    display: block;
    height: 40px;
    width: 40px;
    cursor: pointer;
    width: 100%;
    cursor: pointer;
    top: 0;
    height: 50px;
    &::before,
    &::after {
      position: absolute;
      top: 24px;
      right: 21px;
      width: 20px;
      height: 2px;
      display: block;
      background: #999999;
      z-index: 2;
      content: "";
      right: 2px;
      width: 12px;
      transition: 0.3s;
    }
    &::before {
      width: 2px;
      height: 12px;
      right: 26px;
      top: 19px;
    }
    em {
      display: block;
      position: absolute;
      right: 0;
      border-radius: 4px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .mobile-navbar-menu .submenu-button.submenu-opened {
    &::before {
      background: #0086e5;
      transform: rotate(-90deg);
    }
    &::after {
      display: none;
    }
  }

  .mobile-navbar-menu ul ul li,
  .mobile-navbar-menu li:hover > ul > li {
    height: auto;
  }

  .canvas-menu ul {
    li {
      display: block;
      + li {
        padding-top: 15px;
      }
    }
    li a {
      display: block;
      color: #ffffff;
      font-weight: 600;
      &:hover {
        color: #636363;
      }
    }
  }

  .mobile-navbar-menu {
    .nav-buttons {
      width: 720px;
      margin: 20px auto 0;
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 0 7px;
      list-style: none;
    }
    .sign-in-btn,
    .bg-blue-btn {
      padding: 0 47.5px;
      font-weight: 700;
      height: 50px;
      line-height: 50px;
      display: inline-block;
    }
    .sign-in-btn {
      background: rgba(17, 17, 17, 0.04);
      border-radius: 50px;
      span {
        color: #111111;
      }
      &:hover {
        span {
          color: #fff;
        }
        background: #0095ff;
      }
    }
  }
  .staco-overly-bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease-in;
    -o-transition: all 0.3s ease-in;
    transition: all 0.3s ease-in;
  }
  .nav-expanded {
    .staco-overly-bg {
      opacity: 1;
      visibility: visible;
    }
    .header-section {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
    }
  }
  /*-- menu end --*/

  .menu-toggler {
    border: 0;
    svg {
      font-size: 30px;
      color: #000000;
    }
    &:focus {
      box-shadow: none;
    }
  }

  /*-- main-menu style --*/
  .main-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;

    ul {
      list-style: none;
    }

    li {
      position: relative;
      &:hover {
        .dropdown-toggle {
          &::after {
            transform: rotate(180deg);
          }
        }
        .submenu-box {
          animation: menuAnimetion 0.7s;
          display: block;
          transform: none;
          opacity: 1;
        }
        .submenu {
          width: 250px;
          li {
            a {
              line-height: 333%;
            }
          }
        }
      }
    }

    li a {
      color: #ffffff;
      transition: 0.3s;
      padding: 15px 0px;
      font-weight: 500;
      &:hover,
      &:focus {
        color: #ffffffb2;
      }
    }

    .dropdown-toggle {
      &::after {
        vertical-align: 0;
        border: 0;
        content: url("../images/icons/dropdown-toggle.svg");
        transition: 0.3s;
        filter: brightness(0) invert(1);
        display: none;
      }
    }
    .submenu-box {
      position: absolute;
      transform-origin: 50% -30px;
      z-index: 100;
      opacity: 0;
      display: none;
      transform: rotateX(-15deg) translateZ(0px);
      top: 35px;
      left: -40px;
      transition: 0.5s;
      padding: 40px;
    }
    .submenu {
      top: 120%;
      left: 0;
      width: 180px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      padding: 13px 24px;
      li a {
        line-height: 36px;
        padding: 0px !important;
        &:hover {
          color: #0095ff;
        }
      }
    }
  }

  .main-menu .submenu.dark {
    background: #20252b !important;
    li {
      a {
        color: #ffffff !important;
        &:hover {
          color: #ffffff90 !important;
        }
      }
    }
  }
  .main-menu .nft-submenu.dark {
    background: #20252b !important;
  }

  /*-- header-extra style --*/
  .header-extra {
    display: flex;
    align-items: center;
    gap: 30px;
    margin: 0;
    padding: 0;
    list-style: none;
    li a {
      color: #ffffff;
      transition: 0.3s;
      &:hover {
        color: #ffffffb2;
      }
    }
  }
  /*-- header-section end --*/

  /*-- qr code btn start --*/
  .qr-code-btn {
    position: absolute;
    right: 40px;
    &.relative {
      position: inherit;
    }
    .qr-code-btn-inner {
      position: relative;
    }
    .view-qr {
      background: #9fe870;
      border-radius: 50px;
      height: 50px;
      width: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .qr-code-box {
      position: absolute;
      right: 0px;
      transform: translateY(15px);
      width: 330px;
      height: 170px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px -7.5px;
      background: #101722;
      border-radius: 20px;
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
      -webkit-transition: 0.3s;
      transition: 0.3s;
      opacity: 0;
      visibility: hidden;

      .scan-qr {
        padding: 0px 7.5px;
        width: 50%;
      }
    }

    &:hover {
      .qr-code-box {
        //            display: flex;
        -webkit-transform: translateY(15px);
        transform: translateY(15px);
        opacity: 1;
        visibility: visible;
      }
    }
  }
  /*-- qr code btn end --*/

  @-webkit-keyframes headerAnimetion {
    from {
      top: -100px;
    }
    to {
      top: 0px;
    }
  }

  @keyframes headerAnimetion {
    from {
      top: -100px;
    }
    to {
      top: 0px;
    }
  }

  .nav-item {
    &.home-nav {
      position: inherit !important;
      &:hover {
        .mega-menu {
          animation: menuAnimetion 0.7s;
          display: block;
          transform: none;
          opacity: 1;
        }
      }
      a {
        &.megaTablinks {
          color: auto !important;
        }
      }
    }
  }
  .mega-menu {
    padding-top: 30px;
    background: transparent;
    top: 45px;
    left: 0px;
    width: 100%;
    transition: 0.5s;

    position: absolute;
    transform-origin: 50% -30px;
    z-index: 100;
    opacity: 0;
    display: none;
    transform: rotateX(-15deg) translateZ(0px);
  }
  .mega-menu-card {
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.05);
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.07);
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    width: 100%;
    .mega-menu-column {
      width: 25%;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      padding: 21px 40px 40px 40px;
      min-height: 450px;
      background: #ffffff;
      position: relative;
      &:nth-last-child(2) {
        border: none;
      }
      &:nth-last-child(1) {
        border: none;
        background: #e3e9f7;
        &::after {
          content: "";
          height: 77px;
          width: 77px;
          background: linear-gradient(
            180deg,
            rgba(5, 85, 255, 0) 0%,
            rgba(5, 85, 255, 0.15) 100%
          );
          right: 20px;
          bottom: 70px;
          position: absolute;
          border-radius: 50%;
          z-index: 0;
        }
        &::before {
          content: "";
          height: 137px;
          width: 137px;
          background: linear-gradient(
            180deg,
            rgba(5, 85, 255, 0.15) 0%,
            rgba(5, 85, 255, 0) 100%
          );
          top: 30px;
          left: 20px;
          position: absolute;
          border-radius: 50%;
          z-index: 0;
        }
      }
    }
    &.dark {
      background: #20252b;
      .mega-menu-column {
        border-color: rgba(255, 255, 255, 0.1);
        background: #20252b;
        &:nth-last-child(1) {
          border: none;
          background: #2b3036;
          &::after {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.15) 100%
            );
          }
          &::before {
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.15) 0%,
              rgba(255, 255, 255, 0) 100%
            );
          }
        }
        h5 {
          color: #ffffff;
        }
      }

      .more-demo-card {
        background: #2b3036;
        p {
          color: #ffffff;
        }
        &::after {
          background: linear-gradient(
            180deg,
            rgba(255, 183, 202, 0.2) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }

        img {
          position: absolute;
          top: 21px;
          right: 20px;
          filter: brightness(0.35);
        }
      }

      &:hover {
        .mega-menu-list {
          li {
            a {
              opacity: 80%;
            }
          }
        }
      }

      .mega-menu-list {
        li {
          a {
            color: #ffffff !important;
            &.disable {
              opacity: 100%;
            }
          }
          &.menuTabActive {
            a {
              &:hover {
                color: #ffffff !important;
              }
            }
          }
        }
      }
    }
  }
  .mega-menu-list {
    padding: 0px;
    margin: 0px;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      max-height: 56px;

      .tag {
        font-weight: 700;
        font-size: 12px;
        line-height: 20px;
        text-transform: uppercase;
        padding: 0px 8px;
        margin-left: 12px;
        border-radius: 10px;

        &.hot {
          background: #fd246a;
          color: #ffffff;
        }

        &.new {
          background: #0095ff;
          color: #ffffff;
        }

        &.trendy {
          background: #9fe870;
          color: #111111;
        }
      }
      a {
        font-family: fontfamily(dmSans);
        font-weight: 500;
        font-size: 15px;
        line-height: 50px;
        color: #444444;
        transition: 0.3s;
        &.disable {
          opacity: 70%;
        }
      }
      &.menuTabActive {
        a {
          &:hover {
            opacity: 100% !important;
            color: #111111 !important;
          }
        }
      }
    }
  }

  .mega-menu-img {
    background: #405364;
    overflow: hidden;
    border-radius: 10px;
    position: relative;
    z-index: 1;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .mega-menu-tabcontent {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    padding: 50px 40px;
  }
  .megaMenutabcontent {
    display: none;
    animation: fadeEffect 0.4s;
  }

  .more-demo-card {
    background: #faeef1;
    border-radius: 10px;
    padding: 17px 20px;
    position: relative;
    margin-top: 25px;
    p {
      color: #111111;
      position: relative;
      z-index: 1;
      margin-bottom: 0px;
    }
    &::after {
      content: "";
      position: absolute;
      top: 12px;
      left: 8px;
      height: 33px;
      width: 33px;
      border-radius: 50%;
      background: linear-gradient(
        180deg,
        rgba(255, 183, 202, 0.5) 0%,
        rgba(250, 238, 241, 0.5) 100%
      );
      z-index: 0;
    }
    img {
      position: absolute;
      top: 21px;
      right: 20px;
    }
  }

  @keyframes fadeEffect {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes menuAnimetion {
    from {
      transform-origin: 50% -30px;
      opacity: 0;
      display: none;
      transform: rotateX(-15deg) translateZ(0px);
    }

    to {
      display: block;
      transform: none;
      opacity: 1;
    }
  }

  .submenu-has-submenu {
    position: relative;
    &::after {
      content: ">";
      font-size: 22px;
      position: absolute;
      right: 0px;
      top: 11px;
      transition: 0.3s;
      transform: rotate(0deg);
      color: #999999;
    }
    .submenu-box2 {
      position: absolute;
      transform-origin: 50% -30px;
      z-index: 100;
      opacity: 0;
      display: none;
      transform: rotateX(-15deg) translateZ(0px);
      top: -20px;
      left: 180px;
      transition: 0.5s;
      padding: 40px;
    }
    .submenu-submenu {
      list-style: none;
      margin: 0px;
      width: 250px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.07);
      border-radius: 15px;
      padding: 13px 24px;
      li {
        line-height: 35px;
      }
    }
    &:hover {
      .submenu-box2 {
        animation: menuAnimetion 0.7s;
        display: block;
        transform: none;
        opacity: 1;
      }
      &::after {
        transform: rotate(90deg);
      }
    }
  }

  .v6-header-content {
    backdrop-filter: none !important;
    .mobile-menu {
      .navbar-toggler {
        img {
          filter: brightness(100);
        }
      }
    }
  }

  .sticky {
    .v6-header-content {
      .mobile-menu {
        .navbar-toggler {
          img {
            filter: brightness(0);
          }
        }
      }
    }
    &.defi {
      .v6-header-content {
        .mobile-menu {
          .navbar-toggler {
            img {
              filter: brightness(100) !important;
            }
          }
        }
      }
    }
  }

  .mobile-menu {
    display: none;
    .navbar-toggler {
      &:focus {
        border: none;
        outline: none;
        box-shadow: none !important;
      }
      svg {
        font-size: 26px;
      }
    }
    .btn-close {
      background-image: none;
      opacity: 1;
    }
    .offcanvas {
      transition: transform 0.6s ease-in-out;
    }

    .js-go-light {
      display: none;
      filter: brightness(0.7);
    }
    .connect-btn {
      margin-left: 20px;
      margin-right: 20px;
      img {
        filter: brightness(0.7);
        margin-right: 8px;
      }
    }
    .light-logo {
      display: none;
    }
    .dark-logo {
      display: block;
    }
  }

  .mobile-menu-body {
    background: #ffffff;
    height: 100vh;
    width: 400px !important;
    padding: 10px 30px;
    .offcanvas-header {
      .btn-close {
        background: none;
        margin-right: 10px;
        margin-bottom: 10px;
        opacity: 1;
        svg {
          color: #000000;
          font-size: 32px;
        }
      }
    }
    .navbar-nav {
      text-align: center;
      padding-right: 0px !important;
    }
    .mobile-menu-logo {
      min-width: 150px;
    }
    .offcanvas-body {
      overflow-x: hidden;
      padding-top: 20px;
    }
    .mobile-navbar-menu {
      .nav-menu {
        width: 100% !important;
        li {
          .hash-has-sub {
            span {
              top: -10px !important;
            }
            a {
              border: none !important;
            }
          }
        }
      }
    }
  }

  body.dark-scheme,
  html.dark-scheme body,
  .dark {
    .navbar-toggler {
      img {
        filter: brightness(100);
      }
    }
    .mobile-menu-body {
      background: #181d22;
    }
    .light-logo {
      display: block;
    }
    .dark-logo {
      display: none;
    }
    .mobile-navbar-menu {
      .nav-menu li {
        a {
          color: #ffffff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hash-has-sub {
          a {
            border: none !important;
          }
        }
      }
      a {
        color: #ffffff;
      }
      .connect-btn {
        color: #ffffff;
        img {
          filter: brightness(100);
        }
      }
      .js-go-light {
        filter: brightness(100);
      }
      .sign-in-btn {
        span {
          color: #ffffff;
        }
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .mobile-menu {
      display: block;
    }
  }
  // @media only screen and (max-width: 768px){
  //     .mobile-menu-body{
  //         width: 80% !important;
  //     }
  // }
  // @media only screen and (max-width: 575px){
  //     .mobile-menu-body{
  //         padding: 10px 30px;
  //         width: 90% !important;
  //     }
  // }
  @media only screen and (max-width: 480px) {
    .mobile-menu-body {
      padding: 10px 15px;
      width: 100% !important;
    }
    .mobile-navbar-menu .nav-buttons {
      padding-right: 0px !important;
      padding-left: 0px !important;
    }
  }

  /* .nft-header-section{
    padding: 20px 0px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background: #ffffff;
    position: relative;
    z-index: 1111;
    .header-blur-img{
        position: absolute;
        top: 0px;
        width: 100%;
        text-align: center;
        z-index: 0;
        height: 100%;
        img{
            height: 100%;
        }
    }
    .mega-menu{
        top: 38px;
        .mega-menu-img{
            max-width: 80%;
            margin: auto;
        }
    }
    &.sticky{
        padding: 15px 0px !important;
    }
}
.nft-header-content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 2;
}
.nft-header-left{
    .header-logo{
        .nft-logo-light{
            display: none;
        }
        .nft-logo-dark{
            display: block;
        }
    }
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 84px;
    form{
        width: 470px;
        height: 45px;
        background: rgba(0, 0, 0, 0.08);
        border-radius: 25px;
        padding: 14px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input{
            overflow: hidden;
            max-width: 420px;
            margin-left: 14.5px;
            width: 100%;
            background: transparent;
            overflow: hidden;
            border: none;
            outline: none;
            font-size: 15px;
            line-height: 19.3px;
            font-weight: 500;
            color: #999999;
        }
    }
}

.search-form-phn{
    max-width: 100%;
    padding: 0px;
    width: 100%;
    margin: auto;
    margin-bottom: 16px;
    margin-top: 20px;
    form{
        width: 100% !important;
        height: 45px;
        background: rgba(0, 0, 0, 0.08);
        border-radius: 25px;
        padding: 14px 20px;
        display: flex !important;
        align-items: center;
        justify-content: space-between;
        input{
            overflow: hidden;
            max-width: 100%;
            margin-left: 14.5px;
            width: 100%;
            font-size: 15px;
            font-weight: 500;
            background: transparent;
            overflow: hidden;
            border: none;
            outline: none;
            font-weight: 600;
            color: #999999;
        }
    }
}

.nft-header-right{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 46px;
    .nft-menu{
        list-style: none;
        padding: 0px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 46px;
        margin-bottom: 0px;
        .nav-item{
            a{
                color: #444444;
                transition: 0.3s;
                font-weight: 500;
                &:hover{
                    color: #111111;
                }
            }
            
        }
    }
    .nft-header-bnts{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 30px;
        .signin-btn{
            &:hover{
                color: #111111;
            }
        }
        .connect-btn{
            background: #5F5FFF;
            border-radius: 25px;
            padding: 13.5px 20px;
            color: #ffffff;
            line-height: 16px;
            font-weight: 700;
            transition: 0.3s;
            img{
                margin-right: 13px;
                transition: 0.3s;
            }
        }
        .dark-mood-btn{
            transition: 0.3s;
            .js-go-dark{
                transition: 0.3s;
                &:hover{
                    filter: brightness(0%);
                }
            }
            .js-go-light{
                transition: 0.3s;
                display: none;
                filter: brightness(100);
                &:hover{
                    filter: brightness(100);
                    opacity: 0.7;
                }
            }
        }
    }
    .has-submenu {
        position: relative;
        .submenu-box{
            position: absolute;
            transform-origin: 50% -30px;
            z-index: 100;
            opacity: 0;
            display: none;
            transform: rotateX(-15deg) translateZ(0px);
            top: 20px;
            left: -40px;
            transition: 0.5s;
            padding: 40px;
        }
        .submenu {
            list-style: none;
            margin: 0px;
            width: 250px;
            background: #ffffff;
            border: 1px solid rgba(0, 0, 0, 0.08);
            box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
            border-radius: 10px;
            padding: 13px 24px;
            li{
                line-height: 333%;
                &.nft-has-submenu{
                    &::after{
                        top: 1px;
                    }
                }
            }
        }
        &:hover {
            .submenu-box{
                animation: menuAnimetion 0.7s;
                display: block;
                transform: none;
                opacity: 1;
            }
        }
    }
} */

  /*-- Deark Mood --*/
  /* body.dark-scheme,
html.dark-scheme body{
    .nft-header-section{
        background: #181D22;
    }
    
    .nft-header-left {
        .header-logo{
            .nft-logo-dark{
                display: none;
            }
            .nft-logo-light{
                display: block;
            }
        }
        form{
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
        }
    }
    .nft-header-right {
        .nft-header-bnts{
            .signin-btn{
                color: #999999;
            }
        }
        .nft-menu {
            .nav-item {
                a{
                    color: #999999;
                    &:hover{
                        color: #ffffff;
                    }
                }
            }
        }
        .has-submenu{
            .submenu {
                background: #181D22;
                backdrop-filter: blur(10px);
            }
            .nft-submenu{
                background: #181D22;
                backdrop-filter: blur(10px);
            }
        }
    }

        .mega-menu-card {
            background: #20252B;
    
            .mega-menu-column {
                border-color: rgba(255, 255, 255, 0.1);
                background: #20252B;
    
                &:nth-last-child(1) {
                    border: none;
                    background: #2B3036;
    
                    &::after {
                        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.15) 100%);
                    }
    
                    &::before {
                        background: linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%);
                    }
                }
    
                h5 {
                    color: #ffffff;
                }
            }
    
            .more-demo-card {
                background: #2B3036;
    
                p {
                    color: #ffffff;
                }
    
                &::after {
                    background: linear-gradient(180deg, rgba(255, 183, 202, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
                }
    
                img {
                    position: absolute;
                    top: 21px;
                    right: 20px;
                    filter: brightness(0.35);
                }
    
            }
    
            &:hover {
                .mega-menu-list {
                    li {
                        a {
                            opacity: 80%;
                        }
                    }
                }
            }
    
            .mega-menu-list {
                li {
                    a {
                        color: #ffffff !important;
    
                        &.disable {
                            opacity: 100%;
                        }
                    }
    
                    &.menuTabActive {
                        a {
                            &:hover {
                                color: #ffffff !important;
                            }
                        }
                    }
                }
            }
        }
} */

  .header-top {
    background: url(../images/bg/top-header-bg.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: 111;
    .header-top-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 35px;
      .header-top-timer {
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 228px;
          width: 100%;
          gap: 30px;
          li {
            color: #ffffff;
            span {
              margin-left: 4px;
            }
          }
        }
      }
      .header-top-right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
      }
      p {
        margin-bottom: 0;
        color: #ffffff;
      }
    }
  }
  .nav-expanded .staco-home3-canva {
    margin-top: 90px;
  }

  /*-- language drpdown --*/
  .language-dropdown {
    position: relative;
    max-width: 100px;
    .language-dropdown-box {
      position: absolute;
      transform-origin: 50% -30px;
      z-index: 100;
      opacity: 0;
      display: none;
      transform: rotateX(-15deg) translateZ(0px);
      top: 30px;
      left: -40px;
      transition: 0.5s;
      padding: 40px;
    }
    &.open {
      .language-dropdown-box {
        animation: menuAnimetion 0.7s;
        display: block;
        transform: none;
        opacity: 1;
      }
    }
    &:hover {
      .language-dropdown-box {
        animation: menuAnimetion 0.7s;
        display: block;
        transform: none;
        opacity: 1;
      }
    }

    button {
      background: transparent;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 50px;
      width: 100px;
      height: 50px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      padding: 10px 14px;
      color: #111111;
      position: relative;
      &::after {
        content: url(../images/icons/dropdown-toggle.svg);
        position: absolute;
        top: 12px;
        right: 11px;
        opacity: 0.4;
      }
      img {
        width: 21px;
        height: 21px;
        border-radius: 50%;
        margin-right: 7.5px;
      }
    }

    .list {
      top: 100%;
      left: 0;
      width: 100%;
      z-index: 10;
      margin-top: 10px;
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.05);
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.07);
      padding: 10px 0;
      border-radius: 15px;
      width: 200px;
      height: auto;
      right: 0;
      left: unset;
      top: 130%;
      list-style: none;
      margin: 0px;
      padding: 28px 30px 30px 30px;
    }

    .list-item {
      font-weight: 500;
      font-size: 15px;
      line-height: 18px;
      color: #444444;
      line-height: 333%;

      &:hover {
        color: #111111;
        background-color: transparent;
      }
      .select {
        display: none;
      }
    }

    &.finance {
      button {
        background: transparent;
        border: 1px solid #ffffff30;
        color: #ffffff;
        position: relative;

        &::after {
          content: url(../images/icons/dropdown-toggle.svg);
          position: absolute;
          top: 12px;
          right: 11px;
          opacity: 1;
          filter: brightness(100);
        }

        img {
          width: 21px;
          height: 21px;
          border-radius: 50%;
          margin-right: 7.5px;
          filter: brightness(100);
        }
      }
    }
  }

  /* responsive style start  */

  @media screen and (max-width: 1850px) {
  }
  @media screen and (max-width: 1699px) {
  }
  @media screen and (max-width: 1600px) {
  }
  @media screen and (max-width: 1499px) {
  }
  @media screen and (max-width: 1399px) {
    .header-extra {
      gap: 20px;
    }
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1199px) {
    .hero-section-3-header {
      .shape-img {
        &.img-1 {
          left: 0;
        }

        &.img-2 {
          right: 0;
        }
      }
    }
  }
  @media screen and (min-width: 991px) and (max-width: 1200px) {
    .header-extra {
      gap: 25px;
      .btn-light-green {
        width: 130px;
      }
    }
    .header-section {
      .main-menu {
        li {
          a {
            font-size: 13px;
          }
        }
      }
      .header-extra {
        li {
          a {
            font-size: 13px;

            img {
              max-width: 18px;
            }
          }
        }
      }
    }
    .main-menu {
      gap: 25px;
    }
    .corporate-header {
      .main-menu {
        gap: 10px;
      }
      .header-extra {
        gap: 18px;
      }
      &.header-section {
        .header-navbar-container {
          gap: 30px;
        }
        .header-navbar-content {
          gap: 20px;
        }
      }
    }
    .language-dropdown {
      button {
        font-size: 13px;
        width: 90px;
        height: 44px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .header-navbar-content {
      position: fixed;
      top: 0;
      left: 0;
      width: 320px;
      height: 100%;
      background-color: black;
      padding: 30px;
      flex-direction: column;
      align-items: flex-start !important;
      justify-content: flex-start !important;
      transition: 0.3s;
      transform: translateX(-155%);
      height: 100vh;

      &.show {
        transform: translateX(0%);
      }
    }

    .main-menu {
      flex-direction: column;
      align-items: flex-start;

      li {
        position: relative;
        a {
          padding: 0px;
        }
        &:hover {
          .dropdown-toggle {
            &::after {
              transform: rotate(0deg);
            }
          }

          .submenu {
            transform: translateY(10px);
          }
        }
      }

      .submenu {
        display: none;
        position: unset;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: transparent;
        border: none;
        box-shadow: none;
        border-top: 0;
        padding: 5px 0;
        transform: translateY(10px);
        transition: 0.3s;
        opacity: 1;
        visibility: visible;

        li a {
          padding: 10px 15px;
        }

        &.show {
          display: block;
        }
      }
    }

    .header-extra {
      margin-top: 30px;
      // flex-direction: column;
      // align-items: flex-start;
    }

    .header-section:not(.v6) {
      background: #ffffff;
      padding: 15px 0px;
    }

    .header-section {
      .logo-light {
        display: none;
      }
      .logo-dark {
        display: block !important;
      }
      &.v2 {
        .header-navbar-content {
          background-color: white;
          box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.08);
        }

        .dropdown-toggle {
          &::after {
            filter: none;
          }
        }

        .submenu {
          background-color: transparent;
          box-shadow: none;
        }
      }
    }

    .qr-code-btn {
      .view-qr {
        height: 40px;
        width: 40px;
        padding: 11px;
      }
    }
    .nav-expanded .header-3-canva {
      margin-top: 85px;
    }
    .nav-expanded .header-section.v6 {
      padding: 0;
    }
    .header-section.v6.sticky .v6-header-content {
      box-shadow: none;
    }
    .nav-expanded .header-section.v6 .v6-header-content,
    .header-section.v6.sticky .v6-header-content {
      border-radius: 0;
    }
    .header-section.v6.sticky .col-md-12,
    .nav-expanded .header-section.v6 .col-md-12 {
      padding: 0 !important;
    }
    .nav-expanded {
      .header-section.defi .defi-header-content {
        background: transparent;
      }
    }

    .mobile-navbar-menu span.submenu-button::before {
      right: 26px;
    }
    .mobile-navbar-menu span.submenu-button::after {
      right: 21px;
    }

    .mobile-navbar-menu .sub-menu li {
      &:last-child {
        a {
          padding-bottom: 18px;
        }
      }
    }
    body:not(.nav-expanded) .header-section.v6:not(.sticky) {
      .logo-light {
        display: block;
      }
      .logo-dark {
        display: none !important;
      }
      .nav-expander {
        img {
          filter: brightness(0) invert(1);
        }
      }
    }

    .header-section.v6.sticky {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
    }
    body:not(.nav-expanded) .header-section.v6:not(.sticky) {
      .logo-light {
        display: block;
      }
      .logo-dark {
        display: none !important;
      }
      .nav-expander {
        img {
          filter: brightness(0) invert(1);
        }
      }
    }
    .header-section.v6 {
      .v6-header-content {
        height: auto;
      }
      &.sticky {
        background: #ffffff;
        padding: 0;
        .header-section.v6.v6-header-content {
          box-shadow: none;
        }
      }
    }

    .nav-expanded .header-3-canva {
      margin-top: 85px;
    }
    .nav-expanded .header-section.v6 {
      padding: 0;
    }
    .header-section.v6.sticky .v6-header-content {
      box-shadow: none;
    }
    .nav-expanded .header-section.v6 .v6-header-content,
    .header-section.v6.sticky .v6-header-content {
      border-radius: 0;
    }
    .compare-plans-table-section .compare-plans-table .table-body {
      overflow-y: auto;
    }
    .breadcrumb-sec .breadcrumb-title {
      font-size: 40px;
    }
    .header-section.v6.sticky .col-md-12,
    .nav-expanded .header-section.v6 .col-md-12 {
      padding: 0 !important;
    }
    .nav-expanded {
      .header-section.defi .defi-header-content {
        background: transparent;
      }
    }

    .header-section.v1 {
      .main-menu {
        .submenu {
          li {
            a {
              color: #ffffffb2;
            }
          }
        }
      }
      &.sticky {
        .main-menu {
          li {
            a {
              color: #ffffffb2;
            }
          }
        }
        .header-extra {
          li {
            a {
              color: #ffffff;
            }
          }
        }
      }
    }

    .header-section {
      &.crypto-header {
        background: transparent;
      }
    }
    .download-wallet-btns {
      a {
        padding: 7px 12px;
        max-width: 170px;
      }
    }

    .header-section {
      &.v6.defi {
        &.sticky {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(2.5px);
          & .v6-header-content {
            background: transparent;
            padding: 18px 15px 15px;
            backdrop-filter: none;
          }
        }
        .nav-expander img:nth-child(1) {
          filter: brightness(100);
        }
      }
    }
  }
  @media screen and (min-width: 768px) and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    .mobile-navbar-menu .nav-menu,
    .mobile-navbar-menu .nav-buttons {
      width: 540px;
    }
    .header-top .header-top-content .header-top-timer,
    .header-top .header-top-content .header-top-left {
      display: none;
    }
    .header-top .header-top-content .header-top-right {
      padding-top: 5px;
    }
    .header-top {
      .header-top-content {
        flex-direction: column;
      }
    }
  }
  @media screen and (max-width: 575px) {
  }
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 425px) {
  }
  @media screen and (max-width: 375px) {
  }
  @media screen and (min-width: 768px) {
  }
`;

export default HeaderStyleWrapper;
