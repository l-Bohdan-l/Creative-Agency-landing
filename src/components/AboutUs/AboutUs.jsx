import {
  AboutUsBtn,
  AboutUsBtnWrapper,
  AboutUsContainer,
  AboutUsContent,
  AboutUsImg,
  AboutUsPicture,
  AboutUsSubtitle,
  AboutUsText,
  AboutUsWrapper,
  MainTitle,
} from "./AboutUs.styled";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import aboutUsImg from "../../img/about-us-img.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";

export const AboutUs = () => {
  const theme = useContext(ThemeContext);
  return (
    <AboutUsContainer id="about">
      <MainTitle theme={theme}>About Us</MainTitle>
      <AboutUsSubtitle theme={theme}>Our Teammate</AboutUsSubtitle>
      <AboutUsWrapper>
        <AboutUsContent>
          <AboutUsText theme={theme}>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business2
          </AboutUsText>
          <AboutUsText theme={theme} second="true">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque
            tempor at ut auctor maecenas,Lorem ipsum d
          </AboutUsText>
          <AboutUsBtnWrapper>
            <AboutUsBtn theme={theme}>About Us</AboutUsBtn>
            <AboutUsBtn theme={theme} second="true">
              <PlayCircleIcon />
              About Us
            </AboutUsBtn>
          </AboutUsBtnWrapper>
        </AboutUsContent>
        <AboutUsPicture>
          <AboutUsImg src={aboutUsImg} alt="people behind the table" />
        </AboutUsPicture>
      </AboutUsWrapper>
    </AboutUsContainer>
  );
};
