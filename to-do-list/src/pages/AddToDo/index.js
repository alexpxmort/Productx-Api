import { Grid } from '@material-ui/core';
import React,{useState,useRef} from 'react'
import AddForm from '../../components/AddForm';
import {uuid} from 'uuidv4';
import ListToDo from '../../components/ListToDo';
import { schemaToDo } from '../../validations/addToDo.validation';
import * as Yup from 'yup';
import { getStyles } from '../../utils/screen';
import { isEmpty } from '../../utils/string.utils';


const AddToDoPage = () => {

    let json = [];
    if(!isEmpty(localStorage.getItem('tasks'))){
        json = JSON.parse(localStorage.getItem('tasks'));
    }
    const [tasks,setTasks] = useState(json);
    const [finishedTask,setFinishedTask] = useState(false);
    const [task,setTask] = useState(null);
    const [isEditing,setIsEditing] = useState(false);
    const formRef = useRef(null);

    const saveTasksStorage = (tasks)=> localStorage.setItem('tasks',JSON.stringify(tasks));
    const clearField = ()=>formRef.current.setData({name:''});

    const submit = async (data)=>{
        
        try{
            await schemaToDo.validate(data, { abortEarly: false });
            if (formRef) {
                formRef.current.setErrors({});
            }

            if(isEditing){
                updateToDo(task,data);
            }else{
                addToDo(data)
            }

        }catch(err){
            const errorMessages = {};

        if (err instanceof Yup.ValidationError) {
            err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
            });
         }

            if (formRef) {
                formRef.current.setErrors(errorMessages);
            }
        }
               
    }

    const addToDo  = async (data)=>{
        let newTask = {
            ...data,
            id:uuid(),
            completed:false,
            created_at:new Date(),
            updated_at:new Date()
        }
        
        setTasks([...tasks,newTask]);
        saveTasksStorage([...tasks,newTask]);
        clearField();
    }

    const edit = (val)=>{
        formRef.current.setData(val);
        setIsEditing(true);
        setTask(val);
    }

    const updateToDo = (obj,newObj) =>{
        tasks.forEach((val)=>{
            if(val.id === obj.id){
                val.name = newObj.name
                val.updated_at = new Date()
            }
        })

        saveTasksStorage(tasks);
        setIsEditing(false);
        clearField();
    }

    
    const removeToDo =  (obj) =>{
        let newTodos = tasks.filter((val)=>val.id !== obj.id);
         setTasks(newTodos);

         if(newTodos.length > 0){
            saveTasksStorage(newTodos);
         }else{
             localStorage.removeItem('tasks');
         }
    }

    
    const completeToDo = (obj) =>{
        tasks.forEach((val)=>{
            if(val.id === obj.id){
                val.completed = true
                val.updated_at = new Date()
            }
        })

        saveTasksStorage();
        setFinishedTask(true);

        setTimeout(()=>{
            setFinishedTask(false);
        },2000);
    }

    return (
       <Grid
       container
       spacing={10}
       style={getStyles()}
       >
        <Grid
        item
        xs={12} sm={6} md={4} xl={3}
        >
            <AddForm id='formComponent' ref={formRef} handleSubmit={submit} />
           {
               (!finishedTask)?(
                <ListToDo id='listComponent' items={tasks} edit={edit} deleteProp={removeToDo} complete={completeToDo} />
               ):<div/>
           }
        </Grid>
       </Grid>
    )
}

export default AddToDoPage;