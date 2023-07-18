import logo from '../../img/logo.png'
// import { BoxStyled, ButtonStyled, ModalListItem, ModalNav } from '../Modal/Modal.styled';
import { ButtonStyled, HeaderStyled, Logo, ModalListItem, HeaderNav } from './Header.styled';
import BasicModal from '../Modal/Modal'
export const Header = () => { 
    return (
        <HeaderStyled>
            <Logo src={logo} alt="company logo" /> 
            <BasicModal />           
                <HeaderNav>
                    <ModalListItem>
                    <a href='#'>Home</a>
                    </ModalListItem>
                    <ModalListItem>
                    <a href='#'>About</a>
                    </ModalListItem>
                    <ModalListItem>
                    <a href='#'>Service</a>
                    </ModalListItem>
                    <ModalListItem>
                    <a href='#'>Projects</a>
                    </ModalListItem>
                </HeaderNav>
                <ButtonStyled type='button'>Contact Us</ButtonStyled>           
        </HeaderStyled>
    );
};