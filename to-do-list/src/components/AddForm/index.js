import React,{forwardRef} from 'react';
import { Button } from '@material-ui/core';
import {Form} from '@unform/web';
import AddIcon from '@material-ui/icons/Add';
import { InputCustom } from '../input-custom';

const AddForm = ({handleSubmit},ref) => {

  return (
    <Form id='addForm' ref={ref}  initialData={{name:''}} onSubmit={handleSubmit}>
      <InputCustom className='custom-input' name={'name'} placeholder={'Name'}   />
      <Button  type="submit" variant="contained" color="primary">
        <AddIcon/>  Salvar
      </Button>
    </Form>   
  )
};
export default forwardRef(AddForm);
