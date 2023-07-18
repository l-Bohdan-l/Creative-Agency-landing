import { styled } from "styled-components";

export const ContainerStyled = styled.div`
    width: 100%;
    /* max-width: 390px; */
    padding-top: 40px;
    padding-right: 25px;
    padding-left: 25px;
    padding-bottom: 60px;
    box-sizing: border-box; 
    margin: 0 auto; 

    @media screen and (max-width: 1439px) {
        max-width: 390px;
    }
    
    @media screen and (min-width: 1440px) {
        padding-top: 72px;
        padding-right: 100px;
        padding-left: 100px;
        padding-bottom: 35px;
        width: 1440px;
    };
        
    
`;