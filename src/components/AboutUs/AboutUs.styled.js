import { styled } from "styled-components";
import purpleDots from "../../img/svg/purpleDots.svg";
import orangeDots from "../../img/svg/orangeDots.svg";

export const AboutUsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 66px; */
  margin-bottom: 99px;

  @media screen and (min-width: 1440px) {
    /* flex-direction: row-reverse; */
    margin-bottom: 159px;
  }
`;

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
    gap: 65px;
    align-items: end;
  }
`;

export const AboutUsContent = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

export const MainTitle = styled.h2`
  /* color: #e2e2e2; */
  color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#377DFF")};
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.14px;
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    font-weight: 600;
    line-height: 24px; /* 100% */
    letter-spacing: 0.24px;
    margin-bottom: 20px;
  }
`;

export const AboutUsSubtitle = styled.h3`
  color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#1D1D1D")};
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.072px;
  margin-bottom: 35px;

  @media screen and (min-width: 1440px) {
    font-size: 55px;
    letter-spacing: 0.165px;
  }
`;

export const AboutUsText = styled.p`
  /* color: #e2e2e2; */
  color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#464646")};
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.14px;
  margin-bottom: ${(props) => (props.second ? "35px" : "10px")};

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 32px; /* 160% */
    letter-spacing: 0.2px;
    margin-bottom: 24px;
  }
`;

export const AboutUsBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin-bottom: 66px;
  @media screen and (min-width: 1440px) {
    gap: 25px;
  }
`;

export const AboutUsBtn = styled.button`
  /* width: 150px; */
  /* height: 38px; */
  color: ${(props) => {
    // props.second ? "#E2E2E2" : "#0d0d0d"
    if (props.second && props.theme === "dark") {
      return "#E2E2E2";
    }
    if (props.second && props.theme === "light") {
      return "#377DFF";
    }
    if (!props.second && props.theme === "dark") {
      return "#0d0d0d";
    }
    if (!props.second && props.theme === "light") {
      return "#ffffff";
    }
  }};
  font-family: Quicksand;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  padding: 10px 35px;
  line-height: 18px; /* 150% */
  letter-spacing: 0.12px;
  border-radius: 24px;
  /* background: ${(props) => (props.second ? "#0d0d0d" : "#e2e2e2")}; */
  background: ${(props) => {
    if (props.second && props.theme === "dark") {
      return "#0d0d0d";
    }
    if (props.second && props.theme === "light") {
      return "#ffffff";
    }
    if (!props.second && props.theme === "dark") {
      return "#e2e2e2";
    }
    if (!props.second && props.theme === "light") {
      return "#377DFF";
    }
  }};
  box-shadow: ${(props) =>
    props.second ? "none" : "0px 4px 8px 0px rgba(55, 125, 255, 0.5)"};
  /* border: 0.7px solid #e2e2e2; */
  border: ${(props) => {
    if (props.second && props.theme === "dark") {
      return "0.7px solid #E2E2E2";
    }
    if (props.second && props.theme === "light") {
      return "0.7px solid #377DFF";
    }
    if (!props.second && props.theme === "dark") {
      return "0.7px solid #E2E2E2";
    }
    if (!props.second && props.theme === "light") {
      return "none";
    }
  }};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    /* background: ${(props) => (props.second ? "#fff" : "#377DFF")}; */
    background: ${(props) => {
      if (props.second && props.theme === "dark") {
        return "#ffffff";
      }
      if (props.second && props.theme === "light") {
        return "#377DFF";
      }
      if (!props.second && props.theme === "dark") {
        return "#000000";
      }
      if (!props.second && props.theme === "light") {
        return "#ffffff";
      }
    }};
    /* color: ${(props) => (props.second ? "#000" : "#E2E2E2")}; */
    color: ${(props) => {
      if (props.second && props.theme === "dark") {
        return "#000";
      }
      if (props.second && props.theme === "light") {
        return "#ffffff";
      }
      if (!props.second && props.theme === "dark") {
        return "#E2E2E2";
      }
      if (!props.second && props.theme === "light") {
        return "#000000";
      }
    }};
    box-shadow: ${(props) =>
      props.second ? "none" : "0px 4px 8px 0px rgba(55, 125, 255, 0.5)"};
    /* border: ${(props) =>
      props.second ? "0.7px solid #000" : "0.7px solid #377DFF"}; */
    border: ${(props) => {
      if (props.second && props.theme === "dark") {
        return "0.7px solid #000";
      }
      if (props.second && props.theme === "light") {
        return "0.7px solid #ffffff";
      }
      if (!props.second && props.theme === "dark") {
        return "0.7px solid #ffffff";
      }
      if (!props.second && props.theme === "light") {
        return "none";
      }
    }};
  }

  @media screen and (min-width: 1440px) {
    padding: 12px 50px;
    font-size: 16px;
    line-height: 24px; /* 150% */
    letter-spacing: 0.16px;
  }
`;

export const AboutUsImg = styled.img`
  width: 340px;
  height: 242px;
  border-radius: 12px;

  @media screen and (min-width: 1440px) {
    width: 565px;
    height: 402px;
  }
`;

export const AboutUsPicture = styled.picture`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background-image: url(${purpleDots});
    background-repeat: no-repeat;
    background-size: contain;
    width: 98px;
    height: 70px;
    top: -12px;
    left: 0px;
    z-index: -1;
    display: inline-block;
    @media screen and (min-width: 1440px) {
      bottom: -9px;
      right: -37px;
      top: unset;
      left: unset;
    }
  }

  @media screen and (min-width: 1440px) {
    &::after {
      content: "";
      position: absolute;
      background-image: url(${orangeDots});
      background-repeat: no-repeat;
      background-size: contain;
      width: 98px;
      height: 70px;
      top: -18px;
      left: -30px;
      z-index: -1;
      display: inline-block;
    }
  }
`;
