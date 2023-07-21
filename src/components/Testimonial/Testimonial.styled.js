import { styled } from "styled-components";
import blueDots from "../../img/svg/blueDots.svg";

export const TestimonialContainer = styled.section`
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    position: relative;
    margin-bottom: 240px;
    &::before {
      content: "";
      position: absolute;
      background-image: url(${blueDots});
      background-repeat: no-repeat;
      background-size: contain;
      width: 98px;
      height: 70px;
      top: 0px;
      left: 100px;
      z-index: -1;
      display: inline-block;
    }
    &::after {
      content: "";
      position: absolute;
      background-image: url(${blueDots});
      background-repeat: no-repeat;
      background-size: contain;
      width: 98px;
      height: 70px;
      bottom: -30px;
      right: -30px;
      z-index: -1;
      display: inline-block;
    }
  }
`;

export const TestimonialTitle = styled.h2`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.14px;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 24px; /* 100% */
    letter-spacing: 0.24px;
    margin-bottom: 20px;
  }
`;

export const TestimonialSubtitle = styled.p`
  color: #e2e2e2;
  text-align: center;
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.072px;
  margin-bottom: 35px;
  text-align: center;

  @media screen and (min-width: 1440px) {
    font-size: 55px;
    letter-spacing: 0.165px;
    margin-bottom: 50px;
  }
`;
export const List = styled.ul`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
  }
`;

export const ListItem = styled.li`
  border-radius: 20px;
  background: #0b0f15;
  box-shadow: 0px 8px 24px 0px rgba(0, 0, 0, 0.05);
  padding: 40px;

  @media screen and (max-width: 1439px) {
    &:not(:first-child) {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 380px;
    height: 335px;
  }
`;

export const ImageBlockWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  margin-bottom: 35px;
`;

export const ImageWrapper = styled.div`
  border-radius: 70px;
  width: 70px;
  height: 70px;
  overflow: hidden;
`;

export const Image = styled.img`
  /* border-radius: 70px; */
  width: 70px;
  height: 70px;
  object-fit: cover;
`;

export const ClientName = styled.p`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.18px;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 34px; /* 170% */
    letter-spacing: 0.2px;
  }
`;

export const ClientPosition = styled.p`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.11px;
  opacity: 0.5;

  @media screen and (min-width: 1440px) {
    line-height: 34px; /* 309.091% */
  }
`;

export const Review = styled.p`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.14px;
  opacity: 0.8;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 28px; /* 155.556% */
    letter-spacing: 0.18px;
  }
`;
