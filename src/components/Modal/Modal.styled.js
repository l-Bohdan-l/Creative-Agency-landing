// import { Menu } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "styled-components";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

export const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  padding: 5px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  opacity: 1;
  z-index: 1000;
`;

export const ModalNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;
`;

export const ModalListItem = styled.li`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.18px;
  text-transform: capitalize;
  opacity: 0.8;
  &:hover,
  &:focus {
    opacity: 1;
    box-shadow: 0px 0px 0px 2px #e2e2e2;
  }
`;

export const MenuIconStyled = styled(MenuIcon)`
  color: ${(props) => (props.theme === "dark" ? "#e2e2e2" : "#1d1d1d")};
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ModalButtonStyled = styled(Button)`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  padding: 12px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  border: 1px solid #e2e2e2;
  border-radius: 24px;
  background-color: transparent;
  color: #e2e2e2;
  cursor: pointer;
  opacity: 0.5;

  &:hover,
  &:focus {
    color: #f2f2f2;
    border: 1.5px solid #f2f2f2;
    opacity: 1;
  }
`;
