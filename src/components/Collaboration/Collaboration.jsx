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

export default function Collaboration() {
  return (
    <Section>
      <ImgWrapper>
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
        <Subtitle>Interesting Collaboration With Us?</Subtitle>
        <Title>Help you to reach your business goal</Title>
        <Btn type="button">Get Started</Btn>
      </div>
    </Section>
  );
}
