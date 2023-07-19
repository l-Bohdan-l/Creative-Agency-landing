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
/* cSpell:enable */
export const Hero = () => {
  return (
    <HeroContainer>
      <Title> Make your dream business goal come true </Title>
      <HeroSubtitle>
        when you need us for improve your business, then come with us to help
        your business have reach it, you just sit and feel that goal.
      </HeroSubtitle>
      <StyledButton>Start Project</StyledButton>
      <HeroImgWrapper>
        <RatingWrapper>
          <RatingStar src={star} alt="star" width="16" />
          <RatingFirstSubtitle>Great Project</RatingFirstSubtitle>
          <RatingSecondSubtitle>
            800+ <RatingSecondSubtitleWrapper>Done</RatingSecondSubtitleWrapper>
          </RatingSecondSubtitle>
        </RatingWrapper>
        <HeroImgPicture>
          <HeroImage
            src={heroImg}
            alt="group fo people sitting behind the desk"
          />
        </HeroImgPicture>
        <ReviewWrapper>
          <ReviewClientPhotoWrapper>
            <ClientImg src={clientPhoto} alt="smiling man in a t-shirt" />
            <div>
              <ReviewClientName>Bill Adams</ReviewClientName>
              <ReviewClientPosition>CEO UpTech</ReviewClientPosition>
            </div>
          </ReviewClientPhotoWrapper>
          <Review>
            “ This team is really the best in its field,I don't regret working
            with them, and will come back again thanks “
          </Review>
        </ReviewWrapper>
      </HeroImgWrapper>
    </HeroContainer>
  );
};
