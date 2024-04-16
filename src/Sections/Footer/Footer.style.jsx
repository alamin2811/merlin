import styled from "styled-components";

const FooterStyle = styled.div`
  position: relative;
  z-index: 0;
  .container{
    position: relative;
    z-index: 3;
  }
  h5{
    color: #FFF;
    font-family: Lexend;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 36px;
    margin: 60px 0px;
    text-align: center;
    a{
        background: linear-gradient(90deg, #12CFA7 0%, #4BFA91 51.56%, #FCE344 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
  }
  .footer-copyright-section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    h6{
      color: #FFF;
      font-family: Lexend;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 26px;
    }
    ul{
      list-style: none;
      margin: 0px;
      padding: 0px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
      flex-wrap: wrap;
      li{
        a{
          color: #FFF;
          font-family: Lexend;
          font-size: 16px;
          font-style: normal;
          font-weight: 500;
          line-height: 26px;
        }
      }
    }
  }
  .footer-bg-img{
    &::after{
      content: '';
      height: 737px;
      width: 100%;
      z-index: 1;
      position: absolute;
      bottom: 0px;
      left: 0px;
      background: linear-gradient(180deg, #0D1014 0%, rgba(13, 16, 20, 0.80) 100%);
    }
    img{
      position: absolute;
      bottom: 0px;
      left: 0px;
      z-index: 0;
      height: 737px;
      width: 100%;
    }
  }
  .footer-shape{
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0px;
    text-align: center;
    z-index: 2;
  }
  .token-footer-bottom-text {
    padding: 40px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
        font-family: "Quantico", sans-serif;
        font-weight: 700;
        font-size: 97px;
        text-align: justify;
        line-height: 120px;
        text-transform: uppercase;
        color: #FFFFFF;
        span{
            position: relative;
            &.top{
                top: -70px;
                transition: 0.3s;
            }
        }
    }
}

@media screen and (max-width: 1199px){
  .token-footer-bottom-text {
    padding: 10px 0px;
    .text{
      font-size: 80px;
    }
  }
}
@media screen and (max-width: 991px){
  .footer-copyright-section{
    justify-content: center;
    flex-wrap: wrap-reverse;
  }
  .token-footer-bottom-text {
    padding: 0px;
    .text{
      font-size: 60px;
    }
  }
}
@media screen and (max-width: 768px){
  h5{
    margin: 30px 0px;
  }
  .token-footer-bottom-text {
    .text{
      font-size: 44px;
      line-height: 80px;
    }
  }
}
@media screen and (max-width: 575px){
  .footer-copyright-section{
    h6{
      text-align: center;
    }
    ul{
      justify-content: center;
    }
  }
  .token-footer-bottom-text {
    .text{
      font-size: 39px;
    }
  }
}
@media screen and (max-width: 480px){
  .token-footer-bottom-text {
    .text{
      font-size: 30px;
    }
  }
}

`;

export default FooterStyle;
