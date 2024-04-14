import styled from "styled-components";

const GetUpdatesStyle = styled.div`
    position: relative;
    z-index: 7;
    padding-top: 90px;
    overflow: hidden;
.get-updates-top{
    text-align: center;
    max-width: 912px;
    width: 100%;
    margin: auto;
    position: relative;
    
    a{
        img{
            margin-bottom: 36px;
        }
    }
    .dotted-line{
        position: absolute;
        top: 0px;
        width: 100%;
        left: 0px;
        z-index: -1;
        top: -75px;
    }
}

.get-updates-form{
    background: rgba(255, 255, 255, 0.1);
    border-radius: 35px;
    max-width: 570px;
    width: 100%;
    padding: 10px;
    margin: auto;
    margin-bottom: 60px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input{
        width: 80%;
        border: none;
        outline: none;
        overflow: hidden;
        background: transparent;
        padding: 5px 20px;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        color: #ffffff;
        &::placeholder{
            color: rgba(255, 255, 255, 0.5);
        }
    }
    button{
        padding: 8px 25px;
        border: none;
        outline: none;
        overflow: hidden;
        border-radius: 35px;
        background: #12CFA7;
        color: #FFF;
        font-family: Quantico;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 166.667%;
        height: 50px;
        width: 150px;
        text-transform: uppercase;
        &:hover{
            opacity: 0.5s;
        }
    }
}

.get-update-card{
    padding: 40px 30px 33px 30px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
    h5{
        color: #ffffff;
        margin-bottom: 18px;
        text-transform: uppercase;
        span{
            margin-right: 18px;
            img{
                max-width: 28px;
            }
        }
    }
    p{
        margin-bottom: 0px;
        color: rgba(255, 255, 255, 0.8);
    }
}

@media screen and (max-width: 1199px){
    .get-update-card {
        padding: 20px;
        p{
            font-size: 14px;
        }
    }
}

`; 

export default GetUpdatesStyle;
