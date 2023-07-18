import { styled } from "styled-components";
import greyDots from '../../img/svg/greyDots.svg';
import orangeDots from '../../img/svg/orangeDots.svg'

export const Title = styled.h1`
    color: #E2E2E2;
    text-align: center;
    font-family: Nunito;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.28px;
    margin-bottom: 20px;

    @media screen and (min-width: 1440px) {
        font-size: 64px;
        font-style: normal;
        letter-spacing: 0.64px;
        width: 750px;
        margin: 0 auto;
        margin-bottom: 24px;
    }
`;

export const HeroSubtitle = styled.p`
    color: #E2E2E2;
    text-align: center;
    font-family: Nunito;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.14px;
    opacity: 0.6000000238418579;
    margin-bottom: 30px;

    @media screen and (min-width: 1440px) {
        font-size: 20px;
        line-height: 150%; /* 30px */
        letter-spacing: 0.2px;
        width: 770px;
        margin: 0 auto;
        margin-bottom: 30px;
    }
`;

export const StyledButton = styled.button`
    width: 145px;
    height: 40px;
    border-radius: 24px;
    background: #E2E2E2;
    box-shadow: 0px 4px 8px 0px rgba(55, 125, 255, 0.50);
    margin: 0 auto;
    display: block;

    color: #0D0D0D;
    font-family: Quicksand;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px; /* 150% */
    letter-spacing: 0.12px;
    margin-bottom: 40px;   

    @media screen and (min-width: 1440px) {
        width: 200px;
        height: 48px;

        font-size: 16px;
        line-height: 24px; /* 150% */
        letter-spacing: 0.16px;
        margin-bottom: 40px;   
    }
`;

export const HeroImage = styled.img`
    display: block;
    width: 330px;
    height: 224px;
    margin: 0 auto;
    border-radius: 12px;

    
`;

export const HeroImgPicture = styled.picture`
    position: relative;
    &::before {
        content: ""; 
        background-image: url(${greyDots});
        background-repeat: no-repeat;
        background-size: contain;
        width: 98px;
        height: 70px;
        position: absolute;
        bottom: -15px;
        left: -10px;
        z-index: -1;
        display: inline-block;
    }
`;