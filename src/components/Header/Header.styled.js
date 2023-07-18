import { Box } from "@mui/material";
import { styled } from "styled-components";

export const HeaderStyled = styled.header`
   margin-bottom: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const Logo = styled.img`
   width: 91px;
   height: 33px;

   @media screen and (min-width: 1440px) {
      width: 136px;
      height: 50px;  
   }
`;

export const HeaderNav = styled.nav`
   @media screen and (max-width: 1439px) {
      display: none;
   }
     @media screen and (min-width: 1440px) {
      display: flex;
      list-style: none;
      gap: 50px;
    }
`;

export const ModalListItem = styled.li`
    color: #E2E2E2;
   font-family: Quicksand;
   font-size: 18px;
   font-style: normal;
   font-weight: 700;
   line-height: 24px; /* 133.333% */
   letter-spacing: 0.18px;
   text-transform: capitalize;
    &:hover,
    &:focus {
        color: #F2F2F2;
    }
`;

export const ButtonStyled = styled.button`

   @media screen and (max-width: 1439px) {
      display: none;
   }

   color: #E2E2E2;
   font-family: Quicksand;
   font-size: 16px;
   font-style: normal;
   font-weight: 700;
   line-height: 24px; /* 150% */
   letter-spacing: 0.16px;

    display: flex;
    padding: 12px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 24px;
    border: 1px solid #E2E2E2;
    border-radius: 24px;
    background-color: transparent;
    cursor: pointer;

    &:hover,
    &:focus {
        color: #F2F2F2;
        border: 1px solid #F2F2F2;
    }
`;