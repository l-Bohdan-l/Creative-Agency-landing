import {
  AboutUsSubtitle,
  Button,
  List,
  MainText,
  MainTitle,
  OurServicesSection,
} from "./OurServices.styled";
import pen from "../../img/svg/pen-tool.svg";

import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";

export default function OurServices() {
  return (
    <OurServicesSection>
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
      <List>
        <li>
          <div>
            <div>
              <DesktopWindowsOutlinedIcon />
            </div>
            <p>Social Media Management</p>
          </div>
        </li>
        <li>
          <div>
            <div>
              <SettingsOutlinedIcon />
            </div>
            <p>Search Engine Optimization</p>
          </div>
        </li>
        <li>
          <div>
            <div>
              <img src={pen} alt="pen" />
            </div>
            <p>Design</p>
          </div>
        </li>
        <li>
          <div>
            <div>
              <LiveTvOutlinedIcon />
            </div>
            <p>Ads</p>
          </div>
        </li>
      </List>
    </OurServicesSection>
  );
}
