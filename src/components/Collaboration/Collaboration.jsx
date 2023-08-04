import collaborationImg1 from "../../img/collaboration-img-1.jpg";
import collaborationImg2 from "../../img/collaboration-img-2.jpg";
import {
  Btn,
  FirstImg,
  ImgWrapper,
  SecondImg,
  Section,
  Subtitle,
  Title,
} from "./Collaboration.styled";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";

export default function Collaboration() {
  const theme = useContext(ThemeContext);
  return (
    <Section>
      <ImgWrapper theme={theme}>
        <FirstImg
          src={collaborationImg1}
          alt="two people sitting behind the table and working on laptop"
        />
        {/* <SecondImgWrapper> */}
        <SecondImg
          src={collaborationImg2}
          alt="group of people on business meeting"
        />
        {/* </SecondImgWrapper> */}
      </ImgWrapper>
      <div>
        <Subtitle theme={theme}>Interesting Collaboration With Us?</Subtitle>
        <Title theme={theme}>Help you to reach your business goal</Title>
        <Btn theme={theme} type="button">
          Get Started
        </Btn>
      </div>
    </Section>
  );
}
