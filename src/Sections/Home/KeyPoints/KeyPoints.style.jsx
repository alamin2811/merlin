import styled from "styled-components";

const KeyPointsStyleWrapper = styled.div`
    padding-top: 140px;
    padding-bottom: 128px;
.key-points-card{
    min-height: 100%;
    padding: 40px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    .card-tag{
        padding: 8px 20px;
        background: linear-gradient(90deg, rgba(208, 46, 190, 0.2) 0%, rgba(108, 211, 108, 0.2) 100%);
        border-radius: 20px;
        color: #ffffff;
        position: relative;
        z-index: 2;
        min-height: 40px;
        line-height: 30px;
        font-size: 15px;
        font-weight: 400;
    }
    h3{
        margin-bottom: 25px;
        margin-top: 22px;
        position: relative;
        z-index: 2;
        text-transform: uppercase;
    }
    p{
        margin-bottom: 22px;
        color: rgba(255, 255, 255, 0.8);
        position: relative;
        z-index: 2;
    }
    .card-link{
        color: #12CFA7;
        font-weight: 700;
        transition: 0.3s;
        position: relative;
        z-index: 2;
        text-transform: uppercase;
        img{
            transition: 0.3s;
            margin-left: 14px;
        }
        &:hover{
            img{
                transform: rotate(-45deg);
            }
        }
    }
    .card-img{
        margin-top: 76px;
        position: relative;
        z-index: 2;
    }
    .blur{
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 0;
        opacity: 0;
        transition: 0.5s;
    }
    .doted-line{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        z-index: 0;
        opacity: 0; 
        transition: 0.5s;
    }
    &:hover{
        .blur,
        .doted-line{
            opacity: 1;
        }
    }
}

@media screen and (max-width: 991px){
        padding: 90px 0px 60px 0px;
}
@media screen and (max-width: 767px){
        padding: 70px 0px 0px 0px;
}
@media screen and (max-width: 425px){
    .key-points-card{
        padding: 30px;
    }
}

`; 

export default KeyPointsStyleWrapper;
