import {
  ClientImg,
  HeroContainer,
  HeroImage,
  HeroImgPicture,
  HeroImgWrapper,
  HeroSubtitle,
  RatingFirstSubtitle,
  RatingSecondSubtitle,
  RatingSecondSubtitleWrapper,
  RatingStar,
  RatingWrapper,
  Review,
  ReviewClientName,
  ReviewClientPhotoWrapper,
  ReviewClientPosition,
  ReviewWrapper,
  StyledButton,
  Title,
} from "./Hero.styled";
import heroImg from "../../img/hero-img.jpg";
import star from "../../img/svg/star.svg";
import clientPhoto from "../../img/clientPhoto.png";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";

/* cSpell:enable */
export const Hero = () => {
  const theme = useContext(ThemeContext);
  return (
    <HeroContainer id="hero">
      <Title theme={theme}> Make your dream business goal come true </Title>
      <HeroSubtitle theme={theme}>
        when you need us for improve your business, then come with us to help
        your business have reach it, you just sit and feel that goal.
      </HeroSubtitle>
      <StyledButton theme={theme}>Start Project</StyledButton>
      <HeroImgWrapper>
        <RatingWrapper theme={theme}>
          <RatingStar src={star} alt="star" width="16" />
          <RatingFirstSubtitle theme={theme}>Great Project</RatingFirstSubtitle>
          <RatingSecondSubtitle theme={theme}>
            800+ <RatingSecondSubtitleWrapper>Done</RatingSecondSubtitleWrapper>
          </RatingSecondSubtitle>
        </RatingWrapper>
        <HeroImgPicture theme={theme}>
          <HeroImage
            src={heroImg}
            alt="group fo people sitting behind the desk"
          />
        </HeroImgPicture>
        <ReviewWrapper theme={theme}>
          <ReviewClientPhotoWrapper>
            <ClientImg src={clientPhoto} alt="smiling man in a t-shirt" />
            <div>
              <ReviewClientName theme={theme}>Bill Adams</ReviewClientName>
              <ReviewClientPosition theme={theme}>
                CEO UpTech
              </ReviewClientPosition>
            </div>
          </ReviewClientPhotoWrapper>
          <Review theme={theme}>
            “ This team is really the best in its field,I don't regret working
            with them, and will come back again thanks “
          </Review>
        </ReviewWrapper>
      </HeroImgWrapper>
    </HeroContainer>
  );
};
