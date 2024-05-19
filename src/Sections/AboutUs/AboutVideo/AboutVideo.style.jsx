import styled from "styled-components";

const AboutVideoStyle = styled.div`
    padding-top: 70px;
    padding-bottom: 130px;
    .about-video-card{
        width: 100%;
        border-radius: 30px;
        overflow: hidden;
        position: relative;
        video{
            z-index: 0;
            width: 100%;
            height: 100%;
            -o-object-fit: fill;
            object-fit: fill;
            border-radius: 30px;
        }
        .video-overlay{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 30px;
            background: rgba(0, 0, 0, 0.50);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 99%;
            .play-btn{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100px;
                width: 100px;
                border-radius: 50%;
                background: #FFFFFF;
                padding: 20px;
            }
        }
    }
   
@media screen and (max-width: 1199px){
    
}
@media screen and (max-width: 991px){
    padding-bottom: 100px;
    .about-video-card{
        .video-overlay{
            height: 98%;
                .play-btn{
                    height: 80px;
                    width: 80px;
                }
            }
    }
    
}

@media screen and (max-width: 768px){
    padding-top: 50px;
    padding-bottom: 70px;
    .about-video-card{
        .video-overlay{
            height: 97%;
                .play-btn{
                    height: 60px;
                    width: 60px;
                }
            }
    }
}

@media screen and (max-width: 480px){
    padding-top: 50px;
    padding-bottom: 70px;
    .about-video-card{
        .video-overlay{
            height: 96%;
                .play-btn{
                    height: 60px;
                    width: 60px;
                }
            }
    }
}


`;

export default AboutVideoStyle;
