import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LigthBox from './LightBox';
import EditNoteForm from "./EditNoteForm";
import HandlerNotes from "./HandlerNotes";
export default function TaskItem({card,deleteNote}){
    return(
        <>
        <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                    </Typography>
                    <Typography>
                        {card.content} 
                    </Typography>
                </CardContent>
                <CardActions>
                    <LigthBox 
                    handleEventEl={<Button size="small">Ver</Button>}
                    content={
                        <>
                        <Typography gutterBottom variant="h5" component="h2">
                            {card.title}
                        </Typography>
                        <Typography>
                            {card.content} 
                        </Typography>
                        </>
                    }
                    />
                    <LigthBox 
                    handleEventEl={<Button size="small">Editar</Button>}
                    content={<HandlerNotes><EditNoteForm card={card}/></HandlerNotes>}
                    />
                    <Button onClick={()=>deleteNote(card.id)}size="small">Eliminar</Button>
                </CardActions>
            </Card>
        </Grid>
        </>
    )
};