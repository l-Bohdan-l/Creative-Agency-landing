import { styled } from "styled-components";

export const FooterStyled = styled.footer`
  background: #383638;
`;

export const LogoWrapper = styled.div`
  border-radius: 20px;
  background: #e2e2e2;
  width: 187px;
  height: 88px;
  box-sizing: border-box;
  padding: 19px 25px;
  display: flex;
  gap: 10px;
  margin-bottom: 80px;
`;

export const Logo = styled.img`
  width: 53px;
  height: 50px;
  display: inline-block;
`;

export const LogoText = styled.p`
  color: var(--black-color, #1d1d1d);
  font-family: Quicksand;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 120% */
  letter-spacing: 0.2px;
`;

export const LogoTextSpan = styled.span`
  font-family: Quicksand;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
`;

export const ListTitle = styled.p`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 23.4px */
  margin-bottom: 30px;

  @media screen and (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const ListItem = styled.li`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    font-weight: 400;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 45px;
  @media screen and (min-width: 1440px) {
    gap: 70px;
  }
`;

export const LocationWrapper = styled.div`
  width: 250px;
  margin-bottom: 90px;
`;

export const ContactWrapper = styled.div`
  margin-bottom: 45px;
`;

export const SocialList = styled.ul`
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SocialListItem = styled.li`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #e2e2e2;
  color: #383638;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CopyrightWrapper = styled.div`
  width: 100%;
  /* max-width: 390px; */
  padding-top: 20px;
  padding-right: 19px;
  padding-left: 19px;
  padding-bottom: 60px;
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 1439px) {
    max-width: 390px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 72px;
    padding-right: 100px;
    padding-left: 100px;
    padding-bottom: 35px;
    width: 1440px;
  }
`;

export const CopyRightText = styled.p`
  color: #e2e2e2;
  font-family: Quicksand;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CopyRightBorder = styled.div`
  border-top: 1px solid #e2e2e2;
`;

export const ContainerStyled = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-right: 25px;
  padding-left: 25px;
  padding-bottom: 0;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: 1439px) {
    max-width: 390px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 132px;
    padding-right: 100px;
    padding-left: 100px;
    padding-bottom: 35px;
    width: 1440px;
  }
`;

export const FooterDescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 70px;
`;
