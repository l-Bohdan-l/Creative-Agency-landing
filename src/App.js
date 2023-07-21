import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ContainerStyled } from "./components/Container/Container.styled";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import OurServices from "./components/Services/OurServices";
function App() {
  return (
    <>
      <ContainerStyled>
        <Header />
        <Hero />
        <AboutUs />
        <OurServices />
        <Portfolio />
      </ContainerStyled>
    </>
  );
}

export default App;
