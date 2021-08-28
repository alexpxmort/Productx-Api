import { Grid } from '@material-ui/core';
import React from 'react';
import './index.scss';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import EditIcon from '@material-ui/icons/Edit';
import RemoveIcon from '@material-ui/icons/Delete';



export default function ListToDo({items,edit,complete,deleteProp}) {

    return (
       <Grid
       id='grid_container_items'
       style={{paddingTop:'1rem'}}
       >
            {
                items.map((val,idx)=>(
                    <div key={idx} className={`item ${val.completed ? "completed":""}`}>
                       <span>{val.name}</span>
                       <CheckCircleIcon className='check' style={{color:'#ff6c6c'}} onClick={() => complete(val)}/>
                       <EditIcon className='edit' onClick={() => edit(val)}/>
                       <RemoveIcon className='remove' onClick={() => deleteProp(val)}/>
                    </div>
                ))
            }
       </Grid>
    )
}
