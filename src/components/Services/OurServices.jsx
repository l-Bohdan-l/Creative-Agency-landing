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
import penWhite from "../../img/svg/pen-tool-white.svg";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext";

export default function OurServices() {
  const theme = useContext(ThemeContext);
  return (
    <OurServicesSection id="service">
      <OurServiceWrapper>
        <MainTitle theme={theme}>Our Services</MainTitle>
        <AboutUsSubtitle theme={theme}>
          Perfect and Fast Movement
        </AboutUsSubtitle>
        <MainText theme={theme}>
          We move with make a Creative Strategy for help your business goal, we
          help to improve your income by a services we have. make your content
          look interesting and make people look for your business
        </MainText>
        <Button theme={theme}>
          Read more <ArrowForwardOutlinedIcon />
        </Button>
      </OurServiceWrapper>
      <List>
        <ListItem theme={theme}>
          <div>
            <IconWrapper theme={theme} position="first">
              <DesktopWindowsOutlinedIcon
                sx={{
                  fontSize: 42,
                  fill: theme === "dark" ? "black" : "white",
                }}
              />
            </IconWrapper>
            <ListItemText theme={theme}>Social Media Management</ListItemText>
          </div>
        </ListItem>
        <ListItem theme={theme}>
          <div>
            <IconWrapper theme={theme} position="second">
              <SettingsOutlinedIcon
                sx={{
                  fontSize: 42,
                  fill: theme === "dark" ? "black" : "white",
                }}
              />
            </IconWrapper>
            <ListItemText theme={theme}>
              Search Engine Optimization
            </ListItemText>
          </div>
        </ListItem>
        <ListItem theme={theme}>
          <div>
            <IconWrapper theme={theme} position="third">
              {theme === "dark" && <IconStyled src={pen} alt="pen" />}
              {theme === "light" && <IconStyled src={penWhite} alt="pen" />}
            </IconWrapper>
            <ListItemText theme={theme}>Design</ListItemText>
          </div>
        </ListItem>
        <ListItem theme={theme}>
          <div>
            <IconWrapper theme={theme} position="fourth">
              <LiveTvOutlinedIcon
                sx={{
                  fontSize: 42,
                  fill: theme === "dark" ? "black" : "white",
                }}
              />
            </IconWrapper>
            <ListItemText theme={theme}>Ads</ListItemText>
          </div>
        </ListItem>
      </List>
    </OurServicesSection>
  );
}
