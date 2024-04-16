import styled from "styled-components";

const TokenTagStyle = styled.div`
        padding: 0px 0px 121px 0px;
.crypto-token-tag-inner{
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.crypto-token-tag-list{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    animation: smoothSlider 25s infinite linear;
    .tag {
        font-family: "Quantico", sans-serif;
        margin-right: 30px;
        padding: 0px 30px;
        font-weight: 700;
        font-size: 24px;
        line-height: 250%;
        text-transform: uppercase;
        text-align: center;
        color: #000000;
        border-radius: 50px;
        &.skyblue{
            background: #AEE3FD;
        }
        &.skyblue2{
            background: #ADFFEB;
        }
        &.skyblue3{
            background: #ADE5FF;
        }
        &.offwhite{
            background: #FFF8E7;
        }
        &.pink{
            background: #FF7BCA;
        }
        &.yellow{
            background: #F2DD09;
        }
        &.yellowgreen{
            background: #BFFF0A;
        }
    }
}


@media screen and (max-width: 991px){
        padding: 0px 0px 80px 0px;
    .crypto-token-tag-list {
        .tag{
            padding: 0px 18px;
            font-size: 18px;
        }
    }
}

@media screen and (max-width: 767px){
        padding: 60px 0px;
}





`;

export default TokenTagStyle;
