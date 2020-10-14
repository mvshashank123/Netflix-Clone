import React, { useState } from 'react';
import {TextField} from '@material-ui/core';
import {auth} from './firebase';
import {Link,useHistory} from 'react-router-dom'
import "./Login.css";
import { useDispatch } from 'react-redux';

function Login() {
    //Login component
    const dispatch=useDispatch();
    const history=useHistory();
    const [email,setEmail] =useState('');
    const [password,setPassword] =useState('');

    const login=(e)=>{
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            dispatch({
                type: "CREATE_LOGIN",
                payload:{
                    email:email
                }
            })
            //logged in
            history.push("/home")
        })
        .catch(e=>alert(e.message));
    }

    const signup=(e)=>{
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            //created user and logged in
            dispatch({
                type: "CREATE_LOGIN",
                payload:{
                    email:email
                }
            })
            history.push("/home")
            
        })
        .catch((e)=>alert(e.message))
    }


    return (
        <div className="login">
            <div className ="login__container">
                <h1 className="login__header">Sign In</h1>
                
                <TextField input={email} type="email" onChange={(event)=>setEmail(event.target.value)} className="login__input" label="Enter the Email" InputLabelProps={{style: { color: 'black' },}} variant="filled" />
                <TextField input={password} type="password" onChange={(event)=>setPassword(event.target.value)} className="login__input" label="Enter the password"  InputLabelProps={{style: { color: 'black' },}}  variant="filled" />
                <button className="login__button" disabled>
                <Link className="link" to="/" onClick={login}>
                Sign In
                </Link>
                </button>
                <h5>Need help?</h5>
                
                
                
                <h4>New to Netflix?    <Link to='/' onClick={signup}><strong>Sign up now.</strong></Link></h4>
                
            </div>
            
        </div>
    )
}

export default Login
