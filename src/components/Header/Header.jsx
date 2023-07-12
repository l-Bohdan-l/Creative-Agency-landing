import logo from '../../img/logo.png'
import BasicMenu from '../Modal/Modal';
import { HeaderStyled } from './Header.styled';
export const Header = () => { 
    return (
        <HeaderStyled>
            <img src={logo} alt="company logo" />
            <BasicMenu />
        </HeaderStyled>
    );
};