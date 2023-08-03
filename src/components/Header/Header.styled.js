// import { Box } from "@mui/material";
import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  margin-bottom: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  /* width: 91px;
  height: 33px; */
  width: 32px;
  height: 30px;
  display: inline-block;

  @media screen and (min-width: 1440px) {
    width: 53px;
    height: 50px;
  }
`;

export const LogoText = styled.p`
  color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#1d1d1d")};
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.14px;

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const LogoTextSpan = styled.span`
  font-size: 12px;
  font-weight: 400;
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const HeaderNav = styled.nav`
  @media screen and (max-width: 1439px) {
    display: none;
  }
  @media screen and (min-width: 1440px) {
    display: flex;
    list-style: none;
    gap: 50px;
  }
`;

export const ModalListItem = styled.li`
  color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#1D1D1D")};
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.18px;
  text-transform: capitalize;
  opacity: 0.5;
  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const ButtonStyled = styled.button`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#377DFF")};
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: 0.16px;

  display: flex;
  padding: 12px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  border: ${(props) =>
    props.theme === "dark" ? "1px solid #e2e2e2" : "1px solid #377DFF"};
  border-radius: 24px;
  background-color: transparent;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.6;

  &:hover,
  &:focus {
    opacity: 1;
    /* color: #f2f2f2;
    border: 1px solid #f2f2f2; */
  }
`;
