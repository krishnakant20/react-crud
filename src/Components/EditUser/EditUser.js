import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { editUser, getUsers } from '../../Service/api';
import {useNavigate, useParams} from 'react-router-dom';


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
const EditUser = () => {
    const classes = useStyle();

    const [user,setUser]=useState(initialValues);
    const {name,username,email,phone}=user;
    const historyNavigate= useNavigate();

    // api call to get user details prefilled
    const {id}=useParams();

    useEffect(()=>{
        loadUserData();
    },[])

    const loadUserData = async()=>{
       const responseEdit = await getUsers(id);
       setUser(responseEdit.data);
    }

    // finish api call to get user details prefilled

    const onValueChange =(e)=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
        console.log(user);
    }

    const editUserDetails = async()=>{
        await editUser(id,user);
        historyNavigate('/all');
    }
    return (
        <>
            <FormGroup className={classes.container}>
                <Typography>Update User</Typography>
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
                <Button onClick={()=>editUserDetails()} variant='contained' color='primary'>Update User</Button>
            </FormGroup>
        </>
    )
}

export default EditUser;