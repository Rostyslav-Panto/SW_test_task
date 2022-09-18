import React from 'react';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {Button} from "@mui/material";
import axios from "axios";

const UserItem = ({user}) => {
    function handleUserDelete(id) {
        try {
            axios.delete(`http://127.0.0.1:8000/api/users/${id}/`)
                .then((response) => response.data)
        } catch (e) {
            alert(e)
        }
        window.location.reload();
    }

    return (<TableRow
        key={user.id}
        sx={{'&:last-child td, &:last-child th': {border: 0}}}
    >
        <TableCell component="th" scope="row">
            {user.id}
        </TableCell>
        <TableCell align="right">{user.user_name}</TableCell>
        <TableCell align="right">{user.created}</TableCell>
        <TableCell align="right">{user.group.group_name}</TableCell>
        <TableCell align="right">
            <Button color="secondary">Edit</Button>
            <Button onClick={() => handleUserDelete(user.id)} color="error">Delete</Button>
        </TableCell>
    </TableRow>);
};

export default UserItem;