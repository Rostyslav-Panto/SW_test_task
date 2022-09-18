import React from 'react';
import TableCell from "@mui/material/TableCell";
import {Button} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

const GroupItem = ({group}) => {

    function handleGroupDelete (id) {
        try {
            axios.delete(`http://127.0.0.1:8000/api/groups/${id}/`)
                .then((response) => response.data)
        } catch (e) {
            alert(e)
        }
        window.location.reload();
    }
    return (
        <TableRow
            key={group.id}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell component="th" scope="row">
                {group.id}
            </TableCell>
            <TableCell align="right">{group.group_name}</TableCell>
            <TableCell align="right">{group.description}</TableCell>
            <TableCell align="right">
                <Button color="secondary">Edit</Button>
                <Button onClick={() => handleGroupDelete(group.id)} color="error">Delete</Button>
            </TableCell>
        </TableRow>
    );
};

export default GroupItem;