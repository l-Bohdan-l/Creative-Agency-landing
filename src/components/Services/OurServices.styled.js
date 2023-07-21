import { styled } from "styled-components";

export const OurServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 76px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const MainTitle = styled.h2`
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
    margin-bottom: 32px;
    text-align: left;
  }
`;

export const AboutUsSubtitle = styled.h3`
  color: #e2e2e2;
  text-align: center;
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.072px;
  margin-bottom: 35px;

  @media screen and (min-width: 1440px) {
    font-size: 55px;
    line-height: 130%; /* 71.5px */
    letter-spacing: 0.165px;
    margin-bottom: 18px;
    text-align: left;
  }
`;

export const MainText = styled.p`
  color: #e2e2e2;
  text-align: center;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.14px;
  margin-bottom: 4px;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 32px; /* 160% */
    letter-spacing: 0.2px;
    text-align: left;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: flex-start;
  margin-bottom: 27px;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 34px; /* 170% */
    letter-spacing: 0.2px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 29px;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-bottom: 27px;

  background-color: ${(props) => {
    // return props.position === "first" && "#E2E2E2";
    switch (props.position) {
      case "first":
        return "#E2E2E2";
      case "second":
        return "#FF4646";
      case "third":
        return "#8EEA77";
      case "fourth":
        return "#FFB21A";
      default:
        return "#E2E2E2";
    }
  }};
`;

export const IconStyled = styled.img`
  height: 42px;
`;

export const ListItemText = styled.p`
  box-sizing: border-box;
  color: #e2e2e2;
  text-align: center;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: 0.16px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 34px; /* 141.667% */
    letter-spacing: 0.24px;
  }
`;

export const ListItem = styled.li`
  box-sizing: border-box;
  padding: 35px 81px;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 262px;
  height: 269px;

  @media screen and (min-width: 1440px) {
    padding: 35px 45px;
  }
`;

export const OurServiceWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    width: 1100px;
  }
`;
