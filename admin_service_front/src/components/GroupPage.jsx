import React, {useEffect, useState} from 'react';
import axios from "axios";
import GroupItem from "./GroupItem";
import GroupForm from "./GroupForm";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const UserPage = () => {
    const [groups, setGroups] = useState([])

    useEffect(() => {
        fetchGroups()
    }, [])

    async function fetchGroups() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/groups/')
            setGroups(response.data)
        } catch (e) {
            alert(e)
        }
    }


    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Id</TableCell>
                            <TableCell align="center">GroupName</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {groups.map((group) => <GroupItem group={group} key={group.id}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
            <GroupForm/>
        </div>
    );
};

export default UserPage;
