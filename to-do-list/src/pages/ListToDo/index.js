import { Grid } from '@material-ui/core';
import React from 'react';
import './index.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Delete';



export default function ListToDoPage({items,edit,complete,deleteProp}) {

    return (
       <Grid
       style={{paddingTop:'1rem'}}
       >
            {
                items.map((val,idx)=>(
                    <div key={idx} className={`item ${val.completed ? "completed":""}`}>
                       <span>{val.name}</span>
                       <CheckCircleIcon style={{color:'#ff6c6c'}} onClick={() => complete(val)}/>
                       <EditIcon onClick={() => edit(val)}/>
                       <RemoveIcon onClick={() => deleteProp(val)}/>
                    </div>
                ))
            }
       </Grid>
    )
}
