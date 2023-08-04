import { styled } from "styled-components";
import whiteDots from "../../img/svg/whiteDots.svg";
import orangeDots from "../../img/svg/orangeDots.svg";
import blueDots from "../../img/svg/blueDotsHero.svg";

export const Section = styled.section`
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    gap: 160px;
    margin-bottom: 178px;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  margin-bottom: 45px;

  @media screen and (min-width: 1440px) {
    &::before {
      content: "";
      position: absolute;
      top: -35px;
      left: -19px;
      /* background-image: url(${whiteDots}); */
      background-image: ${(props) =>
        props.theme === "dark" ? `url(${whiteDots})` : `url(${blueDots})`};
      background-repeat: no-repeat;
      background-size: contain;
      width: 98px;
      height: 70px;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 20px;
      right: -178px;
      background-image: url(${orangeDots});
      background-repeat: space;
      background-size: contain;
      width: 210px;
      height: 70px;
      z-index: -2;
    }
  }
`;

export const FirstImg = styled.img`
  width: 221px;
  height: 196px;
  border-radius: 16px;
  object-fit: cover;

  @media screen and (min-width: 1440px) {
    width: 325px;
    height: 288px;
    position: relative;
  }
`;

export const SecondImg = styled.img`
  width: 180px;
  height: 177px;
  width: 180px;
  height: 177px;
  position: absolute;
  top: -78px;
  right: 0px;
  z-index: -1;
  object-fit: cover;
  border-radius: 16px;

  @media screen and (min-width: 1440px) {
    width: 294px;
    height: 288px;
    top: -92px;
    right: -260px;
  }
`;

export const Subtitle = styled.p`
  /* color: #e2e2e2; */
  color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#1D1D1D")};
  text-align: center;
  font-family: Nunito;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 36.4px */
  letter-spacing: 0.084px;
  margin-bottom: 25px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 55px;
    letter-spacing: 0.165px;
    width: 490px;
    text-align: left;
  }
`;

export const Title = styled.h2`
  /* color: #e2e2e2; */
  color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#464646")};
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; /* 242.857% */
  letter-spacing: 0.14px;
  margin-bottom: 25px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 34px; /* 170% */
    letter-spacing: 0.2px;
    text-align: left;
  }
`;

export const Btn = styled.button`
  /* color: #0d0d0d; */
  color: ${(props) => (props.theme === "dark" ? "#0d0d0d" : "#ffffff")};
  font-family: Quicksand;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  padding: 10px 35px;
  line-height: 18px; /* 150% */
  letter-spacing: 0.12px;
  border-radius: 24px;
  background: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#377dff")};
  box-shadow: 0px 4px 8px 0px rgba(55, 125, 255, 0.5);
  border: 0.7px solid #e2e2e2;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    background: ${(props) => (props.theme === "dark" ? "#377dff" : "#e2e2e2")};
    /* color: #e2e2e2; */
    color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#377dff")};
    box-shadow: 0px 4px 8px 0px rgba(55, 125, 255, 0.5);
  }

  @media screen and (min-width: 1440px) {
    padding: 12px 50px;
    font-size: 16px;
    line-height: 24px; /* 150% */
    letter-spacing: 0.16px;
    margin: 0;
  }
`;
