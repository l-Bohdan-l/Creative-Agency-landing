import * as React from "react";

// import Typography from '@mui/material/Typography';
import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  ButtonStyled,
  MenuIconStyled,
  Wrapper,
  BoxStyled,
  ModalNav,
  ModalListItem,
  ModalButtonStyled,
} from "./Modal.styled";

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <ModalButtonStyled onClick={handleOpen}>
        <MenuIconStyled />
      </ModalButtonStyled>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ backgroundColor: "#000000d4" }}
      >
        <BoxStyled>
          <ModalNav>
            <ModalListItem>
              <a onClick={handleClose} href="#hero">
                Home
              </a>
            </ModalListItem>
            <ModalListItem>
              <a onClick={handleClose} href="#about">
                About
              </a>
            </ModalListItem>
            <ModalListItem>
              <a onClick={handleClose} href="#service">
                Service
              </a>
            </ModalListItem>
            <ModalListItem>
              <a onClick={handleClose} href="#projects">
                Projects
              </a>
            </ModalListItem>
          </ModalNav>

          <ButtonStyled type="button">Contact Us</ButtonStyled>
        </BoxStyled>
        {/* {children} */}
      </Modal>
    </Wrapper>
  );
}
