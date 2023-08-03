import "./App.css";
import { createContext, useContext, useState } from "react";
import { AboutUs } from "./components/AboutUs/AboutUs";
import Collaboration from "./components/Collaboration/Collaboration";
import { ContainerStyled } from "./components/Container/Container.styled";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import OurServices from "./components/Services/OurServices";
import Testimonial from "./components/Testimonial/Testimonial";
// import { Button } from "./components/Button/Button";
import { ThemeContext } from "./hooks/themeContext";
import { BGWrapper, Wrapper } from "./App.styled";

function App() {
  const [theme, setTheme] = useState("dark");
  // const ThemeContext = createContext(null);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("theme", theme);
  };

  const bodyTheme = document.body;
  bodyTheme.style.backgroundColor = theme === "dark" ? "#0d0d0d" : "#FDFFFF";

  return (
    // <BGWrapper theme={theme}>
    //   <Wrapper
    //   // theme={theme}
    //   >
    <ThemeContext.Provider value={theme}>
      <ContainerStyled>
        <Header toggleTheme={toggleTheme} />
        <Hero />
        <AboutUs />
        <OurServices />
        <Portfolio />
        <Testimonial />
        <Collaboration />
        {/* <Button toggleTheme={toggleTheme} /> */}
      </ContainerStyled>
      <Footer />
    </ThemeContext.Provider>
    //{" "}
    //   </Wrapper>
    // </BGWrapper>
  );
}

export default App;
