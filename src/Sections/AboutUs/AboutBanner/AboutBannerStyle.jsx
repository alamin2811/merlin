import styled from "styled-components";

const AboutBannerStyle = styled.div`
    background: url(../assets/images/bg/about-bg.png);
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    .overlay{
        padding-top: 250px;
        padding-bottom: 10px;
        background: linear-gradient(180deg, rgba(13, 16, 20, 0.00) 0%, rgba(13, 16, 20, 0.76) 33%, #0D1014 85.42%);
    }
    .banner-content{
        text-align: center;
        max-width: 1100px;
        margin: auto;
        h6{
            color: #12CFA7;
            font-family: Quantico;
            font-size: 24px;
            font-weight: 700;
            line-height: 150%;
            text-transform: uppercase;
            margin-bottom: 60px;
            
        }
        p{
            color: #FFF;
            text-align: center;
            font-size: 26px;
            font-weight: 300;
            line-height: 184.615%;
            margin-bottom: 30px;
            span{
                font-size: 24px;
                line-height: 200%;
            }
        }
    }
   
@media screen and (max-width: 1199px){
    .overlay{
        padding-top: 220px;
        .banner-content{
            h6{
                margin-bottom: 45px;
            }
            p{
                font-size: 20px;
                span{
                    font-size: 18px;
                }
            }
        }
    }
}
@media screen and (max-width: 991px){
    .overlay{
        padding-top: 180px;
        .banner-content{
            h6{
                margin-bottom: 30px;
            }
            p{
                font-size: 18px;
                margin-bottom: 20px;
                span{
                    font-size: 16px;
                }
            }
        }
    }
}

@media screen and (max-width: 768px){
    .overlay{
        padding-top: 160px;
        .banner-content{
            h6{
                margin-bottom: 20px;
            }
            p{
                font-size: 16px;
                margin-bottom: 15px;
                span{
                    font-size: 14px;
                }
            }
        }
    }
}


`;

export default AboutBannerStyle;
