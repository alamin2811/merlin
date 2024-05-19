import styled from "styled-components";

const MissionVisionStyle = styled.div`
    padding-bottom: 50px;
    padding-bottom: 80px;
    .mission-vision-content{
        max-width: 1440px;
        padding: 0px 20px;
        margin: auto;
    }
    .mission-vision-card{
        position: relative;
        overflow: hidden;
        border-radius: 30px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
        padding: 40px;
        min-height: 100%;
        .shape{
            position: absolute;
            top: 0px;
            z-index: 0;
            &.mission-shape{
                left: 0px;
            }
            &.vision-shape{
                right: 0px;
            }
        }
        h3{
            color: #FFF;
            font-family: Quantico;
            font-size: 45px;
            font-weight: 700;
            line-height: 177.778%;
            text-transform: uppercase;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }
        p{
            color: #FFF;
            font-family: Lexend;
            font-size: 16px;
            font-weight: 400;
            line-height: 200%;
            position: relative;
            z-index: 1;
        }
    }
    
@media screen and (max-width: 1199px){
    .mission-vision-card{
        padding: 25px;
        h3{
            font-size: 40px;
        }
    }
}
@media screen and (max-width: 991px){
    padding-bottom: 60px;
    .mission-vision-card{
        p{
            font-size: 14px;
        }
        h3{
            font-size: 32px;
        }
    }
}

@media screen and (max-width: 768px){
    padding-bottom: 40px;
    .mission-vision-card{
        min-height: auto;
        margin-bottom: 30px;
        padding: 20px;
    }
}


`;

export default MissionVisionStyle;
