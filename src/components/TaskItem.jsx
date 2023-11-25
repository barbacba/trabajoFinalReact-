import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
export default function TaskItem({card}){
    return(
        <>
        <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.author}
                    </Typography>
                    <Typography>
                        {card.text} 
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Ver</Button>
                    <Button size="small">Editar</Button>
                    <Button size="small">Eliminar</Button>
                </CardActions>
            </Card>
        </Grid>
        </>
    )
};