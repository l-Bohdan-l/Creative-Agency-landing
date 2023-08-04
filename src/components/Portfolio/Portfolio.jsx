import {
  Button,
  MainParagraph,
  MainTitle,
  PortfolioContainer,
  PortfolioImg,
  PortfolioImgSpan,
  PortfolioList,
  PortfolioListItem,
  SubTitle,
} from "./Portfolio.styled";
import firstImage from "../../img/portfolio-first-img.jpg";
import secImage from "../../img/portfolio-sec-img.jpg";
import thirdImage from "../../img/portfolio-third-img.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";
export default function Portfolio() {
  const theme = useContext(ThemeContext);
  return (
    <PortfolioContainer id="projects">
      <MainTitle theme={theme}>Our Portfolio</MainTitle>
      <SubTitle theme={theme}>What do we do</SubTitle>
      <MainParagraph theme={theme}>
        all projects that we have already done , proven can help to use more
        comfortable, then can used by client from our business
      </MainParagraph>
      <PortfolioList>
        <PortfolioListItem>
          <PortfolioImg src={firstImage} alt="phone on the desk" />
          <PortfolioImgSpan>Design Furniture App</PortfolioImgSpan>
        </PortfolioListItem>
        <PortfolioListItem
          width="340px"
          widthtablet="400px"
          height="338px"
          heighttablet="400px"
        >
          <PortfolioImg
            height="338px"
            heighttablet="400px"
            src={secImage}
            alt="writing board"
          />
          <PortfolioImgSpan>Cloud App</PortfolioImgSpan>
        </PortfolioListItem>
        <PortfolioListItem>
          <PortfolioImg src={thirdImage} alt="two mobile phones" />
          <PortfolioImgSpan>Design Byte App</PortfolioImgSpan>
        </PortfolioListItem>
      </PortfolioList>
      <Button theme={theme} type="button">
        See All Portfolio
      </Button>
    </PortfolioContainer>
  );
}
