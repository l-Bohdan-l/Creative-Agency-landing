import clientPhoto from "../../img/clientPhoto.jpg";
import {
  ClientName,
  ClientPosition,
  Image,
  ImageBlockWrapper,
  ImageWrapper,
  List,
  ListItem,
  Review,
  TestimonialContainer,
  TestimonialSubtitle,
  TestimonialTitle,
} from "./Testimonial.styled";

export default function Testimonial() {
  return (
    <TestimonialContainer>
      <TestimonialTitle>Testimonial</TestimonialTitle>
      <TestimonialSubtitle>People Talk about us</TestimonialSubtitle>
      <List>
        <ListItem>
          <ImageBlockWrapper>
            <ImageWrapper>
              <Image src={clientPhoto} alt="client" />
            </ImageWrapper>
            <div>
              <ClientName>Angel Rose</ClientName>
              <ClientPosition>Creative Manager</ClientPosition>
            </div>
          </ImageBlockWrapper>
          <Review>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit”
          </Review>
        </ListItem>
        <ListItem>
          <ImageBlockWrapper>
            <ImageWrapper>
              <Image src={clientPhoto} alt="client" />
            </ImageWrapper>
            <div>
              <ClientName>Angel Rose</ClientName>
              <ClientPosition>Creative Manager</ClientPosition>
            </div>
          </ImageBlockWrapper>
          <Review>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit”
          </Review>
        </ListItem>
        <ListItem>
          <ImageBlockWrapper>
            <ImageWrapper>
              <Image src={clientPhoto} alt="client" />
            </ImageWrapper>
            <div>
              <ClientName>Angel Rose</ClientName>
              <ClientPosition>Creative Manager</ClientPosition>
            </div>
          </ImageBlockWrapper>
          <Review>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit”
          </Review>
        </ListItem>
      </List>
    </TestimonialContainer>
  );
}
