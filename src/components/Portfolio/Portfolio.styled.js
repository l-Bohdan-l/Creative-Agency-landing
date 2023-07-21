import { styled } from "styled-components";

export const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 140px;
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
  text-align: center;
  margin-bottom: 10px;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
    line-height: 24px; /* 100% */
    letter-spacing: 0.24px;
    margin-bottom: 20px;
  }
`;

export const SubTitle = styled.p`
  color: #e2e2e2;
  text-align: center;
  font-family: Nunito;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.072px;
  margin-bottom: 34px;

  @media screen and (min-width: 1440px) {
    font-size: 55px;
    letter-spacing: 0.165px;
    margin-bottom: 28px;
  }
`;

export const MainParagraph = styled.p`
  color: #e2e2e2;
  text-align: center;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.14px;
  margin-bottom: 34px;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    line-height: 34px; /* 170% */
    letter-spacing: 0.2px;
    margin-bottom: 48px;
    width: 674px;
  }
`;

export const PortfolioList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 54px;
  margin-bottom: 50px;

  @media screen and (min-width: 1440px) {
    flex-direction: row-reverse;
  }
`;

export const PortfolioListItem = styled.li`
  width: ${(props) => (props.width ? props.width : "300px")};
  height: ${(props) => (props.height ? props.width : "300px")};
  overflow: hidden;
  border-radius: 30px;
  position: relative;
  @media screen and (min-width: 1440px) {
    width: ${(props) => (props.widthtablet ? props.widthtablet : "350px")};
    height: ${(props) => (props.heighttablet ? props.heighttablet : "350px")};
  }
`;

export const PortfolioImg = styled.img`
  object-fit: cover;
  transform: translateX(-90px);
  height: ${(props) => (props.height ? props.height : "unset")};

  @media screen and (min-width: 1440px) {
    height: ${(props) => (props.heighttablet ? props.heighttablet : "350px")};
  }
`;

export const PortfolioImgSpan = styled.span`
  position: absolute;
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 24px */
  letter-spacing: 0.072px;
  bottom: 24px;
  left: 24px;
`;

export const Button = styled.button`
  padding: 10px 35px;
  border-radius: 24px;
  border: 1px solid #e2e2e2;
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: 0.16px;
  background-color: transparent;

  @media screen and (min-width: 1440px) {
    padding: 12px 50px;
    font-size: 16px;
    line-height: 24px; /* 150% */
    letter-spacing: 0.16px;
  }
`;
