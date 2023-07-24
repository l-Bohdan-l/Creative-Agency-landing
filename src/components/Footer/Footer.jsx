import {
  ContactWrapper,
  CopyRightBorder,
  CopyRightText,
  CopyrightWrapper,
  FooterStyled,
  ListItem,
  ListTitle,
  ListWrapper,
  LocationWrapper,
  Logo,
  LogoText,
  LogoTextSpan,
  LogoWrapper,
  SocialList,
  SocialListItem,
  ContainerStyled,
  FooterDescriptionWrapper,
} from "./Footer.styled";
import logo from "../../img/logo-without-text.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import facebook from "../../img/svg/facebook.svg";
import twitter from "../../img/svg/twitter.svg";
import linkedin from "../../img/svg/linkedin.svg";

export default function Footer() {
  return (
    <FooterStyled>
      <ContainerStyled>
        <FooterDescriptionWrapper>
          <LogoWrapper>
            <Logo src={logo} alt="logo" />
            <LogoText>
              Agency
              <br></br>
              <LogoTextSpan>Creative</LogoTextSpan>
            </LogoText>
          </LogoWrapper>
          <ListWrapper>
            <div>
              <ListTitle>Terms & policies</ListTitle>
              <ul>
                <ListItem>Terms of Service</ListItem>
                <ListItem>Privacy Policy</ListItem>
              </ul>
            </div>
            <div>
              <ListTitle>Company </ListTitle>
              <ul>
                <ListItem>Home </ListItem>
                <ListItem>About Us</ListItem>
                <ListItem>Contact Us</ListItem>
              </ul>
            </div>
          </ListWrapper>
          <ContactWrapper>
            <ListTitle>Contact</ListTitle>
            <ul>
              <ListItem>
                <a href="tel:(+62)893912392190">(+62) 893912392190</a>
              </ListItem>
              <ListItem>
                <a href="mailto: agecnycr@gmail.com">agecnycr@gmail.com</a>
              </ListItem>
            </ul>
          </ContactWrapper>
          <LocationWrapper>
            <ListTitle>Location</ListTitle>
            <ul>
              <ListItem>
                Location PT Osiris Real Estate Internasional Jl. KH. Wahid
                Hasyim Kel No.10D Jakarta, Indonesia
              </ListItem>
              <ListItem>team@OsirisRealEstate.com</ListItem>
            </ul>
          </LocationWrapper>
        </FooterDescriptionWrapper>
        <SocialList>
          <SocialListItem>
            <img src={facebook} width="21px" alt="facebook" />
          </SocialListItem>
          <SocialListItem>
            <InstagramIcon sx={{ fontSize: 21 }} />
          </SocialListItem>
          <SocialListItem>
            <img src={linkedin} width="21px" alt="linkedin" />
          </SocialListItem>
          <SocialListItem>
            <MailOutlineIcon sx={{ fontSize: 21 }} />
          </SocialListItem>
          <SocialListItem>
            <img src={twitter} width="21px" alt="twitter" />
          </SocialListItem>
        </SocialList>
      </ContainerStyled>
      <CopyRightBorder>
        <CopyrightWrapper>
          <CopyRightText>
            Copyright @ 2022 Agency Creative. All Right Reserved
          </CopyRightText>
        </CopyrightWrapper>
      </CopyRightBorder>
    </FooterStyled>
  );
}
