import React, {useEffect, useState} from 'react';
import axios from "axios";
import Box from "@mui/material/Box";
import UserForm from "./UserForm";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import UserItem from "./UserItem";
import Paper from "@mui/material/Paper";
import {Table} from "@mui/material";

const UserPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const new_users = await axios.get('http://127.0.0.1:8000/api/users/')
                .then((response) => response.data)
            setUsers(new_users);
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <Box>
                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Id</TableCell>
                                <TableCell align="center">Username</TableCell>
                                <TableCell align="center">Created</TableCell>
                                <TableCell align="center">GroupName</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => <UserItem user={user} key={user.id}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{maxWidth: 300, marginBottom: 10}}>
                <UserForm/>
            </Box>
        </div>
    );
};

export default UserPage;