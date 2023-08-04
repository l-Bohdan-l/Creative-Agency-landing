import { MdDarkMode } from "react-icons/md";
import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  /* width: 24px;
  height: 24px; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;

  &:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? "#1d1d1d" : "#e2e2e2"};
    border-radius: 50%;
  }
`;

export const MdDarkModeStyled = styled(MdDarkMode)`
  size: 24px;
  @media screen and (min-width: 1440px) {
    size: 32px;
  }
`;
