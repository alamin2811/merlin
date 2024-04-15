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
                z-index: 1;
            }
            &.about-marlin-img2{
                right: 0px;
                top: 130px;
                z-index: 2;
            }
        }
        .about-marlin-shape{
            position: absolute;
            width: 150%;
            top: -80px;
            left: -28%;
            img{
                transform: rotate(-16.905deg);
            }
        }
    }

`;

export default AboutMerlinStyle;
