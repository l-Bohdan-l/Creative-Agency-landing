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
export default function Portfolio() {
  return (
    <PortfolioContainer id="projects">
      <MainTitle>Our Portfolio</MainTitle>
      <SubTitle>What do we do</SubTitle>
      <MainParagraph>
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
      <Button type="button">See All Portfolio</Button>
    </PortfolioContainer>
  );
}
