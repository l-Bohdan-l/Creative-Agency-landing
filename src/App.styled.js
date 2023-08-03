import styled from "styled-components";

export const BGWrapper = styled.div`
  /* background-color: ${(props) =>
    props.theme === "dark" ? "#0d0d0d" : "#FDFFFF"}; */
  z-index: 100;
  /* background-color: #0d0d0d; */
  position: relative;
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
    background-position: top 10px right 10px, top 15px right 15px,
      top 20px right 20px, top 30px right 30px;
  }
`;
