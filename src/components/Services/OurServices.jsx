import {
  AboutUsSubtitle,
  Button,
  IconStyled,
  IconWrapper,
  List,
  ListItem,
  ListItemText,
  MainText,
  MainTitle,
  OurServiceWrapper,
  OurServicesSection,
} from "./OurServices.styled";
import pen from "../../img/svg/pen-tool.svg";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";

export default function OurServices() {
  return (
    <OurServicesSection id="service">
      <OurServiceWrapper>
        <MainTitle>Our Services</MainTitle>
        <AboutUsSubtitle>Perfect and Fast Movement</AboutUsSubtitle>
        <MainText>
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business
        </MainText>
        <Button>
          Read more <ArrowForwardOutlinedIcon />
        </Button>
      </OurServiceWrapper>
      <List>
        <ListItem>
          <div>
            <IconWrapper position="first">
              <DesktopWindowsOutlinedIcon sx={{ fontSize: 42 }} />
            </IconWrapper>
            <ListItemText>Social Media Management</ListItemText>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <IconWrapper position="second">
              <SettingsOutlinedIcon sx={{ fontSize: 42 }} />
            </IconWrapper>
            <ListItemText>Search Engine Optimization</ListItemText>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <IconWrapper position="third">
              <IconStyled src={pen} alt="pen" />
            </IconWrapper>
            <ListItemText>Design</ListItemText>
          </div>
        </ListItem>
        <ListItem>
          <div>
            <IconWrapper position="fourth">
              <LiveTvOutlinedIcon sx={{ fontSize: 42 }} />
            </IconWrapper>
            <ListItemText>Ads</ListItemText>
          </div>
        </ListItem>
      </List>
    </OurServicesSection>
  );
}
