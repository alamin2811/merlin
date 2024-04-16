import styled from "styled-components";

const BannerVideoStyle = styled.div`
    

.home-banner{
    .home-banner-shape{
        position: absolute;
        top: 15px;
        left: 0px;
        width: 100%;
        z-index: 0;
        .ractangle{
            background: linear-gradient(90deg, rgba(208, 46, 190, 0.3) 0%, rgba(108, 211, 108, 0.3) 100%);
            width: 100%;
            height: 60px;
            margin-bottom: 20px;
        }
    }
}
.home-banner-inner {
    background: url(../images/crypto-token/crypto-token-bg.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
    overflow: hidden;

    .overlay {
        background: url(../images/crypto-token/grain-texture.png);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        padding-top: 251px;
        padding-bottom: 91px;
        height: 100%;
        .container{
            position: relative;
        }
        .masd-grad{
            position: absolute;
            right: -158px;
            top: -100px;
        }
    }
    .bottom-overlay{
        height: 50%;
        width: 100%;
        bottom: 0px;
        position: absolute;
        background: linear-gradient(180deg, rgba(13, 16, 20, 0) 0%, rgba(13, 16, 20, 0.762195) 65.1%, #0D1014 85.42%);
    }
}

.home-banner-text{
    margin-bottom: 120px;
    position: relative;
    z-index: 1;
    h1{
        font-size: 100px;
        line-height: 120%;
        color: #ffffff;
        margin-bottom: 45px;
        text-transform: uppercase;
    }
    p{
        font-size: 18px;
        line-height: 200%;
        color: #ffffff;
        max-width: 650px;
        margin-bottom: 58px;
    }
}

.banner-img{
    position: relative;
    position: absolute;
    right: 0px;
    top: -91px;
    z-index: 0;
    img{
        animation: rotate360 8s linear infinite;
        -webkit-animation: rotate360 8s linear infinite;
    }
}


/*-- crypto banner card --*/
.banner-card{
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 25px 40px;
    h2{
        font-size: 40px;
        max-height: 70px;
        min-height: 70px;
        padding: 5px 0px;
        line-height: 140%;
        color: #ffffff;
        margin-bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 15px 0px;
    }
    p{
        font-size: 18px;
        line-height: 100px;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 0px;
        position: relative;
        width: max-content;
        &::after{
            content: '';
            height: 11px;
            width: 11px;
            background: #BFFF0A;
            border-radius: 50%;
            position: absolute;
            right: -20px;
            top: 45px;
        }
    }
}

.banner-card2{
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    padding: 25px 38px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    h2{
        font-size: 40px;
        line-height: 60px;
        color: #ffffff;
        margin-bottom: 0px;
    }
    p{
        font-size: 18px;
        text-transform: uppercase;
        color: #ffffff;;
        margin-bottom: 0px;
        line-height: 60px;
        position: relative;
        width: max-content;
        padding-left: 25px;
        &::before{
            content: '';
            height: 11px;
            width: 11px;
            background: #BFFF0A;
            border-radius: 50%;
            position: absolute;
            left: 0px;
            top: 25px;
        }
    }
}

.number-diy{
    display: flex;
    .data{
        font-size: 40px !important;
        line-height: auto;
        color: #ffffff !important;
        margin-bottom: 0px;
        div{
            width: 30px !important;
            padding: 0px !important;
            span{
                width: 30px !important;
                padding: 0px !important;
                height: auto !important;
            }
        }
    }
}
/*-- banner-video-section start --*/

padding-top: 50px;
@-webkit-keyframes circle {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    
    to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
        opacity: 0;
    }
}

@keyframes circle {
    from {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    
    to {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
        opacity: 0;
    }
}
.banner-video-card{
    height: 550px;
    border-radius: 30px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    video{
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 30px;        
    }
    h2{
        position: relative;
        z-index: 2;
        text-align: center;
        color: #ffffff;
        margin-bottom: 0px;
        font-size: 60px;
        text-transform: uppercase;
        line-height: 117%;
        margin-top: -70px;
        &.cd-headline{
            span{
                padding: 0px !important;
                position: relative;
            }
        }
        .cd-words-wrapper {
            width: 577px !important;
            text-align: center;
            justify-content: center;
            display: flex;
            align-items: center;
            margin: auto;
            b {
                font-weight: 700;
                width: 577px !important;
                text-align: center;
                justify-content: center;
                display: flex;
                align-items: center;
                margin: auto;
            }
        }
    }
}
/*-- banner-video-section End --*/

.cd-words-wrapper b {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(-100%);
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.cd-words-wrapper b.is-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

@media screen and (max-width: 1499px){
    .home-banner-inner {
        .overlay{
            padding-top: 200px;
        }
    }
    .home-banner-text {
        margin-bottom: 80px;
        h1{
            font-size: 90px;
            margin-bottom: 30px;
        }
        p{
            margin-bottom: 40px;
        }
    }
    .home-banner-inner {
        .overlay {
            .masd-grad{
                right: 0px;
            }
        }
    }
    .banner-card {
        h2{
            font-size: 40px;
            margin: 4px 0px;
        }
    }
    .banner-card2{
        padding: 19.5px 38px;
    }
}

@media screen and (max-width: 1199px){
    .banner-video-card{
        height: 430px;
    }
}
@media screen and (max-width: 991px){
    padding-top: 0px;
    .banner-video-card {
        height: 320px;
        h2 {
            font-size: 45px;
        }
    }
}
@media screen and (max-width: 767px){
    .home-banner-inner {
        .overlay{
            padding-top: 130px;
        }
    }
    .home-banner-text {
        h1{
            font-size: 50px;
        }
    }
    .banner-video-card {
        h2{
            .cd-words-wrapper{
                width: 380px !important;
                b{
                    width: 380px !important;
                }
            }
        }
    }
}
@media screen and (max-width: 575px){
    .home-banner-text {
        h1{
            font-size: 40px;
        }
        p{
            font-size: 16px;
        }
    }
    .banner-video-card {
        h2{
            font-size: 32px;
            .cd-words-wrapper{
                width: 300px !important;
                b{
                    width: 300px !important;
                }
            }
        }
    }
}

@media screen and (max-width: 425px){
    .home-banner-text {
        h1{
            font-size: 30px;
        }
    }
    .banner-card {
        h2{
            font-size: 22px;
        }
        p{
            font-size: 14px;
        }
        &2{
            h2{
                font-size: 22px;
            }
            p{
                font-size: 14px;
            }
        }
    }
    .banner-video-card {
        height: 250px;
        h2 {
            font-size: 26px;
            .cd-words-wrapper {
                width: 210px !important;
                b {
                    width: 210px !important;
                }
            }
        }
    }
}


`;

export default BannerVideoStyle;
