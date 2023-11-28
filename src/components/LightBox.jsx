import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import HandlerNotes from "./HandlerNotes"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: "50vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const LightBox = ({ handleEventEl = null, content = null, type= "text" }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);

    return (
    <>
            {handleEventEl == null ? (
            <Button onClick={handleClick}>Abrir</Button>
            ) : (
            <div onClick={handleClick}>{handleEventEl}</div>
        )}
        <Modal open={open}>
            {content == null ? (
            <Box sx={style}>
                <CloseIcon onClick={handleClick} sx={{position:"absolute", top:5,right:5 }}/>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Light Box
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Ingrese el elemento a renderizar como contenido.
                </Typography>
            </Box>
            ) : (
            <Box sx={style}>
                <CloseIcon onClick={handleClick} sx={{position:"absolute", top:1,right:1 }}/>
                {type==="text"?content:<HandlerNotes>{content}</HandlerNotes>}
            </Box>
            )}
        </Modal>
    </>
    );
};

export default LightBox;

