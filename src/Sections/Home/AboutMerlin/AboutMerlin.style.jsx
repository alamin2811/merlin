import styled from "styled-components";

const AboutMerlinStyle = styled.div`
    padding-top: 140px;
    .about-marlin-text{
        max-width: 550px;
        width: 100%;
        padding-top: 38px;
        p{
            color: #FFFFFF;
            margin-top: 30px;
            line-height: 36px;
        }
    }
    .about-marlin-img{
        max-width: 450px;
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .about-marlin-img-card{
            min-width: 300px;
            min-height: 300px;
            max-width: 300px;
            max-height: 300px;
            position: absolute;
            border-radius: 30px;
            overflow: hidden;
            &.about-marlin-img1{
                left: 0px;
                top: 0px;
                z-index: 0;
            }
            &.about-marlin-img2{
                right: 0px;
                top: 130px;
                z-index: 2;
                border-radius: 35px;
                background: rgba(13, 16, 20, 0.50);
                backdrop-filter: blur(5px);
                padding: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width: 100%;
                    margin: auto;
                    border-radius: 30px;
                }
            }
        }
        .about-marlin-shape{
            position: absolute;
            width: 150%;
            top: -120px;
            z-index: 1;
            left: -26%;
            img{
                transform: rotate(-16.905deg);
            }
        }
    }

    @media screen and (max-width: 1199px){
        .about-marlin-text {
            p{
                margin-top: 10px;
                font-size: 14px;
                line-height: 26px;
            }
        }
    }
    @media screen and (max-width: 991px){
        padding-top: 80px;
        .about-marlin-img {
            .about-marlin-img-card{
                max-width: 200px;
                max-height: 200px;
                min-width: 200px;
                min-height: 200px;
                &.about-marlin-img1{
                    top: 40px;
                }
            }
        }
    }
    @media screen and (max-width: 768px){
        padding-top: 50px;
        .about-marlin-img{
            height: 300px;
            max-width: 300px;
            margin: auto;
            margin-bottom: 60px;
        }
    }
`;

export default AboutMerlinStyle;
