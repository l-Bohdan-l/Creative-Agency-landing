import { styled } from "styled-components";
import greyDots from "../../img/svg/greyDots.svg";
import orangeDots from "../../img/svg/orangeDots.svg";
import blueDot from "../../img/svg/blueDot.svg";
import orangeDot from "../../img/svg/orangeDot.svg";

export const HeroContainer = styled.section`
  margin-bottom: 100px;
  @media screen and (min-width: 1440px) {
    margin-bottom: 195px;
  }
`;

export const Title = styled.h1`
  color: #e2e2e2;
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
  color: #e2e2e2;
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
  background: #e2e2e2;
  box-shadow: 0px 4px 8px 0px rgba(55, 125, 255, 0.5);
  margin: 0 auto;
  display: block;

  color: #0d0d0d;
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

  @media screen and (min-width: 1440px) {
    width: 740px;
    height: 500px;
    border-radius: 50px;
  }
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

    @media screen and (min-width: 1440px) {
      top: -20px;
      left: 400px;
    }
  }

  &::after {
    content: "";
    background-image: url(${orangeDots});
    background-repeat: no-repeat;
    background-size: contain;
    width: 98px;
    height: 70px;
    position: absolute;
    top: -12px;
    right: -12px;
    z-index: -1;
    display: inline-block;

    @media screen and (min-width: 1440px) {
      top: 440px;
      left: 400px;
    }
  }
`;

export const RatingWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 3;
  top: -15px;
  left: -9px;
  width: 99px;
  height: 53px;
  border-radius: 6px;
  background: #0d0d0d;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.15);
  padding-top: 5px;
  padding-right: 15px;
  padding-bottom: 9px;
  padding-left: 13px;

  @media screen and (min-width: 1440px) {
    width: 175px;
    height: 95px;
    top: 15px;
    left: 140px;
    padding-top: 14px;
    padding-bottom: 16px;
  }
`;

export const RatingFirstSubtitle = styled.p`
  display: inline-block;
  color: #e2e2e2;
  text-align: center;
  font-family: Quicksand;
  font-size: 6px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.06px;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 5px;

  @media screen and (min-width: 1440px) {
    font-size: 12px;
    letter-spacing: 0.12px;
    margin-bottom: 10px;
  }
`;

export const RatingStar = styled.img`
  display: inline-block;
  transform: translateY(4px);
  margin-right: 3px;
  @media screen and (min-width: 1440px) {
    width: 24px;
  }
`;

export const RatingSecondSubtitle = styled.p`
  color: #e2e2e2;
  text-align: center;
  font-family: Nunito;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.12px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    letter-spacing: 0.24px;
  }
`;

export const RatingSecondSubtitleWrapper = styled.span`
  font-weight: 400;
`;

export const HeroImgWrapper = styled.div`
  position: relative;
`;

export const ClientImg = styled.img`
  width: 15px;
  height: 15px;

  @media screen and (min-width: 1440px) {
    width: 32px;
    height: 32px;
  }
`;

export const ReviewWrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: -11px;
  bottom: -21px;
  width: 80px;
  height: 80px;
  padding-top: 12px;
  padding-right: 9px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: #0d0d0d;
  border-radius: 6px;

  @media screen and (min-width: 1440px) {
    width: 166px;
    height: 166px;
    padding-top: 30px;
    padding-right: 20px;
    padding-bottom: 25px;
    padding-left: 20px;
    right: 140px;
    bottom: -5px;
  }
`;

export const ReviewClientName = styled.p`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 5px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.05px;

  @media screen and (min-width: 1440px) {
    font-size: 10px;
    letter-spacing: 0.1px;
  }
`;

export const ReviewClientPosition = styled.p`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 3px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.03px;
  opacity: 0.5;

  @media screen and (min-width: 1440px) {
    font-size: 6px;
    letter-spacing: 0.06px;
  }
`;

export const ReviewClientPhotoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  margin-bottom: 5px;

  @media screen and (min-width: 1440px) {
    gap: 10px;
    margin-bottom: 12px;
  }
`;

export const Review = styled.p`
  color: #e2e2e2;
  font-family: Nunito;
  font-size: 5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.05px;
  width: 60px;

  @media screen and (min-width: 1440px) {
    font-size: 10px;
    letter-spacing: 0.1px;
    width: 125px;
  }
`;
