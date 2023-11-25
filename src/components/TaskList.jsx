import{useEffect, useState } from 'react';
import TaskItem from "./TaskItem"
import Grid from '@mui/material/Grid';
export default function TaskList (){
    //Logica que trae el json a reemplazar
    const[cards, setCards] = useState([""]);
    useEffect(()=>{
        fetch("https://type.fit/api/quotes")
        .then(r=>r.json())
        .then(r=>setCards(r))
    },[])
    return(
        <Grid container spacing={4}>
            {
                cards.length > 0 && cards.map((card, i)=><TaskItem key={i+"/"+ cards.title} card={card}/>)
            }
        </Grid>
    )
}