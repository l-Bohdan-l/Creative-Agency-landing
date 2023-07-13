import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { BoxStyled, ButtonStyled, MenuIconStyled, ModalListItem, ModalNav } from './Modal.styled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><MenuIconStyled/></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <BoxStyled>
          <ModalNav>
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
          </ModalNav>

          <ButtonStyled type='button'>Contact Us</ButtonStyled>
        </BoxStyled>
      </Modal>
    </div>
  );
}