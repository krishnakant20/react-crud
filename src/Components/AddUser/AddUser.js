import React, { useState } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { addUser } from '../../Service/api';
import {useNavigate} from 'react-router-dom';

const useStyle = makeStyles({
    container:{
        width:'80%',
        margin:'5% 0 0 25px',
        '&>*':{
            marginTop:20
        }
    }
})
const initialValues={
    name:'',
    username:'',
    email:'',
    phone:''
}
const AddUser = () => {
    const classes = useStyle();

    const [user,setUser]=useState(initialValues);
    const {name,username,email,phone}=user;
    const historyNavigate= useNavigate();

    const onValueChange =(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const addUserDetails = async()=>{
        await addUser(user);
        historyNavigate('/all');
    }
    return (
        <>
            <FormGroup className={classes.container}>
                <Typography>Create New User</Typography>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name='name' value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name='username' value={username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Gmail</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name='email' value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>onValueChange(e)} name='phone' value={phone} />
                </FormControl>
                <Button onClick={()=>addUserDetails()} variant='contained' color='primary'>Create User</Button>
            </FormGroup>
        </>
    )
}

export default AddUser