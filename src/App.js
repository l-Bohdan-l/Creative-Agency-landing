
import './App.css';
import { ContainerStyled } from './components/Container/Container.styled';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
function App() {
  return (
    <>
      <ContainerStyled>
        <Header />
        <Hero />
      </ContainerStyled>
    </>
  );
}

export default App;
