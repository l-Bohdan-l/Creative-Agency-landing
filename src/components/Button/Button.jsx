import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import { ButtonStyled, MdDarkModeStyled } from "./Button.styled";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";

export const Button = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <ButtonStyled theme={theme} type="button" onClick={toggleTheme}>
        {theme === "light" && <MdDarkMode size={25} fill="black" />}
        {theme === "dark" && <BsSunFill size={25} fill="white" />}
      </ButtonStyled>
    </div>
  );
};
