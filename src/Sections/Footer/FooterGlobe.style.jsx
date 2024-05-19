import styled from "styled-components";

const FooterGlobeStyle = styled.div`
    position: relative;
   
.footer-globe-content{
    max-width: 944px;
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .logo-icon{
        position: absolute;
        z-index: 10;
        bottom: 12%;
    }
    .globe-img{
        max-width: 450px;
        margin: auto;
        text-align: center;
        margin-top: -60px;
        position: relative;
        z-index: 1;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        &::after{
            content: '';
            border-radius: 432px;
            background: rgba(18, 207, 167, 0.70);
            filter: blur(50px);
            height: 100%;
            width: 100%;
            border-radius: 50%;
            position: absolute;
            z-index: 0;
        }
        .globe{
            position: relative;
            z-index: 1;
        }
        .cloud1{
            position: absolute;
            top: 51px;
            left: 42px;
            z-index: 2;
        }
        .cloud2{
            position: absolute;
            top: 150px;
            left: -350px;
            z-index: 2;
        }
        .cloud3{
            position: absolute;
            top: 72px;
            right: -350px;
            z-index: 2;
        }
        .cloud4{
            position: absolute;
            top: 175px;
            right: -20px;
            z-index: 2;
        }
    }
}

@media screen and (max-width: 1199px){
    .footer-globe-content{
        max-width: 755px;
    }
}
@media screen and (max-width: 991px){
    .footer-globe-content{
        max-width: 560px;
    }
}

@media screen and (max-width: 480px){
        &::after{
            height: 200px;
        }
        &::before{
            bottom: 140px;
        }
        .footer-globe-content {
            .logo-icon{
                bottom: 4%;
            }
        }
}


`;

export default FooterGlobeStyle;
