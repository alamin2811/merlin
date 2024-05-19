
import styled from "styled-components";

const AboutTestimonialStyle = styled.div`
    padding-top: 40px;
    
    .about-testimonial-card{
        border-radius: 30px;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.05) 100%);
        padding: 30px;
        position: relative;
        .about-testimonial-img{
            position: absolute;
            z-index: 1;
            bottom: 0px;
            width: 30%;
            z-index: 0;
        }
    }

    .about-testimonial-content{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .about-testimonial-text{
        width: 70%;
        margin-left: auto;
        p{
            color: #FFF;
            font-family: Lexend;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 36px;
            position: relative;
            z-index: 1;
        }
        .name{
            border-radius: 40px;
            background: linear-gradient(90deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%);
            backdrop-filter: blur(10px);
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 10px;
            gap: 15px;
            max-width: 320px;
            margin-top: 20px;
            margin-left: -80px;
            position: relative;
            z-index: 1;
            .icon{
                height: 60px;
                width: 60px;
                border-radius: 50%;
                background: #12CFA7;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .text{
                h5  {
                    color: #FFF;
                    font-family: Quantico;
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 30px; 
                    margin-bottom: 0px;
                }
                h6{
                    color: #FFF;
                    font-family: Lexend;
                    font-size: 16px;
                    font-weight: 400 !important;
                    line-height: 30px;
                    margin-bottom: 0px;
                }
            }
        }
    }
    
@media screen and (max-width: 1199px){
    
}
@media screen and (max-width: 991px){
    .about-testimonial-content{
        flex-direction: column;
    }
    .about-testimonial-text{
        width: 100%;
        margin-bottom: 220px;
        .name{
            margin-left: 0px;
            position: absolute;
            left: 15%;
            bottom: 25px;
        }
    }
    .about-testimonial-card {
        .about-testimonial-img{
            width: 200px;
            left: 25px;
        }
    }
}

@media screen and (max-width: 480px){
    .about-testimonial-text{
        width: 100%;
    }
}


`;

export default AboutTestimonialStyle;
