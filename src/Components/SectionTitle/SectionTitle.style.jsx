import styled from "styled-components";

const SectionTitleStyleWrapper = styled.div`
  .sub-title{
    color: #12CFA7;
    text-align: center;
    font-family: Lexend;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 166.667%;
    letter-spacing: 3.6px;
    text-transform: uppercase;
  }
  .title{
    color: #FFF;
    font-family: Quantico;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 133.333%;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1199px){
    .title{
      font-size: 45px;
    }
  }
  @media screen and (max-width: 991px){
    .title{
      font-size: 40px;
    }
  }
  @media screen and (max-width: 768px){
    .title{
      font-size: 32px;
    }
  }
  @media screen and (max-width: 540px){
    .title{
      font-size: 30px;
    }
  }
`;

export default SectionTitleStyleWrapper;
