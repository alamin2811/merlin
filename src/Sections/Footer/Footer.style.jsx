import styled from "styled-components";

const FooterStyle = styled.div`
position: relative;
z-index: 9;
padding-bottom: 60px;
padding-top: 120px;
background: rgba(27, 39, 36, 0.70);
backdrop-filter: blur(40px);
margin-top: -220px;
.footer-left{
  h3{
    color: #FFF;
    font-family: Quantico;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 150% */
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  p{
    color: rgba(255, 255, 255, 0.80);
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 30px;
  }
  ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: wrap;
    margin-bottom: 42px;
    li{
      a{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        width: 70px;
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.08);
      }
    }
  }
  ol{
    list-style: none;
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    row-gap: 0px;
    flex-wrap: wrap;
    li{
      a{
        color: #FFF;
        font-family: Lexend;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}
.footer-center{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .join-discord-btn{
    margin: 150px 0px 120px 0px;
    border-radius: 35px;
    gap: 10px;
    background: #5865F2;
    height: 70px;
    width: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    text-align: center;
    font-family: Quantico;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    padding-left: 0px;
    padding-right: 0px;
    position: relative;
    img{
      margin-top: -4px;
      margin-right: 7px;
    }

  }
  .back-to-top{
    color: rgba(255, 255, 255, 0.80);
    text-align: center;
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }

}
  
.footer-right{
  h4{
    color: #FFF;
    font-family: Quantico;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 141.667%;
    text-transform: uppercase;
    max-width: 207px;
    margin-bottom: 20px;
  }
  p{
    color: rgba(255, 255, 255, 0.80);
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 187.5%;
    letter-spacing: -0.176px;
    max-width: 330px;
    margin-bottom: 15px;
  }
  form{
    border-radius: 35px;
    background: rgba(255, 255, 255, 0.10);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 40px;
    input{
      color: #FFFFFF;
      font-family: Lexend;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px;
      padding: 5px 10px;
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
      &::placeholder{
        color: rgba(255, 255, 255, 0.50);
      }
    }
    button{
      border-radius: 35px;
      background: #12CFA7;
      height: 50px;
      min-width: 150px !important;
      max-width: 150px !important;
      color: #FFF;
      font-family: Quantico;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 166.667%;
      text-transform: uppercase;
      padding: 5px !important;
    }
  }
  h5{
    color: #FFF;
    font-family: Lexend;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 50px;
    a{
      color: #FFF;
    }
  }
  ul{
    list-style: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 30px;
    row-gap: 0px;
    li{
      a{
        color: #FFF;
        font-family: Lexend;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }
  }
}

@media screen and (max-width: 1480px){
  padding-bottom: 30px;
  .footer-left{
    p{
      font-size: 14px;
    }
    ul{
      margin-bottom: 20px;
    }
    ol{
      gap: 15px;
      row-gap: 0px;
      li{
        a{
          font-size: 14px;
        }
      }
    }
  }
  .footer-right{
    h5{
      margin-bottom: 30px;
    }
    ul{
      li{
        a{
          font-size: 14px;
        }
      }
    }
  }
  .footer-center {
    .join-discord-btn{
      margin-top: 132px;
    }
    .back-to-top{
      font-size: 14px;
    }
  }
}
@media screen and (max-width: 1400px){
  .footer-left {
    p{
      margin-bottom: 15px;
    }
    h3{
      margin-bottom: 0px;
    }
  }
}
@media screen and (max-width: 1199px){
  .footer-left{
    h3{
      font-size: 30px;
    }
    ul{
      li{
        a{
          height: 50px;
          width: 50px;
        }
      }
    }
  }
  .footer-center {
    .join-discord-btn{
      height: 55px;
      width: 200px;
    }
  } 
  .footer-right {
    form{
      input{
        font-size: 16px;
      }
      button {
        height: 40px;
        min-width: 110px !important;
        max-width: 110px !important;
        font-size: 14px;
      }
    }
  }
}
@media screen and (max-width: 991px){
  .footer-content{
    position: relative;
    padding-top: 100px;
    padding-bottom: 50px;
  }
    .footer-right{
      text-align: center;
      h4{
        margin: auto;
        margin-bottom: 20px;
      }
      p{
        margin: auto;
        margin-bottom: 15px;
      }
      form{
        max-width: 400px;
        margin: auto;
        margin-bottom: 40px;
      }
      ul{
        justify-content: center;
      }
    }
    .footer-left{
      max-width: 400px;
      margin: auto;
      margin-top: 30px;
      text-align: center;
      ul, ol{
        justify-content: center;
      }
    }

    .footer-center {
      .join-discord-btn{
        margin: 0px;
        position: absolute;
        top: 10px;
    }
      .back-to-top{
          position: absolute;
          bottom: 0px;
      }
    }
}
@media screen and (max-width: 480px){
  margin-top: -33%;
}

`;

export default FooterStyle;
