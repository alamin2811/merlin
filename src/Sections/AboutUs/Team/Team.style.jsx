import styled from "styled-components";

const TeamStyle = styled.div`
padding-top: 120px;
padding-bottom: 140px;
.team-card{
    border-radius: 30px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 120px;
    padding: 0px 10px 24px 10px;
    &::after{
        content: url(assets/images/img/team-shape.png);
        position: absolute;
        z-index: 0;
    }
    .team-member-img{
        margin-top: -60px;
    }
    .card-content{
        position: relative;
        z-index: 1;
    }
    h5{
        color: #FFF;
        text-align: center;
        font-family: Quantico;
        font-weight: 700;
        text-transform: uppercase;
    }
    h6{
        color: rgba(255, 255, 255, 0.80);
        font-family: Lexend;
        font-weight: 300 !important;
        text-align: center;
    }
    &.big-card{
        h5{
            font-size: 22px;
        }
        h6{
            font-size: 16px;
        }
    }
    &.small-card{
        h5{
            font-size: 20px;
        }
        h6{
            font-size: 15px;
        }
    }
}

.team-row{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 0px -15px;
    flex-wrap: wrap;
    .team-col{
        padding: 0px 15px;
        width: 20%;
    }
    &.author{
        margin-top: 130px;
        .team-col{
            width: 25%;
        }
    }
}
.footer-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    position: relative;
    z-index: 999;
}
    
    
@media screen and (max-width: 1480px){
    .team-row{
        .team-col{
            width: 25%;
        }
        &.author{
            .team-col{
                width: 33.33%;
        }
    }
}
}
@media screen and (max-width: 1199px){
    padding-top: 100px;
    .footer-logo{
        margin-top: 0px;
    }
    .team-row.author{
        margin-top: 100px;
    }
    .team-card{
        &.small-card {
            h5{
                font-size: 18px;
            }
            h6{
                font-size: 13px;
            }
        }
    }
}
@media screen and (max-width: 991px){
    padding-top: 80px;
    .team-card{
        &.big-card {
            h5{
                font-size: 20px;
            }
            h6{
                font-size: 16px;
            }
        }
        &.small-card {
            h5{
                font-size: 18px;
            }
            h6{
                font-size: 14px;
            }
        }
    }
    .team-row{
        .team-col{
            width: 33.33%;
        }
        &.author{
            .team-col{
                width: 50%;
            }
        }
    }
}

@media screen and (max-width: 768px){
    padding-top: 70px;
    .team-row{
        .team-col{
            width: 45%;
        }
    }
    .team-card{
        margin-bottom: 100px;
    }
}
@media screen and (max-width: 575px){
    .team-row{
        .team-col{
            width: 50%;
        }
        &.author{
            .team-col{
                width: 90%;
            }
        }
    }
    .team-card{
        margin-bottom: 85px;
    }
}
@media screen and (max-width: 480px){
    .team-row{
        .team-col{
            width: 80%;
        }
        &.author{
            .team-col{
                width: 100%;
            }
        }
    }
    .footer-logo{
        margin-bottom: -60px;
    }
}


`;

export default TeamStyle;
