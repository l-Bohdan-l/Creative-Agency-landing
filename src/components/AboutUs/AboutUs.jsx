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

export const AboutUs = () => {
  return (
    <AboutUsContainer>
      <MainTitle>About Us</MainTitle>
      <AboutUsSubtitle>Our Teammate</AboutUsSubtitle>
      <AboutUsWrapper>
        <AboutUsContent>
          <AboutUsText>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business2
          </AboutUsText>
          <AboutUsText second="true">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque
            tempor at ut auctor maecenas,Lorem ipsum d
          </AboutUsText>
          <AboutUsBtnWrapper>
            <AboutUsBtn>About Us</AboutUsBtn>
            <AboutUsBtn second="true">
              <PlayCircleIcon />
              About Us
            </AboutUsBtn>
          </AboutUsBtnWrapper>
        </AboutUsContent>
        <AboutUsPicture>
          <AboutUsImg src={aboutUsImg} alt="about us" />
        </AboutUsPicture>
      </AboutUsWrapper>
    </AboutUsContainer>
  );
};
