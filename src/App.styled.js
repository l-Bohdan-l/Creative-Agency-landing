import styled from "styled-components";

export const BGWrapper = styled.div`
  background-color: ${(props) =>
    props.theme === "dark" ? "#0d0d0d" : "#FDFFFF"};
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 1439px) {
    background-image: url("./img/svg/orangeDot.svg"),
      url("./img/svg/blueDot.svg");
    background-repeat: no-repeat;
    background-position: top 130px right 0, top 330px left -30px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url("./img/svg/orangeDot.svg"),
      url("./img/svg/blueDot.svg"), url("./img/svg/orangeDot2.svg"),
      url("./img/svg/blueDot2.svg");
    background-repeat: no-repeat;
    background-position: top 280px right 0, top 430px left 95px,
      top 800px left 280px, top 607px right 194px;
  }
`;
