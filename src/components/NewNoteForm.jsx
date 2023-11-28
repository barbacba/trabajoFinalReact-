import React, {useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
export default function NewNoteForm ({ addNote }) {
    const [title, setTitle] = useState(''); 
    const [content, setContent] = useState(''); 
    return (
    <>
        <Box 
        component="form"
        onSubmit={(e) => {
            e.preventDefault();
            addNote({ content: content, title: title });
        }}
        >
        <TextField 
            id="title"
            fullWidth
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo"
        />
        <TextField
            id="content"
            multiline
            fullWidth
            variant="filled" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Ingrese su texto"
        />
        <Button type="submit">Guardar</Button>
        </Box>
    </>
    );
};
