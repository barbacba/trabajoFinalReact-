import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

const LightBox = ({ handleEventEl = null, content = null }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);

    return (
    <>
            {handleEventEl == null ? (
            <Button onClick={handleClick}>Abrir</Button>
            ) : (
            <div onClick={handleClick}>{handleEventEl}</div>
        )}
        <Modal open={open} onClose={handleClick}>
            {content == null ? (
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Light Box
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Ingrese el elemento a renderizar como contenido.
                </Typography>
            </Box>
            ) : (
            content
            )}
        </Modal>
    </>
    );
};

export default LightBox;

