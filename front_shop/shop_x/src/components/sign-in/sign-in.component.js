import React, { useState } from 'react'
import {FormInput} from '../form-input/form-input.component.js';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import Message from '../msg_alerts/msg-alerts.component';
import {connect} from 'react-redux';
import { sign } from '../../redux/actions/AuthAction.js';
import {withRouter} from 'react-router-dom';
import { USER, validateCredentials } from '../../validations/auth.js';

  const  SignIn = ({sign,history}) => {
  
    const [userCredentials,setCredentials] = useState({email:'',password:''})
    
    const {email,password} = userCredentials;

   const  handleSubmit = async event =>{
        event.preventDefault();

        if(validateCredentials(userCredentials)){
            sign(USER)

            history.push('/shop');
        }else{
            Message('Credenciais Inválidas!','warning');
        }
    
    }

  const   handleChange = event =>{
        const{value,name} = event.target;
        setCredentials({...userCredentials,[name]:value});
    }
        return (
            <div className="sign-in">
                <h2 style={{textAlign:'center'}}>Já tenho uma conta</h2>
                <span style={{textAlign:'center'}}>Logue com seu email e senha</span>
                
            
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    name='email'
                    type='email' 
                    value={email}
                    label={'Email'}
                    handleChange={handleChange}
                    required
                    />

                    <FormInput 
                    name='password'
                    type='password' 
                    value={password}
                    label={'Senha'}
                    handleChange={handleChange}
                    required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'> Logar </CustomButton>
                    {''}
          </div>
                </form>
            </div>
        )
}

const mapDispatchToProps = dispatch =>({
    sign:(userCredentials)=>dispatch(sign(userCredentials)),    
});

export default withRouter(connect(null,mapDispatchToProps)(SignIn))