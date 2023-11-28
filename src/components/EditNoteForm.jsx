import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function EditNoteForm({ card, modifyNote, navigate }) {
    const [title, setTitle] = useState(card.title || ""); 
    const [content, setContent] = useState(card.content || "");

    return (
    <>
        <Box
        component="form"
        onSubmit={(e) => {
            e.preventDefault();
            modifyNote(card.id, { title: title, content: content, id: new Date().getTime() });
            navigate("/");
        }}
        >
        <TextField
            id={"title"}
            fullWidth
            defaultValue={card.title}
            variant="filled"
            //value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titulo"
        />
        <TextField
            id={"content"}
            multiline
            fullWidth
            defaultValue={card.content}
            variant="filled"
            //value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Ingrese su texto"
        />
        <Button type="submit">Guardar</Button>
        </Box>
    </>
  );
}
