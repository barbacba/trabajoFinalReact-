import React from 'react';
import TaskItem from "./TaskItem"
import Grid from '@mui/material/Grid';
import HandlerNotes from "./HandlerNotes";

export default function TaskList ({notes}){
    return(
        <Grid container spacing={4}>
            {
                notes.length > 0 && notes.map((card)=><HandlerNotes key={"handrler"+card.id}><TaskItem key={card.id} card={card}/></HandlerNotes>)
            }
        </Grid>
    )
}