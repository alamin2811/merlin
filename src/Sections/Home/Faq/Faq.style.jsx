import styled from "styled-components";

const FaqStyle = styled.div`
    padding-bottom: 140px;
    .faq-content{
        max-width: 930px;
        width: 100%;
        margin: auto;
    }
    .accordion-container{
        margin-top: 40px;
        .ac{
            border-radius: 20px;
            background: rgba(255, 255, 255, 0.08);
            border: none;
            margin-bottom: 20px;
            position: relative;
            transition: 0.4s;
            &.active{
                &::before{
                    content: '';
                    height: 100%;
                    width: 30%;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    border-radius: 20px 0px 0px 20px;
                    background: linear-gradient(90deg, rgba(18, 207, 167, 0.10) 0%, rgba(18, 207, 167, 0.00) 100%);
                    z-index: 0;
                }
                &::after{
                    content: '';
                    height: 100%;
                    width: 30%;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                    border-radius: 0px 20px 20px 0px;
                    background: linear-gradient(90deg, rgba(18, 207, 167, 0.00) 0%, rgba(18, 207, 167, 0.10) 100%);
                    z-index: 0;
                }
            }
            h2{
                margin-bottom: 0px;
                font-size: auto;
            }
            button{
                color: #FFF;
                font-family: Lexend;
                font-size: 22px;
                font-style: normal;
                font-weight: 700;
                line-height: 30px; 
                padding: 28px 30px;
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 20px;
                text-align: left;
                width: 100%;
                position: relative;
                    z-index: 1;
                img{
                    min-width: 18px;
                }
            }
        }
        .ac-panel{
            padding: 0px 30px 25px 30px;
            transition: 0.4s;
            p{
                margin-bottom: 0px;
                color: rgba(255, 255, 255, 0.90);
                font-family: Lexend;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 30px;
            }
        }
    }

    @media screen and (max-width: 1199px){
        
    }
    @media screen and (max-width: 991px){
        padding-bottom: 80px;
    }
    @media screen and (max-width: 768px){
        padding-top: 30px;
        padding-bottom: 20px;
        .accordion-container {
            .ac {
                button{
                    font-size: 20px;
                }
            }
        }
    }
    @media screen and (max-width: 575px){
        .accordion-container {
            .ac {
                button{
                    font-size: 18px;
                }
            }
        }
    }
`;

export default FaqStyle;
