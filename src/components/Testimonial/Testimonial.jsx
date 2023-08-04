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
import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";

export default function Testimonial() {
  const theme = useContext(ThemeContext);
  return (
    <TestimonialContainer>
      <TestimonialTitle theme={theme}>Testimonial</TestimonialTitle>
      <TestimonialSubtitle theme={theme}>
        People Talk about us
      </TestimonialSubtitle>
      <List>
        <ListItem theme={theme}>
          <ImageBlockWrapper>
            <ImageWrapper>
              <Image src={clientPhoto} alt="client" />
            </ImageWrapper>
            <div>
              <ClientName theme={theme}>Angel Rose</ClientName>
              <ClientPosition theme={theme}>Creative Manager</ClientPosition>
            </div>
          </ImageBlockWrapper>
          <Review theme={theme}>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit”
          </Review>
        </ListItem>
        <ListItem theme={theme}>
          <ImageBlockWrapper>
            <ImageWrapper>
              <Image src={clientPhoto} alt="client" />
            </ImageWrapper>
            <div>
              <ClientName theme={theme}>Angel Rose</ClientName>
              <ClientPosition theme={theme}>Creative Manager</ClientPosition>
            </div>
          </ImageBlockWrapper>
          <Review theme={theme}>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit”
          </Review>
        </ListItem>
        <ListItem theme={theme}>
          <ImageBlockWrapper>
            <ImageWrapper>
              <Image src={clientPhoto} alt="client" />
            </ImageWrapper>
            <div>
              <ClientName theme={theme}>Angel Rose</ClientName>
              <ClientPosition theme={theme}>Creative Manager</ClientPosition>
            </div>
          </ImageBlockWrapper>
          <Review theme={theme}>
            “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit”
          </Review>
        </ListItem>
      </List>
    </TestimonialContainer>
  );
}
