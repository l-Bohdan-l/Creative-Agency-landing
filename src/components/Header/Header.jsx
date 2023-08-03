import logo from "../../img/logo-without-text.png";
// import { BoxStyled, ButtonStyled, ModalListItem, ModalNav } from '../Modal/Modal.styled';
import {
  ButtonStyled,
  HeaderStyled,
  Logo,
  ModalListItem,
  HeaderNav,
  LogoWrapper,
  LogoText,
  LogoTextSpan,
} from "./Header.styled";
import BasicModal from "../Modal/Modal";
import { Button } from "../Button/Button";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";
export const Header = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);
  return (
    <HeaderStyled>
      {/* <LogoWrapper>
        <Logo src={logo} alt="company logo" />
        <Button toggleTheme={toggleTheme} />
      </LogoWrapper> */}
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
        <LogoText theme={theme}>
          Agency
          <br></br>
          <LogoTextSpan>Creative</LogoTextSpan>
        </LogoText>
        <Button toggleTheme={toggleTheme} />
      </LogoWrapper>
      <BasicModal />
      <HeaderNav>
        <ModalListItem theme={theme}>
          <a href="#hero">Home</a>
        </ModalListItem>
        <ModalListItem theme={theme}>
          <a href="#about">About</a>
        </ModalListItem>
        <ModalListItem theme={theme}>
          <a href="#service">Service</a>
        </ModalListItem>
        <ModalListItem theme={theme}>
          <a href="#projects">Projects</a>
        </ModalListItem>
      </HeaderNav>
      <ButtonStyled theme={theme} type="button">
        Contact Us
      </ButtonStyled>
    </HeaderStyled>
  );
};
