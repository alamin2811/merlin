import styled from "styled-components";

const BannerStyle = styled.div`
    .home-banner-shape{
        position: absolute;
        top: 15px;
        left: 0px;
        width: 100%;
        z-index: 0;
        .ractangle{
            width: 100%;
            height: 60px;
            margin-bottom: 20px;
            &:nth-child(1){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.20) 0%, rgba(108, 211, 108, 0.20) 100%);
            }
            &:nth-child(2){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.20) 0%, rgba(108, 211, 108, 0.20) 100%);
            }
            &:nth-child(3){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.15) 0%, rgba(108, 211, 108, 0.15) 100%);
            }
            &:nth-child(4){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.11) 0%, rgba(108, 211, 108, 0.11) 100%);
            }
            &:nth-child(5){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.09) 0%, rgba(108, 211, 108, 0.09) 100%);
            }
            &:nth-child(6){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.07) 0%, rgba(108, 211, 108, 0.07) 100%);
            }
            &:nth-child(7){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.05) 0%, rgba(108, 211, 108, 0.05) 100%);
            }
            &:nth-child(8){
                background: linear-gradient(90deg, rgba(254, 185, 8, 0.03) 0%, rgba(108, 211, 108, 0.03) 100%);
            }
        }
    }
.home-banner-inner {
    background: url(../assets/images/crypto-token/crypto-token-bg.png);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
    overflow: hidden;

    .overlay {
        background: url(../assets/images/crypto-token/grain-texture.png);
        
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        padding-top: 200px;
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
        background: linear-gradient(180deg, rgba(13, 16, 20, 0.00) 0%, rgba(13, 16, 20, 0.76) 33%, #0D1014 85.42%);
    }
}

.home-banner-text{
    margin-bottom: 120px;
    position: relative;
    z-index: 1;
    max-width: 706px;
    width: 100%;
    h1{
        font-size: 80px;
        line-height: 125%;
        color: #ffffff;
        margin-bottom: 45px;
        text-transform: uppercase;
    }
    p{
        font-size: 16px;
        line-height: 187%;
        color: #ffffff;
        max-width: 677px;
        margin-bottom: 58px;
    }
}

.banner-img{
    position: absolute;
    right: -20px;
    top: -110px;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .coin-img{
        position: absolute;
    }
}


/*-- crypto banner card --*/
.home-banner-card-section{
    position: relative;
    z-index: 1;    
}
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


.banner-video-section{
    padding-top: 50px;
}
.banner-video-card{
    height: 550px;
    border-radius: 30px;
    overflow: hidden;
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
        font-size: 70px;
        text-transform: uppercase;
        line-height: 117%;
        &.cd-headline{
            span{
                padding: 0px !important;
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
    .home-banner-text {
        max-width: 530px;
        h1{
            font-size: 60px;
        }
        p{
            font-size: 14px;
        }
    }
    .banner-card, .banner-card2 {
        h2{
            font-size: 30px;
        }
    }
    .number-diy {
        .data {
            font-size: 30px !important;
            div{
                width: 20px !important;
                span{
                    width: 20px !important;
                }
            }
        }
    }
}
@media screen and (max-width: 991px){
    .home-banner-inner {
        .overlay{
            padding-top: 180px;
            padding-bottom: 70px;
        }
    }
    .banner-card{
        margin-bottom: 30px;
        p{
            line-height: 50px;
        }
    }
    .banner-img{
        max-width: 300px;
        top: 0px;
        .coin-img{
            max-width: 140px;
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

export default BannerStyle;
