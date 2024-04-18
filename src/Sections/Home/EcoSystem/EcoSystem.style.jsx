import styled from "styled-components";

const EcoSystemStyle = styled.div`
    position: relative;
    p{
        font-size: 16px;
        line-height: 200%;
        text-align: center;
        color: rgba(255, 255, 255, 0.8);
        max-width: 970px;
        margin: auto;
        margin-top: 25px;
        margin-bottom: 55px;
    }

.ecosystem-text {
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px;
        list-style: none;
        margin-bottom: 0px;

        li {
            width: 20%;
            font-size: 18px;
            padding: 0px 12px;
            text-align: center;
            font-weight: 500 !important;
            margin-bottom: 13px;
            color: #ffffff;
            line-height: 30px;
            background: linear-gradient(180deg, #82FFE4 0%, #FFF 100%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-transform: uppercase;
            &:nth-child(2){
                width: 40%;
            }
            &:nth-last-child(2){
                width: 40%;
            }
        }
    }
}
.ecosystem-content{
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
.eco-line-pc {
    display: block;
}

.eco-line-mobile {
    display: none;
}


.defi-launchapp-btn {
    width: 220px;
    height: 60px;
    border-radius: 30px;
    background: #12CFA7;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    color: #FFFFFF !important;
    position: relative;
    overflow: hidden;
    margin: auto;
    margin-bottom: 72px;
    font-weight: 700;
    font-family: Quantico;
    text-transform: uppercase;
    img{
        transition: 0.3s;
        margin-left: 14px;
    }
    &:hover{
        color: #111111;
        img{
            transform: rotate(-45deg);
        }
    }
}

@media screen and (max-width: 1199px){
    .ecosystem-content{
        max-width: 755px;
    }
}
@media screen and (max-width: 991px){
    p{
        font-size: 14px; 
    }
    .ecosystem-text {
        ul{
            li{
                font-size: 13px;
            }
        }
    }
    .ecosystem-content{
        max-width: 560px;
    }
}
@media screen and (max-width: 767px){
        padding-top: 50px;
        p{
            font-size: 16px;
            margin-bottom: 30px;
        }
    .ecosystem-text {
        ul{
            flex-wrap: wrap;
            justify-content: center;
            margin: 0px -30px;
            margin-bottom: 40px;
            li{
                width: 50%;
                line-height: 20px;
                &:nth-child(1){
                    text-align: left;
                    padding: 0px;
                }
                &:nth-child(2){
                    text-align: right;
                    padding: 0px;
                }
                &:nth-child(3){
                    text-align: right;
                    padding-right: 20px;
                }
                &:nth-child(4){
                    text-align: left;
                    padding-left: 20px;
                }
            }
        }
    }
    .defi-launchapp-btn{
        margin-bottom: 50px;
    }
    .ecosystem-text{
        margin-bottom: -100px;
        position: relative;
        z-index: 1;
    }
    
    .ecosystem-text ul li{
        &:nth-child(3){
            padding-left: 80px;
            text-align: left;
        }
        &:nth-child(4){
            padding-right: 80px;
            text-align: right;
        }
    }
    .eco-line-pc {
        display: none;
    }

    .eco-line-mobile {
        display: block;
        position: relative;
        z-index: 0;
    }
    
}
@media screen and (max-width: 575px){
    /*-- defi index start --*/
    .ecosystem-text ul{
        margin: 0px -20px;
        margin-bottom: 40px;
        li{
        &:nth-child(3){
            padding: 0px;
            padding-left: 17px;
        }
        &:nth-child(4){
            padding: 0px;
            padding-right: 17px;
        }
    }
    } 
}
@media screen and (max-width: 480px){
        &::after{
            height: 200px;
        }
        &::before{
            bottom: 140px;
        }
        .ecosystem-content {
            .logo-icon{
                bottom: 4%;
            }
        }
}
@media screen and (max-width: 375px){
    .ecosystem-text ul li{
        
    }
}

`;

export default EcoSystemStyle;
