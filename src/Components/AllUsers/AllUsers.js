import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { getUsers,deleteUser } from '../../Service/api'
import { makeStyles } from '@mui/styles';
import { NavLink } from "react-router-dom";


const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 0 0 0'
    },
    thead: {
        '&>*': {
            background: '#90EE90'
        }
    }
})

const AllUsers = () => {

    const [users, setUsers] = useState([]);
    const classes = useStyle();


    useEffect(() => {
        getAllUsers();


    }, [])


    const getAllUsers = async () => {
        const responseGET = await getUsers();
        console.log(responseGET.data);
        setUsers(responseGET.data);
    }

    // deleteting user
    const deleteUserData = async(id)=>{
        await deleteUser(id);
        getAllUsers();
    }


    return (
        <>
            <div>AllUsers</div>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow className={classes.thead}>
                        <TableCell>ID</TableCell>
                        <TableCell>Name:</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Gmail</TableCell>
                        <TableCell>Phone:</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (
                            <TableRow>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button variant='contained' color='primary' style={{marginRight:10}} component={NavLink} exact to={`/edit/${user.id}`} >Edit</Button>
                                    <Button variant='contained' color='secondary' style={{marginRight:10}} onClick={()=>deleteUserData(user.id)} >Delete</Button>
                                    </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </>
    )
}

export default AllUsers