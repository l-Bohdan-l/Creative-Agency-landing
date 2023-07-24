import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import Collaboration from "./components/Collaboration/Collaboration";
import { ContainerStyled } from "./components/Container/Container.styled";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import OurServices from "./components/Services/OurServices";
import Testimonial from "./components/Testimonial/Testimonial";
function App() {
  return (
    <>
      <ContainerStyled>
        <Header />
        <Hero />
        <AboutUs />
        <OurServices />
        <Portfolio />
        <Testimonial />
        <Collaboration />
      </ContainerStyled>
      <Footer />
    </>
  );
}

export default App;
