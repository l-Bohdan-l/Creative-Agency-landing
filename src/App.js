import "./App.css";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { ContainerStyled } from "./components/Container/Container.styled";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
function App() {
  return (
    <>
      <ContainerStyled>
        <Header />
        <Hero />
        <AboutUs />
      </ContainerStyled>
    </>
  );
}

export default App;
