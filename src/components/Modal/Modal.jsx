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
      >
        <BoxStyled>
          <ModalNav>
            <ModalListItem>
              <a href="#">Home</a>
            </ModalListItem>
            <ModalListItem>
              <a href="#">About</a>
            </ModalListItem>
            <ModalListItem>
              <a href="#">Service</a>
            </ModalListItem>
            <ModalListItem>
              <a href="#">Projects</a>
            </ModalListItem>
          </ModalNav>

          <ButtonStyled type="button">Contact Us</ButtonStyled>
        </BoxStyled>
        {/* {children} */}
      </Modal>
    </Wrapper>
  );
}
